// components/Layout/MobileMenuEnhanced.jsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  ChevronRight,
  Car,
  Cog,
  User,
  FileText,
  HelpCircle,
  Search,
  Shield,
  Truck,
  Clock
} from 'lucide-react';

const MobileMenuEnhanced = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      icon: User,
      label: 'Home',
      href: '/',
      type: 'link'
    },
    {
       
    icon: Car,
    label: 'Auto Parts',
    href: '/auto-parts',
    type: 'link',
      subItems: [
        { label: 'Used Engines', href: '/engines' },
        { label: 'Transmissions', href: '/transmissions' },
        { label: 'Parts by Make', href: '/parts-by-make' },
        { label: 'Parts by Model', href: '/parts-by-model' },
        { label: 'Search Inventory', href: '/search' },
      ]
    },
    {
    icon: Cog,
    label: 'Engines',
    href: '/engines',
    type: 'link'
  },
  {
    icon: Cog,
    label: 'Transmissions',
    href: '/transmissions',
    type: 'link'
  },
  {
    icon: FileText,
    label: 'About Us',
    href: '/about',
    type: 'link'
  },
  {
    icon: HelpCircle,
    label: 'Contact Us',
    href: '/contact',
    type: 'link'
  }
  ];

  const quickActions = [
    {
      icon: Phone,
      label: 'Call Support',
      description: '(555) 123-4567',
      href: 'tel:5551234567',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      label: 'Email Us',
      description: 'Quick response',
      href: 'mailto:support@autopartszone.com',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      label: 'Warranty Info',
      description: '90-day coverage',
      href: '/warranty',
      color: 'bg-accent'
    },
    {
      icon: Truck,
      label: 'Shipping',
      description: '3-4 day delivery',
      href: '/shipping',
      color: 'bg-purple-500'
    }
  ];

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const handleLinkClick = () => {
    onClose();
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onClose();
    // Handle search logic here
    console.log('Search:', searchQuery);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AP</span>
                </div>
                <span className="text-lg font-heading font-bold">AutoParts Zone</span>
              </div>
              
              <motion.button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search parts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </form>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Quick Actions */}
              <div className="p-4 border-b border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <motion.a
                      key={action.label}
                      href={action.href}
                      onClick={handleLinkClick}
                      className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                        <action.icon className="text-white" size={18} />
                      </div>
                      <span className="text-xs font-medium text-gray-800">{action.label}</span>
                      <span className="text-xs text-gray-500 mt-1">{action.description}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Main Navigation */}
              <nav className="p-4">
                <ul className="space-y-1">
                  {menuItems.map((item, index) => (
                    <li key={item.label}>
                      {item.type === 'dropdown' ? (
                        <div className="rounded-lg hover:bg-gray-50 transition-colors">
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="flex items-center justify-between w-full p-3 text-left"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <item.icon className="text-primary" size={16} />
                              </div>
                              <span className="font-medium text-gray-800">{item.label}</span>
                            </div>
                            <motion.div
                              animate={{ rotate: activeDropdown === index ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="text-gray-400" size={16} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <ul className="pl-11 pr-2 pb-2 space-y-1">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <motion.li
                                      key={subItem.label}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: subIndex * 0.1 }}
                                    >
                                      <a
                                        href={subItem.href}
                                        onClick={handleLinkClick}
                                        className="block py-2 px-3 text-gray-600 hover:text-accent hover:bg-gray-100 rounded transition-colors text-sm"
                                      >
                                        {subItem.label}
                                      </a>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.a
                          href={item.href}
                          onClick={handleLinkClick}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                              <item.icon className="text-primary group-hover:text-white" size={16} />
                            </div>
                            <span className="font-medium text-gray-800 group-hover:text-accent">
                              {item.label}
                            </span>
                          </div>
                          {item.badge && (
                            <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </motion.a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Emergency CTA */}
              <div className="p-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-accent to-red-600 text-white p-4 rounded-2xl text-center"
                >
                  <Clock className="inline-block mb-2" size={20} />
                  <h3 className="font-semibold mb-1">Emergency Part Needed?</h3>
                  <p className="text-white/80 text-sm mb-3">We offer expedited shipping</p>
                  <motion.a
                    href="tel:5551234567"
                    onClick={handleLinkClick}
                    className="inline-block bg-white text-accent font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Call Now
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="text-center text-gray-500 text-xs">
                <p>© {new Date().getFullYear()} AutoParts Zone</p>
                <div className="flex justify-center space-x-3 mt-2">
                  <span>90-Day Warranty</span>
                  <span>•</span>
                  <span>Nationwide Delivery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuEnhanced;