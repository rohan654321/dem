// components/UI/CallButtonFloating.jsx
'use client';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop after delay, don't show on mobile
    const timer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCallClick = () => {
    window.open('tel:5551234567', '_self');
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCallClick}
      className="hidden md:fixed md:flex bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
      aria-label="Call Now"
    >
      <Phone size={24} />
    </motion.button>
  );
}