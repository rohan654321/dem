'use client';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Truck, 
  RefreshCw, 
  FileText, 
  Lock, 
  ArrowRight,
  CheckCircle,
  Clock,
  Package
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Policies() {
  const policies = [
    {
      icon: Truck,
      title: 'Shipping Policy',
      description: 'Delivery times, packaging, and tracking information',
      sections: [
        { title: 'Processing Time', content: 'Orders are processed and shipped within 2-3 business days of confirmation.' },
        { title: 'Delivery Times', content: 'Standard 3-5 days, Expedited 1-2 days (additional fees apply)' }
      ]
    },
    {
      icon: RefreshCw,
      title: 'Refund & Return Policy',
      description: 'Warranty claims and return conditions',
      sections: [
        { title: '90-Day Warranty', content: 'All parts come with a 90-day limited warranty.' },
        { title: 'Return Period', content: 'Returns accepted within 30 days of delivery.' }
      ]
    },
    {
      icon: Shield,
      title: 'Warranty Policy',
      description: 'Comprehensive coverage details and terms',
      sections: [
        { title: 'Coverage Period', content: '90-day limited warranty from delivery date.' },
        { title: 'What’s Covered', content: 'Manufacturing defects, functional failures.' }
      ]
    },
    {
      icon: FileText,
      title: 'Terms & Conditions',
      description: 'Website usage and agreement terms',
      sections: [
        { title: 'Acceptance of Terms', content: 'By using our website, you agree to our terms.' },
        { title: 'Product Information', content: 'Prices and availability are subject to change.' }
      ]
    },
    {
      icon: Lock,
      title: 'Privacy Policy',
      description: 'Data collection and usage practices',
      sections: [
        { title: 'Information Collection', content: 'We collect basic customer data for service improvement.' },
        { title: 'Data Protection', content: 'SSL encryption and secure servers in place.' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-black text-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Policies & Terms
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transparent policies designed to protect your interests and ensure a seamless experience with our products.
          </p>
        </motion.div>

        {/* Policy Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          {policies.map((policy) => (
            <motion.div
              key={policy.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg hover:shadow-red-500/20 transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-8">
                {/* Icon and Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <policy.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                      {policy.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {policy.description}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {policy.sections.slice(0, 2).map((section, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {section.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
                  <span className="text-red-500 font-semibold text-sm">
                    View Details
                  </span>
                  <ArrowRight className="text-red-500 transform group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: '90-Day Warranty', icon: Shield },
              { label: 'Secure Payment', icon: Lock },
              { label: 'Fast Shipping', icon: Truck },
              { label: 'Expert Support', icon: FileText }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-white" size={24} />
                </div>
                <span className="text-sm font-medium text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
