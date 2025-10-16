// app/return-policy/page.js
'use client';
import { motion } from 'framer-motion';
import { RefreshCw, Package, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function ReturnPolicyPage() {
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
              Return Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Simple and straightforward returns for your peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                30-Day Return Window
              </h2>
              <p className="text-gray-600 text-lg">
                We want you to be completely satisfied with your purchase
              </p>
            </motion.div>

            {/* Eligibility Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  Eligible for Return
                </h3>
                <div className="space-y-4">
                  {[
                    'Parts in original condition and packaging',
                    'Incompatible parts (verified by VIN)',
                    'Defective parts (within warranty period)',
                    'Wrong parts shipped by us',
                    'Unopened and unused items'
                  ].map((item, index) => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                  <XCircle className="text-red-500 mr-3" size={24} />
                  Not Eligible for Return
                </h3>
                <div className="space-y-4">
                  {[
                    'Parts installed or used',
                    'Modified or altered items',
                    'Damage from improper installation',
                    'Normal wear and tear',
                    'Special order or custom parts'
                  ].map((item, index) => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Return Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
                Return Process Steps
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: '1', icon: Clock, title: 'Contact Us', description: 'Within 30 days of delivery' },
                  { step: '2', icon: Package, title: 'Get RMA', description: 'Receive return authorization' },
                  { step: '3', icon: RefreshCw, title: 'Package', description: 'Original packaging required' },
                  { step: '4', icon: CheckCircle, title: 'Ship Back', description: 'Use provided label' },
                  { step: '5', icon: RefreshCw, title: 'Refund', description: 'Processed in 5-7 days' }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                      {item.step}
                    </div>
                    <item.icon className="mx-auto mb-2 text-primary" size={20} />
                    <h4 className="font-semibold text-primary text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Refund Information */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">Refund Details</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Refund Timeline',
                    content: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. The timing of credit appearing on your statement depends on your financial institution.'
                  },
                  {
                    title: 'Shipping Costs',
                    content: 'Original shipping costs are non-refundable. Return shipping is free for incompatible or defective parts. For other returns, customers are responsible for return shipping costs.'
                  },
                  {
                    title: 'Restocking Fees',
                    content: 'No restocking fees for returns within 30 days. Special order items may be subject to a 15% restocking fee if returned.'
                  },
                  {
                    title: 'Exchange Policy',
                    content: 'We prefer to process refunds rather than exchanges. For a different part, please place a new order after receiving your refund.'
                  }
                ].map((item, index) => (
                  <div key={item.title} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.content}</p>
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