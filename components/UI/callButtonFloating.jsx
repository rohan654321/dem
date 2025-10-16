// components/UI/CallButtonMobile.jsx
'use client';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CallButtonMobile() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Show immediately on mobile, after delay on desktop
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 0 : 3000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, [isMobile]);

  const phoneNumber = '5551234567';

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCallClick}
      className={`
        fixed z-50 bg-green-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300
        ${isMobile 
          ? 'bottom-4 right-4 p-4' 
          : 'bottom-6 right-6 p-4'
        }
      `}
      aria-label="Call Now"
    >
      <Phone size={isMobile ? 20 : 24} />
      
      {/* Mobile badge */}
      {isMobile && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
        />
      )}
    </motion.button>
  );
}