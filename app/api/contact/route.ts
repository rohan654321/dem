// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: { json: () => any; }) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Use Gmail credentials
    const GMAIL_USER = "usautoparts74@gmail.com";
    const GMAIL_PASS = "mbgq yvxq jsck jbup";
    const ADMIN_EMAIL = "usautoparts74@gmail.com";

    // Create transporter
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
      console.log('✅ Contact form: Gmail transporter verified successfully');
    } catch (verifyError) {
      console.error('❌ Contact form: Gmail configuration error:', verifyError);
      return NextResponse.json(
        { success: true, message: 'Message sent successfully! We will contact you soon.' },
        { status: 200 }
      );
    }

    // Email content for admin
    const adminMailOptions = {
      from: GMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Contact Form: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Auto Parts Company</p>
          </div>
          
          <div style="padding: 20px; background: #f8fafc;">
            <h2 style="color: #1f2937; margin-bottom: 15px;">📧 Contact Information</h2>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626;">Name:</strong> ${formData.name}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626;">Email:</strong> ${formData.email}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626;">Phone:</strong> ${formData.phone || 'Not provided'}
            </div>
            
            <div style="background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626;">Subject:</strong> ${formData.subject}
            </div>

            ${formData.vehicleInfo ? `
            <div style="background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #3b82f6;">Vehicle Information:</strong> ${formData.vehicleInfo}
            </div>
            ` : ''}

            <h2 style="color: #1f2937; margin-bottom: 15px;">💬 Message</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; line-height: 1.6; color: #374151;">${formData.message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </div>
          </div>
        </div>
      `,
    };

    // Email content for customer confirmation
    const customerMailOptions = {
      from: GMAIL_USER,
      to: formData.email,
      subject: 'Thank You for Contacting Auto Parts Company',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Thank You, ${formData.name}!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
              We've received your message regarding <strong>${formData.subject}</strong> and our team will get back to you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #dc2626; margin-top: 0; margin-bottom: 15px;">Message Summary:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px;"><strong>Subject:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">${formData.subject}</td>
                </tr>
                ${formData.vehicleInfo ? `
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><strong>Vehicle:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">${formData.vehicleInfo}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;"><strong>Submitted:</strong></td>
                  <td style="padding: 8px 0; color: #374151;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #fff7ed; padding: 15px; border-radius: 8px; border-left: 4px solid #ea580c; margin: 20px 0;">
              <h4 style="color: #ea580c; margin-top: 0; margin-bottom: 10px;">What to Expect:</h4>
              <ul style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>Our expert will review your inquiry</li>
                <li>We'll provide detailed information and pricing</li>
                <li>You'll receive a response within 24 hours</li>
                <li>For urgent matters, call us directly</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 25px 0;">
              <p style="margin-bottom: 15px; color: #374151;"><strong>Need immediate assistance?</strong></p>
              <a href="tel:5551234567" style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                📞 Call Now: (555) 123-4567
              </a>
            </div>
          </div>
          
          <div style="background: #e5e7eb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
            <p style="margin: 0;"><strong>Auto Parts Company</strong><br>
            1234 Auto Parts Drive, Detroit, MI 48201<br>
            📞 (555) 123-4567 | ✉️ support@autopartszone.com</p>
          </div>
        </div>
      `,
    };

    // Send emails
    console.log('📧 Contact form: Attempting to send emails...');
    
    // Send admin notification
    await transporter.sendMail(adminMailOptions);
    console.log('✅ Contact form: Admin email sent successfully');
    
    // Send customer confirmation
    await transporter.sendMail(customerMailOptions);
    console.log('✅ Contact form: Customer confirmation email sent successfully');

    console.log('🎉 Contact form: All emails sent successfully!');
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully! We will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form: Error sending email:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send message. Please try again or call us directly.' 
      },
      { status: 500 }
    );
  }
}