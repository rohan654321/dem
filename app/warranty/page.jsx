// app/warranty/page.js
'use client';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

export default function WarrantyPage() {
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
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Warranty Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              90-day comprehensive warranty protection on all parts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warranty Overview */}
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                90-Day Limited Warranty
              </h2>
              <p className="text-gray-600 text-lg">
                Protection from delivery date for your peace of mind
              </p>
            </motion.div>

            {/* Coverage Details */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  What's Covered
                </h3>
                <div className="space-y-4">
                  {[
                    'Manufacturing defects in materials or workmanship',
                    'Functional failures under normal operating conditions',
                    'Core internal mechanical components',
                    'Seals, gaskets, and internal bearings',
                    'Electrical components and wiring'
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
                  What's Not Covered
                </h3>
                <div className="space-y-4">
                  {[
                    'Normal wear and tear through use',
                    'Damage from improper installation',
                    'Accident, abuse, or neglect',
                    'Modifications or alterations',
                    'Racing, competition, or commercial use'
                  ].map((item, index) => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Warranty Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
                Warranty Claim Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: 'Contact Support',
                    description: 'Reach out to our warranty team with your order details and issue description'
                  },
                  {
                    step: 'Provide Documentation',
                    description: 'Submit photos, installation details, and any diagnostic reports'
                  },
                  {
                    step: 'Claim Evaluation',
                    description: 'Our technicians review the claim and determine coverage eligibility'
                  },
                  {
                    step: 'Resolution',
                    description: 'We arrange for part replacement, repair, or refund as appropriate'
                  },
                  {
                    step: 'Follow-up',
                    description: 'We ensure the resolution meets your satisfaction'
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

      {/* Important Notes */}
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
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="text-orange-500" size={24} />
                <h2 className="text-2xl font-semibold text-primary">Important Warranty Notes</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  'Warranty period begins from the date of delivery, not installation',
                  'Professional installation is recommended but not required for warranty coverage',
                  'Keep original packaging and documentation for warranty claims',
                  'Warranty is non-transferable and applies only to the original purchaser',
                  'Some components may have different warranty terms - check product documentation',
                  'Warranty claims must be submitted before the warranty period expires',
                  'We reserve the right to inspect parts and request additional information'
                ].map((note, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{note}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-500" size={20} />
                  <div>
                    <h4 className="font-semibold text-blue-800">Warranty Duration</h4>
                    <p className="text-blue-700 text-sm">
                      All parts come with a 90-day limited warranty from the delivery date.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}