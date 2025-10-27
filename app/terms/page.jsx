// app/terms/page.js
'use client';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, Phone, Mail, Shield, Link, Scale } from 'lucide-react';

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
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Please read these Terms of Use carefully before using our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the partscentral.us website (the "Service") operated by Parts Recycled LLP ("us", "we", or "our").
                </p>
                <p className="text-gray-700 mb-4">
                  Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                </p>
                <p className="text-gray-700">
                  By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={28} />
                  Intellectual Property
                </h2>
                <p className="text-gray-700">
                  The Service and its original content, features and functionality are and will remain the exclusive property of partscentral.us and its licensors.
                </p>
              </div>

              {/* Links to Other Websites */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                  <Link className="mr-3" size={28} />
                  Links To Other Web Sites
                </h2>
                <p className="text-gray-700 mb-4">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by Parts Central. Parts Central has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                </p>
                <p className="text-gray-700 mb-4">
                  You further acknowledge and agree that partscentral.us shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
                <p className="text-gray-700 font-semibold">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-700">
                  All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mb-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-yellow-800 mb-6">Disclaimer</h2>
                <p className="text-yellow-700 mb-4">
                  Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                  <Scale className="mr-3" size={28} />
                  Governing Law
                </h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed and construed in accordance with the laws of United States without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700 mb-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.
                </p>
              </div>

              {/* SMS Terms and Conditions */}
              <div className="mb-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">SMS Terms and Conditions</h2>
                
                <div className="space-y-6">
                  <p className="text-blue-700">
                    By opting in to SMS communications from Parts Central, you consent to receive text messages regarding order updates, customer support, and promotions. We do not share your phone number with third parties for advertising purposes.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Message Types</h3>
                    <p className="text-blue-700 mb-4">Messages may include, but are not limited to:</p>
                    <ul className="list-disc list-inside text-blue-700 space-y-2">
                      <li>Order confirmations</li>
                      <li>Shipping and delivery updates</li>
                      <li>Appointment reminders</li>
                      <li>Billing alerts, including outstanding invoices</li>
                      <li>Payment confirmations</li>
                      <li>Promotional offers</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">1. Message Frequency</h3>
                      <p className="text-blue-700">
                        The frequency of messages varies but typically does not exceed two messages per week, depending on account activity, preferences, or status.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">2. Message & Data Rates</h3>
                      <p className="text-blue-700">
                        Standard message and data rates may apply based on your carrier's pricing plan. Parts Central is not responsible for any associated charges.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">3. Opt-In Methods</h3>
                      <p className="text-blue-700">
                        You can opt-in by providing verbal consent during customer service calls, submitting online forms, or filling out paper forms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">4. Opt-Out Method</h3>
                      <p className="text-blue-700">
                        Reply "STOP" to any message or contact us at partsrecycledllc@gmail.com to be removed from messaging.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">5. Help & Support</h3>
                    <p className="text-blue-700">
                      For assistance, reply "HELP" to 1-(800) 838-3058 or visit Parts Recycled Website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">6. SMS Usage Examples</h3>
                    <div className="bg-white rounded-xl p-4 border border-blue-300">
                      <p className="text-blue-700 italic mb-2">"Hi, this is Zack from Parts Recycled. We have the part you're looking for in stock: 2017 DODGE CHALLENGER 2WD MT."</p>
                      <p className="text-blue-700 italic mb-2">"Your order #12345 has shipped! Track your delivery here: [tracking link]."</p>
                      <p className="text-blue-700 italic mb-2">"Reminder: Your invoice #67890 is due. Please make a payment at [payment link]."</p>
                      <p className="text-blue-700 italic">"Exclusive offer! Get 10% off your next order. Use code SAVE10 at checkout."</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">7. Privacy and Data Protection</h3>
                    <p className="text-blue-700">
                      Your phone number will not be shared with third parties for marketing purposes. For more information, refer to our Privacy Policy and Terms & Conditions on our website.
                    </p>
                    <p className="text-blue-700 font-semibold mt-2">
                      By opting in, you consent to these SMS Terms & Conditions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Changes</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="text-gray-700">
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </p>
              </div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-primary rounded-2xl p-8 text-white"
              >
                <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
                <p className="text-gray-300 text-center mb-8">
                  If you have any questions about these Terms, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <Phone className="mx-auto mb-3 text-accent" size={32} />
                    <p className="text-2xl font-bold mb-2">(800) 838-3058</p>
                    <p className="text-gray-300">Customer Service</p>
                  </div>
                  
                  <div className="text-center">
                    <Mail className="mx-auto mb-3 text-accent" size={32} />
                    <p className="text-xl font-semibold mb-2">Email</p>
                    <p className="text-gray-300">partsrecycledllc@gmail.com</p>
                  </div>
                </div>

                <div className="text-center mt-8 pt-6 border-t border-gray-600">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                  >
                    Contact Support
                  </button>
                </div>
              </motion.div>

              {/* Footer */}
              <div className="text-center mt-12 text-gray-500">
                <p>© 2025 Used Car Parts Recycled LLC. All rights reserved.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}