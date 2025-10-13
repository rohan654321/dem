// components/Sections/Process.jsx
'use client';
import { motion } from 'framer-motion';
import { ClipboardList, Quote, CheckCircle, Truck } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Submit Vehicle Info',
    description: 'Provide your vehicle details and part requirements'
  },
  {
    icon: Quote,
    title: 'Get Quote & Photos',
    description: 'Receive competitive pricing and detailed part photos'
  },
  {
    icon: CheckCircle,
    title: 'Confirm Order',
    description: 'Review and confirm your order with warranty details'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your part delivered nationwide in 3-4 days'
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Simple 4-step process to get the right part delivered to your doorstep
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-red rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg"
                >
                  <step.icon className="text-white" size={24} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}