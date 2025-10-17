// components/Layout/Header.jsx
'use client';
import { motion } from 'framer-motion';
import { Menu, Phone } from 'lucide-react';
import Button from '../UI/Button';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ onMobileMenuToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Auto Parts', href: '/auto-parts' },
    { name: 'Engines', href: '/engines' },
    { name: 'Transmissions', href: '/transmissions' },
  ];

  const isActiveLink = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 12px rgba(14, 42, 71, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg text-white">
                  AP
                </span>
              </div>
              <span className="font-heading font-bold text-xl text-primary">
                AutoParts Zone
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="transition-colors relative group cursor-pointer text-primary hover:text-accent"
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all"
                    style={{ width: isActiveLink(item.href) ? '100%' : '0' }}
                  />
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Get a Quote
              </Button>
            </Link>
            <a href="tel:5551234567">
              <Button
                className="flex items-center space-x-2 bg-accent text-white hover:bg-red-600"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 rounded-lg transition-colors text-primary hover:bg-primary hover:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}