// components/Layout/MobileMenu.jsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
  import { useEffect } from 'react';

const MobileMenu = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Auto Parts', href: '/auto-parts' },
    { name: 'Engines', href: '/engines' },
    { name: 'Transmissions', href: '/transmissions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

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


useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = '';
  };
}, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-[999] md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-heading font-bold text-primary">AutoParts Zone</span>
              <motion.button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-primary" />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <motion.div
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                          pathname === item.href
                            ? 'bg-primary text-white'
                            : 'text-primary hover:bg-gray-100'
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronRight size={16} />
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Call Button */}
            <div className="p-4 border-t border-gray-200">
              <a href="tel:5551234567">
                <motion.button
                  onClick={handleLinkClick}
                  className="w-full bg-accent text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;