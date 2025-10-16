// components/Layout/Footer.jsx
'use client';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock,
  Facebook, Instagram, Twitter, Linkedin,
  Shield, Truck, CreditCard,
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
        // { name: 'Quality Standards', href: '/quality' },
        // { name: 'Careers', href: '/careers' },
        // { name: 'Press Kit', href: '/press' },
      ],
    },
    {
      title: 'Auto Parts',
      links: [
        { name: 'Used Engines', href: '/engines' },
        { name: 'Transmissions', href: '/transmissions' },
        // { name: 'Parts by Make', href: '/parts-by-make' },
        // { name: 'Parts by Model', href: '/parts-by-model' },
        // { name: 'Search Inventory', href: '/search' },
      ],
    },
    {
      title: 'Customer Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns & Warranty', href: '/returns' },
        { name: 'FAQ', href: '/faq' },
        // { name: 'Installation Guides', href: '/guides' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Return Policy', href: '/return-policy' },
        { name: 'Warranty Policy', href: '/warranty' },
        { name: 'Shipping Policy', href: '/shipping-policy' },
      ],
    },
  ];

  const trustBadges = [
    { icon: Shield, text: '90-Day Warranty' },
    { icon: Truck, text: 'Nationwide Delivery' },
    { icon: CreditCard, text: 'Secure Payment' },
    { icon: Support, text: 'Expert Support' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const paymentMethods = ['Visa', 'MasterCard', 'Amex', 'Discover', 'PayPal'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative w-full">
      {/* White Top Half */}
      <div className="relative z-10 bg-white text-primary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 md:px-8 py-16"
        >
          <div className="grid lg:grid-cols-2 xl:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="xl:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  AP
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    AutoParts Zone
                  </h3>
                  <p className="text-gray-600 text-sm">Quality Used Auto Parts</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Connecting car owners with high-quality used engines and transmissions since 2010.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {trustBadges.map((badge) => (
                  <motion.div
                    key={badge.text}
                    variants={itemVariants}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <badge.icon className="text-primary" size={16} />
                    </div>
                    <span className="text-gray-700">{badge.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 bg-secondary hover:bg-accent hover:text-white rounded-lg flex items-center justify-center transition-all text-primary"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="font-semibold text-lg mb-6 text-primary">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-accent transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Black Bottom Half */}
      <motion.div className="bg-primary text-gray-300 border-t border-gray-700 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-300">
              © {currentYear} AutoParts Zone. All rights reserved.
            </p>

            {/* Warranty + Delivery */}
            <div className="flex items-center space-x-6 text-sm">
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
            <div className="flex items-center space-x-2">
              <span className="text-sm mr-2 text-gray-300">We accept:</span>
              {paymentMethods.map((m) => (
                <div
                  key={m}
                  className="bg-white/10 text-gray-200 px-3 py-1 rounded text-xs border border-gray-600"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;