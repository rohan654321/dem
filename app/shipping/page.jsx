// app/shipping/page.js
'use client';
import { motion } from 'framer-motion';
import { Truck, Clock, Package, MapPin, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

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
              Shipping & Delivery
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Fast, reliable nationwide delivery for all your auto part needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Timeframes & Policies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Shipping Timeframes & Policies
            </h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Shipping & Delivery Information
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The shipping or delivery timeframes provided on our website (Parts Recycled) are estimates only. 
                    In any event, we are committed to keeping you informed as updates become available, and to delivering 
                    the parts you need as quickly as possible.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    Business Days Definition
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Whenever we mention "Business Days" for ship-out or delivery timeframe, we intend to refer it to 
                    Monday through Friday. Do not consider Saturday, Sunday or any Federal holidays (fall on weekdays).
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="text-yellow-600 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-yellow-800 font-medium mb-2">Important Notice:</p>
                        <p className="text-yellow-700 text-sm">
                          We do not process or deliver packages on Saturdays, Sundays or any holidays. 
                          We do not cover shipping amounts or labor Charges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    Delivery Timeframe
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Most of our orders are processed for shipment or delivery (leave our warehouse) within 24-48 hours 
                    after the customer confirms the order (the Image of the part sent by us) unless otherwise specified. 
                    Delivery or transit times can vary depending upon the size of the package and the delivery location.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-blue-800 font-medium">Estimated Delivery:</p>
                        <p className="text-blue-700">
                          Generally, packages are delivered within eight (8) to nine (9) business days 
                          (excluding weekends and holidays) from the date package(s) leave our warehouse.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    Damaged Shipments
                  </h4>
                  <p className="text-gray-700 mb-4">
                    We recommend that as soon as you receive your order, kindly go over or inspect all the shipping 
                    part(s) or package(s) and items thoroughly for any signs of damage, missing, or incorrect parts. 
                    Our warehouses endeavor all the efforts they can to prevent the damage during shipping, but it does occur at the juncture.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-red-800 font-medium mb-2">Immediate Action Required:</p>
                        <ul className="text-red-700 text-sm space-y-1">
                          <li>• If you happen to receive a damaged part or incorrect part, please do call us immediately to prevent you from being charged freight both ways.</li>
                          <li>• Do not send/return the part(s) or package(s) before receiving an RMA (Return Merchandise Authorizations).</li>
                          <li>• All the warranty provided by us (Parts Central) for any damaged, incorrect parts will be void after 7 business days, regardless of which party is at fault.</li>
                          <li>• We are not answerable for lost or stolen packages, and all claims for such incidents must be reported and processed through the shipping company.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    Risk of Loss
                  </h4>
                  <p className="text-gray-700 mb-4">
                    All the items purchased from our website are made in consonance with our shipping or delivery terms, 
                    which are FOB shipping points. This indicates that the risk of loss, title and responsibility of any 
                    goods is passed from the seller to the buyer at the shipping point, which is when the carrier accepts 
                    the goods for transport.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-green-800 font-medium mb-2">Important Deadlines:</p>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Even though we are not directly responsible for any lost or stolen packages, we will be happy to assist you with a further claim with the shipping company.</li>
                          <li>• You must contact us immediately if the entire shipment was not received within two (2) full days of the carrier's estimated delivery date.</li>
                          <li>• All requests must be made within seven (7) days of the shipment date for any possibility of a claim.</li>
                          <li>• Do not send/return the part(s) or package(s) before receiving an RMA (Return Merchandise Authorizations).</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Shipping Options
            </h2>
            <p className="text-gray-300 text-lg">
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
                className="bg-white rounded-2xl p-8 text-center border border-gray-200"
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
      <section className="py-20 bg-white">
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
              className="bg-secondary rounded-2xl p-8 border border-gray-200"
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

      {/* Quick Reference Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Need Immediate Assistance?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Damaged Shipment',
                  description: 'Contact us immediately within 7 days',
                  action: 'Call: (555) 123-4567'
                },
                {
                  title: 'Missing Package',
                  description: 'Report within 2 days of estimated delivery',
                  action: 'Email: support@partsrecycled.com'
                },
                {
                  title: 'Shipping Questions',
                  description: 'Get help with delivery options',
                  action: 'Live Chat Available'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <p className="text-accent font-semibold">{item.action}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}