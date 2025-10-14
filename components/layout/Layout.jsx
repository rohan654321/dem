// components/Layout/Layout.jsx
'use client';
import { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import MobileMenu from './MobileMenu';

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      /> */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="flex-grow pt-16"> {/* Added pt-16 to account for fixed header */}
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}