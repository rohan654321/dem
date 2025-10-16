// app/returns/page.js
'use client';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function ReturnsPage() {
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
              Returns & Warranty
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our commitment to your satisfaction with comprehensive warranty coverage and easy returns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              90-Day Warranty
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive protection on all parts from delivery date
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">What's Covered</h3>
              <div className="space-y-4">
                {[
                  'Manufacturing defects',
                  'Functional failures',
                  'Core internal components',
                  'Seals and gaskets',
                  'Electrical components'
                ].map((item, index) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">What's Not Covered</h3>
              <div className="space-y-4">
                {[
                  'Normal wear and tear',
                  'Improper installation',
                  'Accident damage',
                  'Modifications or alterations',
                  'Racing or competition use'
                ].map((item, index) => (
                  <div key={item} className="flex items-center space-x-3">
                    <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Returns Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Return Policy
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Easy returns within 30 days of delivery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Clock,
                  title: '30-Day Window',
                  description: 'Returns accepted within 30 days of delivery date'
                },
                {
                  icon: Shield,
                  title: 'Original Condition',
                  description: 'Parts must be unused and in original packaging'
                },
                {
                  icon: CheckCircle,
                  title: 'Free Returns',
                  description: 'Free returns for incompatible parts (verified by VIN)'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">Return Process</h3>
              <div className="space-y-6">
                {[
                  {
                    step: 'Contact Support',
                    description: 'Reach out to our team to initiate your return'
                  },
                  {
                    step: 'Get RMA Number',
                    description: 'We\'ll provide a Return Merchandise Authorization number'
                  },
                  {
                    step: 'Package Item',
                    description: 'Securely package the part in original packaging'
                  },
                  {
                    step: 'Ship Back',
                    description: 'Use provided shipping label to return the item'
                  },
                  {
                    step: 'Receive Refund',
                    description: 'Get your refund processed within 5-7 business days'
                  }
                ].map((item, index) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{item.step}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}