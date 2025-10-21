// app/api/lead/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: { json: () => any; }) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['year', 'car', 'model', 'part', 'name', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Use hardcoded credentials for testing (remove later)
    const GMAIL_USER = "mondalrohan201@gmail.com";
    const GMAIL_PASS = "vwpg xiry lmgg jgbp";
    const ADMIN_EMAIL = "mondalrohan201@gmail.com";

    // Create transporter with direct credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('✅ Gmail transporter verified successfully');
    } catch (verifyError) {
      console.error('❌ Gmail configuration error:', verifyError);
      console.log('Form data (email failed):', formData);
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully! We will contact you soon.' },
        { status: 200 }
      );
    }

    // Email content for admin
    const adminMailOptions = {
      from: GMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Lead: ${formData.year} ${formData.car} ${formData.model} - ${formData.part}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Parts Inquiry</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Auto Parts Company</p>
          </div>
          
          <div style="padding: 20px; background: #f8fafc;">
            <h2 style="color: #1f2937; margin-bottom: 15px;">🚗 Vehicle Information</h2>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626;">Vehicle:</strong> ${formData.year} ${formData.car} ${formData.model}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626;">Part Needed:</strong> ${formData.part}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626;">Engine Size:</strong> ${formData.engineSize || 'Not specified'}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626;">Transmission:</strong> ${formData.transmission || 'Not specified'}
            </div>

            <h2 style="color: #1f2937; margin-bottom: 15px;">📞 Contact Information</h2>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #3b82f6;">Name:</strong> ${formData.name}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #3b82f6;">Email:</strong> ${formData.email}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #3b82f6;">Phone:</strong> ${formData.phone}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #3b82f6;">Location:</strong> ${formData.zipCode || 'Not provided'}
            </div>

            <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; text-align: center;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()} • 
              <strong> Consent:</strong> ${formData.consent ? '✅ Given' : '❌ Not Given'}
            </div>
          </div>
        </div>
      `,
    };

    // Email content for customer
    const customerMailOptions = {
      from: GMAIL_USER,
      to: formData.email,
      subject: 'Thank You for Your Inquiry - Auto Parts Company',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Thank You, ${formData.name}!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
              We've received your inquiry for a <strong>${formData.part}</strong> for your 
              <strong> ${formData.year} ${formData.car} ${formData.model}</strong>.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #dc2626; margin-top: 0;">What Happens Next:</h3>
              <ul style="color: #374151; line-height: 1.6;">
                <li>🔍 Our specialists are searching our inventory</li>
                <li>📞 We'll contact you within 24 hours</li>
                <li>💰 You'll receive a competitive quote</li>
                <li>🚚 Fast nationwide shipping available</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 25px 0;">
              <p style="margin-bottom: 15px;"><strong>Need immediate assistance?</strong></p>
              <a href="tel:5551234567" style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                📞 Call Now: (555) 123-4567
              </a>
            </div>
          </div>
          
          <div style="background: #e5e7eb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
            <p style="margin: 0;"><strong>Auto Parts Company</strong><br>
            1234 Auto Parts Drive, Detroit, MI 48201<br>
            📞 (555) 123-4567 | ✉️ info@autoparts.com</p>
          </div>
        </div>
      `,
    };

    // Send emails
    console.log('📧 Attempting to send emails...');
    await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent successfully');
    
    // Send confirmation email to customer
    if (formData.email && formData.consent) {
      await transporter.sendMail(customerMailOptions);
      console.log('✅ Customer confirmation email sent successfully');
    }

    console.log('🎉 All emails sent successfully!');
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Form submitted successfully! We will contact you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to submit form. Please try again.' 
      },
      { status: 500 }
    );
  }
}