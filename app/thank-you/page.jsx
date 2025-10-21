// app/thank-you/page.js
'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, Clock } from 'lucide-react';
import Button from '../../components/UI/Button';
import Link from 'next/link';

export default function ThankYouPage() {
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <CheckCircle className="w-20 h-20 text-accent mx-auto" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your inquiry has been received successfully. Our team will contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Steps Section */}
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
              What Happens Next?
            </h2>
            <p className="text-gray-600 text-lg">
              Here's what you can expect from our process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: 'Review Your Request',
                description: 'Our specialists are reviewing your vehicle details and part requirements.',
                time: 'Within 1-2 hours'
              },
              {
                icon: Mail,
                title: 'Inventory Check',
                description: 'We search our nationwide inventory for the perfect match for your vehicle.',
                time: 'Within 4-6 hours'
              },
              {
                icon: Phone,
                title: 'Personal Contact',
                description: 'You will receive a detailed quote and consultation from our expert.',
                time: 'Within 24 hours'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {step.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Don't wait - contact our team directly for urgent inquiries
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-3 text-white">
                <Phone className="text-accent" size={24} />
                <span className="text-xl font-semibold">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Mail className="text-accent" size={24} />
                <span className="text-xl font-semibold">info@autoparts.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('tel:5551234567', '_self')}
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Phone size={18} className="mr-2" />
                Call Now
              </Button>
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How long will it take to get my quote?',
                answer: 'Most quotes are provided within 24 hours. For urgent requests, call us directly.'
              },
              {
                question: 'Do you offer warranties on your parts?',
                answer: 'Yes! All our parts come with a 90-day warranty for your peace of mind.'
              },
              {
                question: 'What is your shipping time?',
                answer: 'Most parts are delivered within 3-4 business days via our nationwide shipping network.'
              },
              {
                question: 'Can I return a part if it doesnt fit?',
                answer: 'We ensure compatibility before shipping. If there are any issues, contact us immediately for a solution.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}