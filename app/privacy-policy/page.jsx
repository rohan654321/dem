// app/privacy-policy/page.js
'use client';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, User, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How we protect and use your personal information at Used Parts Recycled LLC.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: March 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Quick Overview Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {[
                {
                  icon: User,
                  title: 'Information We Collect',
                  items: ['Contact details', 'Vehicle information', 'Purchase history', 'Payment information']
                },
                {
                  icon: Lock,
                  title: 'Data Protection',
                  items: ['SSL encryption', 'Secure servers', 'Regular audits', 'Access controls']
                },
                {
                  icon: Eye,
                  title: 'Your Rights',
                  items: ['Access your data', 'Correct information', 'Delete account', 'Opt-out options']
                },
                {
                  icon: Shield,
                  title: 'Data Usage',
                  items: ['Order processing', 'Customer support', 'Service improvement', 'Legal compliance']
                }
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <section.icon className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Full Privacy Policy Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                <p className="text-gray-700 mb-4">
                  This site is managed by a third-party service provider of Used Parts Recycled LLC (the "Online Store" and collectively with Auto Parts "we" or "us"). We are dedicated to protecting our customer's privacy. Your privacy using the Website located at URL https://www.usedpartsrecycled.com/ ("the Site") is paramount in that goal. Other service providers we use on the site include credit card processors and shipping services.
                </p>
                <p className="text-gray-700 mb-4">
                  The motive of this Privacy Policy ("Policy") is to inform you about the types of information we gather about you and your organization, how we many use that information, whether we disclose it to anyone, and the choices you have regarding our use of, and your ability to correct, that information. This Policy might change from time to time, so kindly take a look on it periodically.
                </p>
              </div>

              {/* Key Topics */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Key Topics</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>What information do we collect from you?</li>
                  <li>Where do we collect information from you and how do we use it?</li>
                  <li>With whom do we share your information?</li>
                  <li>How might you delete, update or correct your personally identifiable information?</li>
                  <li>What security precautions are in place to protect against the loss, misuse or alteration of your information?</li>
                  <li>Use of Cookies</li>
                  <li>Children's Privacy</li>
                  <li>General Privacy Policy</li>
                  <li>Contacting Us, About our Privacy Policy</li>
                  <li>Privacy Policy Changes</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You must attentively review privacy policies of any third-party sites accessible from this site.
                </p>
              </div>

              {/* Information Collection */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What information do we collect from you?</h2>
                <p className="text-gray-700 mb-4">
                  To provide you with numerous products and services, the Site collects two types of information about its visitors: Personally Identifiable Information and Non-Personally Identifiable Information. Our primary goal in collecting information from you is to provide you with a smooth, efficient, and customized experience while using the Site. The Online Store collects information on behalf of Parts Central.
                </p>
                
                <h3 className="text-2xl font-semibold text-primary mb-4">Personally Identifiable Information</h3>
                <p className="text-gray-700 mb-4">
                  This refers to information that lets us know the specifics of who you are. Personal information is requested when you order a product or service, enter contests or sweepstakes, fill out surveys, and correspond with us. This information may include contact information such as your name, mailing address, telephone number and e-mail address. With this information, we can fill your service and product orders and better provide you with personalized services.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">Non-Personally Identifiable Information</h3>
                <p className="text-gray-700 mb-4">
                  This refers to information that does not by itself identify a specific individual. We obtain certain information about you based upon where you shop on the Site in various ways. This information is compiled and analyzed on both a personal and an aggregated basis. This information might include the Website's Uniform Resource Locator ("URL") that you just came from, which URL you next go to, what browser you are using, and your Internet Protocol ("IP") address.
                </p>
              </div>

              {/* Data Collection and Usage */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Where do we collect information from you and how do we use it?</h2>
                <p className="text-gray-700 mb-4">
                  Our foremost goal in collecting personal information is to provide our visitors with a superior customized online experience. We use the customer contact information to fill orders, contact prior purchasers to inform them of their order status and to send promotional e-mails.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">Shopping</h3>
                <p className="text-gray-700 mb-4">
                  We collect IP addresses for the purposes of system administration, to gather broad demographic information, and to monitor the level of activity on the Site. We collect information from visitors to the Site regarding the referring URL, your IP address, which browser you used to come to the Site, the country, state, the pages of the Site that you viewed during your visit and any search terms entered on the Site.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">Ordering</h3>
                <p className="text-gray-700 mb-4">
                  When you order from us, we collect personally identifiable information from you. If you order one of our products or services, we will collect and maintain your name, e-mail address, mailing address, telephone number, product selections, credit card number, order number, to communicate with you about your order and to send you promotional materials.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">Online Surveys and Polling</h3>
                <p className="text-gray-700 mb-4">
                  To improve our services to you, we ask some of our customers to voluntarily complete surveys, which may be collected by an independent third party. Individual survey answers are confidential, although Non-Personally Identifiable Information is collected and disclosed to third parties.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">Contests and Sweepstakes</h3>
                <p className="text-gray-700 mb-4">
                  When you enter a contest or other promotion, we might ask you for contact information such as your name, mailing address and e-mail address in order to administer the contest, to send you promotional e-mails, notify winners and make the winners' list publicly available pursuant to certain states' laws.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">Newsletters & Promotional Emails</h3>
                <p className="text-gray-700 mb-4">
                  We may offer free electronic newsletters, product updates, and promotional e-mails as a service to our prior customers. We will not send e-mails to you if you have requested us not to do so unless we need to confirm for our records that you do not want to receive promotional emails.
                </p>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">With whom do we share your information?</h2>
                <p className="text-gray-700 mb-4">
                  The information collected by the Site is used only for the limited purposes of processing orders, keeping you informed about your order status, for statistical purposes for improving the Site and to notify you of products or special offers that may be of interest to you.
                </p>
                <p className="text-gray-700 mb-4">
                  We will disclose your Personally Identifiable Information to third parties to charge your credit card, fill your order, deliver your order, provide customer service to you, and deliver promotional e-mails to you from us. These third parties have access to personal information needed to perform their functions but might not use it for other purposes.
                </p>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to others. We might release account information when we believe that such release is reasonably necessary to enforce or apply our Terms and Conditions or to protect the rights, property and safety of our users, others and ourselves.
                </p>
              </div>

              {/* SMS Policy */}
              <div className="mb-12 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">Privacy Policy & SMS Opt-In Agreement</h2>
                
                <h3 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h3>
                <p className="text-gray-700 mb-4">
                  We collect personal information that you voluntarily provide, including but not limited to: Name, Email address, Mailing address, Phone number, Order details. Your payment details are securely processed by trusted third-party providers; we do not store or retain any card information.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h3>
                <p className="text-gray-700 mb-4">
                  We use the collected information to: Process and fulfill your orders, Provide customer support and respond to inquiries, Send SMS updates regarding appointments, billing alerts, and shipment details, Improve our services through anonymized analytics, Send promotional communications only with your explicit opt-in consent.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">3. Data Sharing Policy</h3>
                <p className="text-gray-700 mb-4">
                  We do not sell, rent, or share your personal information, including mobile opt-in data, with any third party or affiliate company for marketing purposes. We may share your information only with trusted service providers strictly necessary to deliver the messages you have consented to receive.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">4. Your Rights and Control Over Your Data</h3>
                <p className="text-gray-700 mb-4">
                  You have full control over your personal data. You may: Access, update, or request deletion of your personal information, Manage your communication preferences by contacting partsrecycledllc@gmail.com, Unsubscribe from SMS communications by replying STOP, Request help by texting HELP to 1-(800) 838-3058.
                </p>

                <h3 className="text-2xl font-semibold text-primary mb-4">5. SMS Opt-In Agreement</h3>
                <p className="text-gray-700 mb-4">
                  By opting into SMS messaging from Parts Central, you agree to receive automated messages including: Product inquiries, Appointment reminders, Billing alerts, Shipment updates. Message frequency: Up to 2 messages per week (varies by interaction). Standard message and data rates may apply.
                </p>
                <p className="text-gray-700 mb-4 font-semibold">
                  To opt-out, text STOP at any time. For assistance, text HELP or visit our Privacy Policy.
                </p>
              </div>

              {/* Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Security Precautions</h2>
                <p className="text-gray-700 mb-4">
                  We employ the industry-recognized information technology to protect the security of the information you submit to us. The importance of security for all Personally Identifiable Information associated with our customers is of utmost concern to us. Our secure servers protect the information using advanced encryption and firewall technology.
                </p>
                <p className="text-gray-700 mb-4">
                  We use Secure Socket Layer (SSL) technology for mutual authentication, data encryption and data integrity – all to ensure secure transactions for our customers. SSL is the industry standard security protocol to encode sensitive information, such as your credit card number.
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Use of Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Like many other commercial sites, our site may utilize a standard technology called a "cookie" to collect information about how our site is used. A cookie is a small data text file, which a Web site stores on your computer's hard drive (if your Web browser permits) that can later be retrieved to identify you to us.
                </p>
                <p className="text-gray-700 mb-4">
                  Our cookies may collect your domain name and track your selections through the Site. A cookie cannot retrieve any other data from your hard drive, pass on a computer virus, or capture your e-mail address. The cookies make your use of the Site easier, make the Site run more smoothly and help us to maintain a secure Site.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  You must be at least 18 years old to have our permission to use this Site. Our policy is that we do not knowingly collect, use or disclose Personally Identifiable Information about visitors to our Site under 18 years of age. If you are the parent or guardian of a minor under 18 years of age and believe that they have disclosed personally identifiable information to us, please contact us so that we may delete the minor's information.
                </p>
              </div>

              {/* Policy Changes */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Privacy Policy Changes</h2>
                <p className="text-gray-700 mb-4">
                  This Privacy Policy was updated on March, 2025. If we make material changes to any terms or conditions of the Privacy Policy, the changes will be posted on our homepage so that you will always know what information we gather, how we might use that information and to whom we will disclose it. We may change, modify, add or remove portions of this Policy at any time.
                </p>
              </div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 p-8 bg-primary rounded-2xl text-white"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
                  <p className="text-gray-300 mb-6">
                    Contact our privacy team for any questions about how we handle your data.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="flex items-center space-x-2">
                      <Mail size={20} className="text-accent" />
                      <span>partsrecycledllc@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={20} className="text-accent" />
                      <span>1-(800) 838-3058</span>
                    </div>
                  </div>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="mt-6 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                  >
                    Contact Privacy Team
                  </button>
                </div>
              </motion.div>

              <div className="text-center mt-8 text-gray-500">
                <p>© 2025 Used Car Parts Recycled LLC. All rights reserved.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}