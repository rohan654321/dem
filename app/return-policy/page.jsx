// app/return-policy/page.js
'use client';
import { motion } from 'framer-motion';
import { RefreshCw, Package, Clock, CheckCircle, XCircle, Phone, Mail, MapPin } from 'lucide-react';

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
              Return & Refund Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Clear guidelines for returns, refunds, and replacements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 30-Day Money Back Guarantee */}
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
              <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                30-Day Money Back Guarantee
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                You may return any item in its original condition for a full refund within 30 days of receipt of your shipment, less shipping charges.
              </p>
            </motion.div>

            {/* Refund Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-12"
            >
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Refund Processing Time</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <p className="text-green-800 font-semibold">3-5 Business Days</p>
                  <p className="text-green-700 text-sm">To process credit back to your account</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <RefreshCw className="text-green-600" size={24} />
                  </div>
                  <p className="text-green-800 font-semibold">2-3 Business Days</p>
                  <p className="text-green-700 text-sm">For credit to appear on your account</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Return & Cancellation Policy */}
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
              <h2 className="text-3xl font-semibold text-primary mb-8">Return & Cancellation Policy</h2>
              
              <div className="space-y-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-3 flex items-center">
                    <XCircle className="mr-2" size={20} />
                    Important Notice
                  </h3>
                  <p className="text-red-700 mb-4">
                    All returns and cancellations require prior authorization and are subject to a <strong>30% restocking fee</strong>.
                  </p>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-red-600 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-red-700 font-semibold">Return Address:</p>
                      <p className="text-red-700">1105 E George St, Itasca, IL 60143</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">How to Return or Cancel</h3>
                  <p className="text-gray-700 mb-6">
                    You can return or cancel your order by calling our customer service desk at:
                  </p>
                  <div className="bg-primary text-white rounded-xl p-6 text-center">
                    <Phone className="mx-auto mb-3" size={32} />
                    <p className="text-2xl font-bold mb-2">(800) 838-3058</p>
                    <p className="text-gray-300">Press 2 for "Returns"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Replacement Policy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-gray-200"
            >
              <h2 className="text-3xl font-semibold text-primary mb-6">Replacement Policy</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                    <CheckCircle className="mr-2" size={20} />
                    Defective Parts
                  </h3>
                  <p className="text-green-700">
                    Received a defective part? No problem, we will replace it. For more information, visit our replacement policy page.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Replacement Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0">1</div>
                      <p className="text-blue-700">We must receive the original auto part back before sending you a replacement</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0">2</div>
                      <p className="text-blue-700">The original auto part must be returned using the provided shipping label</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0">3</div>
                      <p className="text-blue-700">Shipping cost for both original and replacement parts is attributed to the shipper</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">Important Deadline</h3>
                  <p className="text-yellow-700">
                    If the original auto parts are not shipped back to the supplier within <strong>30 days</strong> of the delivery date of the replacement part, the buyer's credit card is subject to a recharge for the initial cost of the original auto part (minus the initial shipping cost).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
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
              <h2 className="text-3xl font-semibold text-primary mb-6">Terms & Conditions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Return Authorization Required</h3>
                  <p className="text-gray-700">
                    No returns without prior authorization from the Supplier. You need to contact a customer service representative to arrange for a Return Merchandise Authorization (RMA) form.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Shipping Charges</h3>
                  <p className="text-gray-700">
                    All returns and cancellations may be subject to shipping charges, unless caused by our error or cancelled by the customer prior to shipping.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Return Procedure</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="text-primary flex-shrink-0" size={18} />
                        <span className="text-gray-700">Call <strong>(800) 838-3058</strong></span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-6 text-center text-gray-500">→</span>
                        <span className="text-gray-700">Press 2 for "Returns"</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-6 text-center text-gray-500">→</span>
                        <span className="text-gray-700">Reference your 5-digit Order Number</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="text-primary flex-shrink-0" size={18} />
                        <span className="text-gray-700">Monday-Friday 8 am – 6 pm EST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-semibold text-yellow-800 mb-6">Important Disclaimer</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">Wear Parts & Accessories</h3>
                  <p className="text-yellow-700 mb-4">
                    Some of our units (used engine, transmission, axle, etc.) may come with wear parts and accessories but are not guaranteed in the sale. They will need to be replaced before installation.
                  </p>
                  <div className="bg-yellow-100 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm">
                      Common items that are not guaranteed include but not limited to: nuts, bolts, links, seals, bushings, ball joints, brackets, bezels, wiring, cables, sensors and other applicable items depending on the part.
                    </p>
                  </div>
                  <p className="text-yellow-700 mt-4">
                    If they are not serviceable, such as a pressed-in ball joint, they will be guaranteed.
                  </p>
                </div>

                <div className="border-t border-yellow-300 pt-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">Color Matching</h3>
                  <p className="text-yellow-700">
                    We cannot guarantee color on any part we sell. The purchased item may need to be repainted, refinished, or reupholstered for proper color match.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Service Contact */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <h2 className="text-3xl font-semibold text-primary mb-8">Customer Service</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="mx-auto mb-3 text-accent" size={32} />
                  <p className="text-2xl font-bold text-primary mb-2">(800) 838-3058</p>
                  <p className="text-gray-600">Press 2 for Returns</p>
                </div>
                
                <div className="text-center">
                  <Mail className="mx-auto mb-3 text-accent" size={32} />
                  <p className="text-xl font-semibold text-primary mb-2">Email</p>
                  <p className="text-gray-600">partsrecycledllc@gmail.com</p>
                </div>
                
                <div className="text-center">
                  <Clock className="mx-auto mb-3 text-accent" size={32} />
                  <p className="text-xl font-semibold text-primary mb-2">Operation Hours</p>
                  <p className="text-gray-600">Mon – Friday</p>
                  <p className="text-gray-600">8:00 am – 6:00 pm EST</p>
                </div>
              </div>

              <div className="bg-accent rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Need Help with Returns?</h3>
                <p className="mb-4">Our customer service team is here to assist you with any return or replacement questions.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:8008383058" 
                    className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call Now
                  </a>
                  <a 
                    href="mailto:partsrecycledllc@gmail.com" 
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}