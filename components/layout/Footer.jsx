// components/Layout/Footer.jsx
'use client';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Shield,
  Truck,
  CreditCard,
  HeadphonesIcon as Support
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company Info',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Story', href: '/our-story' },
        { name: 'Quality Standards', href: '/quality' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press Kit', href: '/press' },
      ]
    },
    {
      title: 'Auto Parts',
      links: [
        { name: 'Used Engines', href: '/engines' },
        { name: 'Transmissions', href: '/transmissions' },
        { name: 'Parts by Make', href: '/parts-by-make' },
        { name: 'Parts by Model', href: '/parts-by-model' },
        { name: 'Search Inventory', href: '/search' },
      ]
    },
    {
      title: 'Customer Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns & Warranty', href: '/returns' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Installation Guides', href: '/guides' },
      ]
    },
    {
      title: 'Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Return Policy', href: '/return-policy' },
        { name: 'Warranty Policy', href: '/warranty' },
        { name: 'Shipping Policy', href: '/shipping-policy' },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '(555) 123-4567',
      subtext: 'Mon-Fri 8AM-6PM PST',
      href: 'tel:5551234567'
    },
    {
      icon: Mail,
      text: 'support@autopartszone.com',
      subtext: '24/7 Email Support',
      href: 'mailto:support@autopartszone.com'
    },
    {
      icon: MapPin,
      text: '123 Auto Parts Dr',
      subtext: 'Los Angeles, CA 90001',
      href: '#'
    },
    {
      icon: Clock,
      text: 'Business Hours',
      subtext: 'Mon-Sat: 8AM-6PM PST',
      href: '#'
    }
  ];

  const trustBadges = [
    { icon: Shield, text: '90-Day Warranty' },
    { icon: Truck, text: 'Nationwide Delivery' },
    { icon: CreditCard, text: 'Secure Payment' },
    { icon: Support, text: 'Expert Support' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  const paymentMethods = [
    'Visa', 'MasterCard', 'American Express', 'Discover', 'PayPal'
  ];

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
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid lg:grid-cols-2 xl:grid-cols-6 gap-8 mb-12">
          {/* Company Info & Logo */}
          <motion.div 
            variants={itemVariants}
            className="xl:col-span-2"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold">AutoParts Zone</h3>
                <p className="text-gray-300 text-sm">Quality Used Auto Parts</p>
              </div>
            </motion.div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting car owners with high-quality used engines and transmissions 
              since 2010. We ensure OEM-tested parts with nationwide shipping and 
              comprehensive warranties.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-sm"
                >
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <badge.icon className="text-accent" size={16} />
                  </div>
                  <span className="text-gray-300">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="xl:col-span-1"
            >
              <h4 className="font-semibold text-lg mb-6 text-white relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.text}
              href={contact.href}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <contact.icon className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-accent transition-colors">
                    {contact.text}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {contact.subtext}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-accent to-red-800 rounded-2xl p-8 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-red-100">
                Get the latest deals, new arrivals, and automotive tips delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-primary/95 border-t border-white/10"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} AutoParts Zone. All rights reserved.
            </div>

            {/* Trust & Delivery Badges */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="text-accent" size={16} />
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="text-accent" size={16} />
                <span>3–4 Days Delivery</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">We accept:</span>
              <div className="flex space-x-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300 border border-white/10"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-start space-x-6 mt-4 pt-4 border-t border-white/5"
          >
            {[
              'Accessibility',
              'Sitemap',
              'Do Not Sell My Info',
              'Cookie Preferences'
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-slate-900 border-t border-white/10 p-4 md:hidden z-50">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <p className="font-semibold">Need Help?</p>
            <p className="text-sm text-gray-300">Call us now</p>
          </div>
          <motion.a
            href="tel:5551234567"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;