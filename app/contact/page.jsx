// app/contact/page.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { FormContainer, InputField, SelectField, TextAreaField } from '../../components/UI/Form';
import Button from '../../components/UI/Button';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    vehicleInfo: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(555) 123-4567',
      description: 'Mon-Fri 8AM-6PM PST',
      action: 'tel:5551234567',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@autopartszone.com',
      description: '24/7 email support',
      action: 'mailto:support@autopartszone.com',
      color: 'bg-blue-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Auto Parts Dr',
      description: 'Los Angeles, CA 90001',
      action: '#',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Sat: 8AM-6PM PST',
      description: 'Sunday: Closed',
      action: '#',
      color: 'bg-orange-500'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: result.message || 'Message sent successfully! We will contact you within 24 hours.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          vehicleInfo: '',
          message: ''
        });

        // Optionally redirect to thank you page
        // router.push('/contact-thank-you');
        
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-secondary pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Have questions about our used engines or transmissions? Our expert team 
              is here to help you find the perfect part for your vehicle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Multiple ways to reach our automotive experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-secondary rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-800 font-medium mb-1">
                  {method.details}
                </p>
                <p className="text-gray-600 text-sm">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg border ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center space-x-2">
                    {submitMessage.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <XCircle className="w-5 h-5" />
                    )}
                    <span>{submitMessage.text}</span>
                  </div>
                </div>
              )}

              <FormContainer
                title="Send us a Message"
                subtitle="Fill out the form below and we'll get back to you within 24 hours"
                onSubmit={handleSubmit}
                submitButton={{
                  text: isSubmitting ? 'Sending...' : 'Send Message',
                  variant: 'primary',
                  size: 'lg',
                  loading: isSubmitting,
                  disabled: isSubmitting,
                  icon: isSubmitting ? null : Send
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                  
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />

                  <SelectField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Select inquiry type"
                    options={[
                      { value: 'engine', label: 'Engine Inquiry' },
                      { value: 'transmission', label: 'Transmission Inquiry' },
                      { value: 'shipping', label: 'Shipping Question' },
                      { value: 'warranty', label: 'Warranty Support' },
                      { value: 'other', label: 'Other' }
                    ]}
                    required
                  />
                </div>

                <InputField
                  label="Vehicle Information"
                  name="vehicleInfo"
                  value={formData.vehicleInfo}
                  onChange={handleChange}
                  placeholder="Year, Make, Model (e.g., 2018 Honda Civic)"
                />

                <TextAreaField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your automotive needs..."
                  rows={5}
                  required
                />
              </FormContainer>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Support */}
              <div className="bg-primary text-white rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="text-accent" size={24} />
                  <h3 className="text-xl font-semibold">Quick Support</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Need immediate assistance? Our support team is ready to help you 
                  find the right part for your vehicle.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('tel:5551234567', '_self')}
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </Button>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Expert advice on part compatibility',
                    'Competitive pricing quotes',
                    'Warranty information',
                    'Shipping timeframes',
                    'Technical specifications'
                  ].map((item, index) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-accent text-white rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock size={20} />
                  <h3 className="font-semibold">Fast Response</h3>
                </div>
                <p className="text-white/90 text-sm">
                  We typically respond to all inquiries within 2 hours during 
                  business hours. Emergency requests get priority handling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-primary to-slate-900 min-h-[400px] flex items-center justify-center text-white">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                  <p>123 Auto Parts Drive</p>
                  <p>Los Angeles, CA 90001</p>
                </div>
              </div>

              {/* Location Info */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Visit Our Facility
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                    <p className="text-gray-600">
                      123 Auto Parts Drive<br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Facility Features</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Climate-controlled storage</li>
                      <li>• OEM testing equipment</li>
                      <li>• Professional packaging</li>
                      <li>• Same-day shipping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}