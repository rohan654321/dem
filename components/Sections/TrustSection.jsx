// components/Sections/TrustSection.jsx
'use client';
import { motion } from 'framer-motion';
import { Shield, Truck, Wrench, HeadphonesIcon as Support } from 'lucide-react';

const features = [
  {
    icon: Wrench,
    title: 'OEM Used Parts',
    description: 'Genuine OEM-tested parts with complete quality assurance'
  },
  {
    icon: Shield,
    title: '90-Day Warranty',
    description: 'Comprehensive warranty coverage for peace of mind'
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast shipping across the US with tracking'
  },
  {
    icon: Support,
    title: 'Expert Support',
    description: 'Knowledgeable team ready to assist you'
  }
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by thousands of customers for quality parts and exceptional service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:border-white/30 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <feature.icon className="text-white" size={28} />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}