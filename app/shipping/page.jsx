// app/shipping/page.js
'use client';
import { motion } from 'framer-motion';
import { Truck, Clock, Package, MapPin, Shield } from 'lucide-react';

const shippingMethods = [
  {
    icon: Truck,
    title: 'Standard Shipping',
    time: '3-5 business days',
    cost: 'Calculated at checkout',
    description: 'Our most popular option with reliable nationwide delivery'
  },
  {
    icon: Clock,
    title: 'Expedited Shipping',
    time: '1-2 business days',
    cost: 'Additional $75-150',
    description: 'Priority handling and faster delivery for urgent needs'
  },
  {
    icon: Shield,
    title: 'White Glove Service',
    time: 'Scheduled delivery',
    cost: 'Quote required',
    description: 'Professional delivery with placement assistance for heavy items'
  }
];

const coverageAreas = [
  'All 50 US States',
  'Major metropolitan areas',
  'Rural locations',
  'Commercial addresses',
  'Residential addresses'
];

export default function ShippingPage() {
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
              Shipping Information
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Fast, reliable nationwide delivery for all your auto part needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Methods */}
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
              Shipping Options
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the delivery method that works best for your timeline and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {shippingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-8 text-center border border-gray-200"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {method.title}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock size={18} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">{method.time}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Package size={18} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">{method.cost}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Nationwide Coverage
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We deliver to all 50 states with reliable carriers that specialize in automotive parts transportation.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {coverageAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <MapPin className="text-accent flex-shrink-0" size={18} />
                    <span className="text-gray-700">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Shipping Timeline
              </h3>
              <div className="space-y-6">
                {[
                  { step: 'Order Processing', time: '1-2 business days', description: 'Parts inspection and packaging' },
                  { step: 'Carrier Pickup', time: 'Same day processing', description: 'Scheduled with our logistics team' },
                  { step: 'In Transit', time: '1-5 business days', description: 'Track your shipment in real-time' },
                  { step: 'Delivery', time: 'Scheduled arrival', description: 'Professional delivery service' }
                ].map((item, index) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{item.step}</h4>
                      <p className="text-gray-600 text-sm">{item.time}</p>
                      <p className="text-gray-500 text-sm">{item.description}</p>
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