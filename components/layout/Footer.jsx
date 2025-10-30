'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Phone, Mail, MapPin, Clock,
  Facebook, Instagram, Twitter, Linkedin,
  Shield, Truck, CreditCard,
  HeadphonesIcon as Support
} from 'lucide-react';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaPaypal
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company Info',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Story', href: '/our-story' },
      ],
    },
    {
      title: 'Auto Parts',
      links: [
        { name: 'Used Engines', href: '/engines' },
        { name: 'Transmissions', href: '/transmissions' },
      ],
    },
    {
      title: 'Customer Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        // { name: 'Shipping Info', href: '/shipping' },
        // { name: 'Returns & Warranty', href: '/returns' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Condition', href: '/terms' },
        { name: 'Return Policy', href: '/return-policy' },
        // { name: 'Warranty Policy', href: '/warranty' },
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

  const paymentIcons = [
    { icon: FaCcVisa, name: 'Visa', color: '#1A1F71' },
    { icon: FaCcMastercard, name: 'MasterCard', color: '#EB001B' },
    { icon: FaCcAmex, name: 'Amex', color: '#007BC1' },
    { icon: FaCcDiscover, name: 'Discover', color: '#FF6000' },
    { icon: FaPaypal, name: 'PayPal', color: '#003087' },
  ];

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
      {/* White Top Section */}
      <div className="relative z-10 bg-white text-primary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        >
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-6">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="xl:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo/logo.jpeg"
                  alt="AutoParts Zone Logo"
                  width={55}
                  height={55}
                  className="object-contain rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-primary">U S AutoParts Zone</h3>
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

            {/* Footer Links (auto-wrap on small screens) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:col-span-1 xl:col-span-4">
              {footerSections.map((section) => (
                <motion.div key={section.title} variants={itemVariants}>
                  <h4 className="font-semibold text-lg mb-4 text-primary">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-accent transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Black Bottom Section */}
      <motion.div className="bg-primary text-gray-300 border-t border-gray-700 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            {/* Copyright */}
            <p className="text-sm">© {currentYear} AutoParts Zone. All rights reserved.</p>

            {/* Warranty + Delivery */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="text-accent" size={16} />
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="text-accent" size={16} />
                <span>3–4 Days Delivery</span>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center justify-center space-x-2">
              <p>We Accept: </p>
              {paymentIcons.map((p) => (
                <p.icon
                  key={p.name}
                  size={28}
                  color={p.color}
                  // className="bg-white/10 p-1 rounded"
                  title={p.name}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
