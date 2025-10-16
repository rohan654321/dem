// app/terms/page.js
'use client';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
              {/* Quick Summary */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="text-green-600" size={24} />
                    <h3 className="text-lg font-semibold text-green-800">Your Rights</h3>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li>• 90-day warranty protection</li>
                    <li>• 30-day return window</li>
                    <li>• Professional support</li>
                    <li>• Secure transactions</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-orange-50 border border-orange-200 rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertCircle className="text-orange-600" size={24} />
                    <h3 className="text-lg font-semibold text-orange-800">Important Notes</h3>
                  </div>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Verify vehicle compatibility</li>
                    <li>• Professional installation recommended</li>
                    <li>• Read warranty terms carefully</li>
                    <li>• Keep original packaging</li>
                  </ul>
                </motion.div>
              </div>

              {/* Detailed Terms */}
              <div className="space-y-8">
                {[
                  {
                    title: 'Acceptance of Terms',
                    content: 'By accessing and using AutoParts Zone services, you accept and agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services.'
                  },
                  {
                    title: 'Account Registration',
                    content: 'You may need to register an account to access certain features. You are responsible for maintaining confidentiality and all activities under your account.'
                  },
                  {
                    title: 'Product Information',
                    content: 'We strive for accuracy in product descriptions and pricing. However, we reserve the right to correct errors and update information. All parts are used and sold as-is unless otherwise specified.'
                  },
                  {
                    title: 'Order Acceptance',
                    content: 'Order acceptance is subject to part availability and verification. We reserve the right to refuse or cancel orders for any reason, including suspected fraud or pricing errors.'
                  },
                  {
                    title: 'Shipping and Delivery',
                    content: 'Shipping times are estimates and not guaranteed. Risk of loss passes to you upon delivery. You are responsible for inspecting parts upon receipt.'
                  },
                  {
                    title: 'Returns and Warranty',
                    content: 'Returns are subject to our Return Policy. Warranty claims must follow the procedures outlined in our Warranty Policy. Normal wear and tear are not covered.'
                  },
                  {
                    title: 'Intellectual Property',
                    content: 'All content on our website, including text, graphics, logos, and software, is our property and protected by intellectual property laws.'
                  },
                  {
                    title: 'Limitation of Liability',
                    content: 'We are not liable for any indirect, incidental, or consequential damages arising from use of our services or products beyond the warranty coverage provided.'
                  },
                  {
                    title: 'Governing Law',
                    content: 'These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts located in Los Angeles County, California.'
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
                    <div className="flex items-center space-x-3 mb-4">
                      <FileText className="text-primary" size={20} />
                      <h3 className="text-2xl font-semibold text-primary">{section.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </motion.div>
                ))}
              </div>

              {/* Last Updated */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-secondary rounded-2xl text-center"
              >
                <p className="text-gray-600">
                  <strong>Last Updated:</strong> January 1, 2024
                </p>
                <p className="text-gray-600 mt-2">
                  These terms may be updated periodically. Continued use constitutes acceptance of changes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}