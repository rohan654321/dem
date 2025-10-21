"use client"
import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import CallButton from '@/components/UI/callButtonFloating';
import { usePathname } from 'next/navigation';

const noFooterPaths = ["/login", "/register", "/dashboard"];

export default function ClientLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const hideFooter = noFooterPaths.some((path) => pathname.startsWith(path));

  return (
    <>
      <Header onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
     <MobileMenu 
  isOpen={isMobileMenuOpen}
  onClose={() => setIsMobileMenuOpen(false)}
/>

      <main>
        {children}
      </main>
      {!hideFooter && <Footer />}
      <CallButton />
    </>
  );
}