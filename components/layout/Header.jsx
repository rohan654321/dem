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
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-lg' 
          : 'bg-primary/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <span className="text-white font-heading font-bold text-xl">
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
                  className={`transition-colors relative group ${
                    isActiveLink(item.href)
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all ${
                      isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Get a Quote
              </Button>
            </Link>
            <a href="tel:5551234567">
              <Button className="flex items-center space-x-2">
                <Phone size={16} />
                <span >Call Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}