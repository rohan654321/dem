// app/shipping-policy/page.js
'use client';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin, Clock, DollarSign } from 'lucide-react';

export default function ShippingPolicyPage() {
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
              Shipping Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Clear information about our shipping processes and timelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Overview */}
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
                <Truck className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Shipping Information
              </h2>
              <p className="text-gray-600 text-lg">
                Reliable nationwide delivery for automotive parts
              </p>
            </motion.div>

            {/* Shipping Methods */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Truck,
                  title: 'Standard Shipping',
                  time: '3-5 business days',
                  cost: 'Calculated at checkout',
                  features: ['Nationwide coverage', 'Tracking included', 'Signature required']
                },
                {
                  icon: Clock,
                  title: 'Expedited Shipping',
                  time: '1-2 business days',
                  cost: '+$75-150',
                  features: ['Priority handling', 'Express carriers', 'Guaranteed delivery']
                },
                {
                  icon: Package,
                  title: 'Freight Shipping',
                  time: '5-7 business days',
                  cost: 'Quote required',
                  features: ['Heavy items', 'Liftgate service', 'Commercial delivery']
                }
              ].map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-secondary rounded-2xl p-6 text-center border border-gray-200"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{method.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock size={16} className="text-gray-600" />
                      <span className="text-gray-700 text-sm">{method.time}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <DollarSign size={16} className="text-gray-600" />
                      <span className="text-gray-700 text-sm">{method.cost}</span>
                    </div>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {method.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Processing Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">Order Processing Timeline</h3>
              <div className="space-y-6">
                {[
                  {
                    step: 'Order Confirmation',
                    time: 'Immediate',
                    description: 'You\'ll receive order confirmation via email immediately after purchase'
                  },
                  {
                    step: 'Parts Inspection',
                    time: '1-2 business days',
                    description: 'Each part undergoes final quality inspection and testing'
                  },
                  {
                    step: 'Packaging',
                    time: 'Same day',
                    description: 'Professional packaging to ensure safe transit'
                  },
                  {
                    step: 'Carrier Handoff',
                    time: 'Next business day',
                    description: 'Scheduled pickup with our logistics partners'
                  },
                  {
                    step: 'In Transit',
                    time: '1-5 business days',
                    description: 'Real-time tracking available via email updates'
                  }
                ].map((item, index) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-primary">{item.step}</h4>
                        <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full border">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-primary">Delivery Areas</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• All 50 US states</li>
                  <li>• Residential addresses</li>
                  <li>• Commercial locations</li>
                  <li>• PO Boxes (size restrictions)</li>
                  <li>• Military addresses (APO/FPO)</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Package className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-primary">Special Handling</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Signature required for delivery</li>
                  <li>• Heavy items need assistance</li>
                  <li>• Keep original packaging</li>
                  <li>• Inspect upon delivery</li>
                  <li>• Report damage immediately</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}