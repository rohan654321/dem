// app/privacy-policy/page.js
'use client';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, User } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How we protect and use your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    icon: User,
                    title: 'Information We Collect',
                    items: ['Contact details', 'Vehicle information', 'Purchase history', 'Payment information']
                  },
                  {
                    icon: Lock,
                    title: 'How We Protect Data',
                    items: ['SSL encryption', 'Secure servers', 'Regular audits', 'Access controls']
                  },
                  {
                    icon: Eye,
                    title: 'Your Rights',
                    items: ['Access your data', 'Correct information', 'Delete account', 'Opt-out of marketing']
                  },
                  {
                    icon: Shield,
                    title: 'Data Usage',
                    items: ['Order processing', 'Customer support', 'Service improvement', 'Legal compliance']
                  }
                ].map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary rounded-2xl p-6"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <section.icon className="text-primary" size={24} />
                      <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: 'Information Collection',
                    content: 'We collect personal information that you provide when making purchases, creating accounts, or contacting our support team. This includes name, email, phone number, vehicle information, and payment details.'
                  },
                  {
                    title: 'Data Usage',
                    content: 'Your information is used to process orders, provide customer support, improve our services, and communicate important updates. We do not sell your personal information to third parties.'
                  },
                  {
                    title: 'Data Protection',
                    content: 'We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information from unauthorized access.'
                  },
                  {
                    title: 'Third-Party Services',
                    content: 'We may use trusted third-party services for payment processing, shipping, and analytics. These providers are required to protect your information and use it only for the services they provide.'
                  },
                  {
                    title: 'Cookies and Tracking',
                    content: 'Our website uses cookies to enhance user experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.'
                  },
                  {
                    title: 'Policy Updates',
                    content: 'We may update this privacy policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.'
                  }
                ].map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 pb-8"
                  >
                    <h3 className="text-2xl font-semibold text-primary mb-4">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </motion.div>
                ))}
              </div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 p-8 bg-primary rounded-2xl text-white text-center"
              >
                <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our privacy team for any questions about how we handle your data.
                </p>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Contact Privacy Team
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}