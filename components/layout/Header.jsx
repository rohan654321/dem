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
    // { name: 'About Us', href: '/about' },
    // { name: 'Contact Us', href: '/contact' }
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
        backgroundColor: 'var(--background)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
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
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--foreground)' }}
              >
                <span
                  className="font-bold text-lg"
                  style={{ color: 'var(--background)' }}
                >
                  AP
                </span>
              </div>
              <span
                className="font-heading font-bold text-xl"
                style={{ color: 'var(--foreground)' }}
              >
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
                  className="transition-colors relative group cursor-pointer text-[var(--foreground)]"
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
  // className="hover:bg-[var(--foreground)] hover:text-black transition-colors border-[var(--foreground)]"
  style={{ color: 'black' }}
>
  Get a Quote
</Button>
            </Link>
            <a href="tel:5551234567">
              <Button
                className="flex items-center space-x-2"
                style={{ color: 'var(--foreground)', borderColor: 'var(--foreground)' }}
              >
                <Phone size={16} style={{ color: 'var(--foreground)' }} />
                <span>Call Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--foreground)' }}
          >
            <Menu size={24} style={{ color: 'var(--foreground)' }} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
