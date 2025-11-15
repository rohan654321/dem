// app/auto-parts/page.js
'use client';
import { motion } from 'framer-motion';
import {
  Package,
  Shield,
  Truck,
  CheckCircle,
  ArrowRight,
  Phone,
  Wrench,
  Search,
  Cog,
} from 'lucide-react';
import SearchBar from '../../components/UI/SearchBar';
import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';
import LeadForm from '../../components/UI/LeadForm';
import {
  SiFord, SiHonda, SiToyota, SiChevrolet, SiBmw, SiMercedes,
  SiNissan, SiHyundai, SiKia, SiVolkswagen, SiAudi, SiSubaru,
  SiPorsche, SiLandrover, SiFerrari, SiLamborghini, SiMazda, SiJeep,
  SiVolvo, SiTesla, SiMitsubishi, SiJaguar, SiPeugeot, SiFiat, SiSuzuki
} from 'react-icons/si';

import {
  GiAmericanFootballPlayer, GiAlienStare, GiAngelWings, GiUnionJack,
  GiCarKey, GiDodge, GiInfinity, GiLindenLeaf, GiLion, GiRam,
  GiCarWheel, GiStarsStack
} from 'react-icons/gi';

import { useState, useRef } from 'react';

const brands = [
  { name: 'AMC', icon: GiAmericanFootballPlayer },
  { name: 'Acura', icon: GiCarKey },
  { name: 'Alfa Romeo', icon: GiAlienStare },
  { name: 'Aston Martin', icon: GiAngelWings },
  { name: 'Audi', icon: SiAudi },
  { name: 'Bentley', icon: GiUnionJack },
  { name: 'BMW', icon: SiBmw },
  { name: 'Buick', icon: GiCarKey },
  { name: 'Cadillac', icon: GiStarsStack },
  { name: 'Chevrolet', icon: SiChevrolet },
  { name: 'Chrysler', icon: GiCarKey },
  { name: 'Dodge', icon: GiDodge },
  { name: 'Fiat', icon: SiFiat },
  { name: 'Ford', icon: SiFord },
  { name: 'GMC', icon: GiCarKey },
  { name: 'Honda', icon: SiHonda },
  { name: 'Hyundai', icon: SiHyundai },
  { name: 'Infiniti', icon: GiInfinity },
  { name: 'Jaguar', icon: SiJaguar },
  { name: 'Jeep', icon: SiJeep },
  { name: 'Kia', icon: SiKia },
  { name: 'Land Rover', icon: SiLandrover },
  { name: 'Lexus', icon: GiLindenLeaf },
  { name: 'Lincoln', icon: GiLion },
  { name: 'Mazda', icon: SiMazda },
  { name: 'Mercedes', icon: SiMercedes },
  { name: 'Mini', icon: GiCarWheel },
  { name: 'Mitsubishi', icon: SiMitsubishi },
  { name: 'Nissan', icon: SiNissan },
  { name: 'Peugeot', icon: SiPeugeot },
  { name: 'Porsche', icon: SiPorsche },
  { name: 'RAM', icon: GiRam },
  { name: 'Subaru', icon: SiSubaru },
  { name: 'Suzuki', icon: SiSuzuki },
  { name: 'Tesla', icon: SiTesla },
  { name: 'Toyota', icon: SiToyota },
  { name: 'Volkswagen', icon: SiVolkswagen },
  { name: 'Volvo', icon: SiVolvo },
  { name: 'Ferrari', icon: SiFerrari },
  { name: 'Lamborghini', icon: SiLamborghini },
];

export default function AutoPartsPage() {
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [selectedBrand, setSelectedBrand] = useState('');
  const videoRef = useRef(null);

  const handleSearch = (query) => {
    const filtered = brands.filter((b) =>
      b.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
    setTimeout(() => {
      document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const categories = [
    { name: 'Engines', count: '1,200+', href: '/engines' },
    { name: 'Transmissions', count: '800+', href: '/transmissions' },
    { name: 'Alternators', count: '1,500+', href: '#' },
    { name: 'Starters', count: '1,200+', href: '#' },
    { name: 'Radiators', count: '950+', href: '#' },
    { name: 'AC Compressors', count: '1,400+', href: '#' },
    { name: 'Suspension Parts', count: '2,200+', href: '#' },
    { name: 'Fuel System Parts', count: '1,700+', href: '#' },
  ];

  const features = [
    {
      icon: Shield,
      title: '90-Day Warranty',
      description: 'All auto parts include a hassle-free 90-day replacement warranty.'
    },
    {
      icon: Truck,
      title: 'Nationwide Fast Shipping',
      description: 'We deliver parts to any ZIP code in the USA within 3–4 business days.'
    },
    {
      icon: CheckCircle,
      title: 'OEM Inspected & Tested',
      description: 'Every part is tested for performance and quality before shipping.'
    },
    {
      icon: Package,
      title: 'Massive Inventory',
      description: 'Over 20,000+ used OEM parts available across 300+ makes & models.'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary pt-20">

      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ HERO SECTION (FULL SEO) */}
      {/* ---------------------------------------------------------------------- */}

      <section className="relative min-h-[155vh] sm:min-h-[145vh] md:min-h-[130vh] lg:min-h-[120vh] xl:min-h-[110vh] flex items-start justify-center overflow-hidden pt-32 md:pt-40 lg:pt-48">

        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/videos/Untitled design (3).mp4" type="video/mp4" />
            <source src="/videos/Untitled design (4).mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="container mx-auto px-4 relative z-30">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >

              {/* H1 SEO */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-6"
              >
                Buy Quality OEM Used <span className="text-accent">Auto Parts</span>  
                with Fast Nationwide Delivery
              </motion.h1>

              {/* SEO Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Find premium, OEM-grade used auto parts for every make and model.  
                All components are professionally inspected, tested, and backed with a  
                90-day replacement warranty. From engines to electrical systems, we  
                deliver affordable, reliable parts directly to your home or mechanic.
              </motion.p>

              {/* BENEFITS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col gap-3 mb-10 lg:max-w-lg"
              >
                {[
                  "OEM Certified Parts Only — No aftermarket substitutes",
                  "Fitment Verified using VIN to ensure compatibility",
                  "Low-mileage components sourced from trusted suppliers",
                  "90-Day Replacement Warranty on all parts",
                  "Fast freight shipping to all U.S. ZIP codes",
                  "High-resolution part photos available upon request"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="text-accent" size={18} />
                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </motion.div>

            </motion.div>

            {/* RIGHT — LEAD FORM */}
            <motion.div
              id="hero-form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="max-w-md mx-auto">

                <LeadForm preSelectedBrand={selectedBrand} />

                {/* Call Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-6 text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-center space-x-3 text-white">
                      <Phone className="text-accent" size={20} />
                      <div>
                        <p className="text-sm text-gray-300">Prefer to call?</p>
                        <a href="tel:8008383058" className="text-lg font-bold hover:text-accent transition-colors">
                          (800) 838-3058
                        </a>
                      </div>
                    </div>
                    <p className="text-xs text-gray-300 mt-2">Call us now for immediate assistance</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ PART CATEGORIES */}
      {/* ---------------------------------------------------------------------- */}

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Part Categories
            </h2>
            <p className="text-gray-200 text-lg">
              Shop OEM used auto parts for every vehicle system
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.a
                key={category.name}
                href={category.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group border border-gray-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent">
                  <Package className="text-primary group-hover:text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-accent">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.count} parts</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent text-sm font-medium">Browse</span>
                  <ArrowRight className="text-accent group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ WHY BUY USED AUTO PARTS */}
      {/* ---------------------------------------------------------------------- */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Choose Used OEM Auto Parts?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              OEM used auto parts offer factory-grade performance at a fraction  
              of the cost. Every part is removed from genuine vehicles and  
              undergoes strict quality checks before approval.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Save 50–75% vs New Parts</h3>
              <p className="text-gray-700 leading-relaxed">
                Used OEM parts are significantly cheaper than buying new from the  
                dealership, while still offering factory-level performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Perfect Fitment, Guaranteed</h3>
              <p className="text-gray-700 leading-relaxed">
                Because these parts come directly from original vehicles, they  
                offer 100% compatibility when matched with your VIN.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Environment-Friendly Choice</h3>
              <p className="text-gray-700 leading-relaxed">
                Reusing OEM parts reduces waste and supports sustainable automotive  
                recycling practices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ INSPECTION PROCESS */}
      {/* ---------------------------------------------------------------------- */}

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Auto Parts Inspection Process
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Every part is inspected by certified technicians before packing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-xl shadow">
              <Cog className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-semibold text-primary mb-3">1. Functional Testing</h3>
              <p className="text-gray-700">
                Components are tested for operation, performance, and structural integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <Shield className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-semibold text-primary mb-3">2. Quality Verification</h3>
              <p className="text-gray-700">
                Parts are inspected for wear, cracks, leaks, and overall condition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <Truck className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-semibold text-primary mb-3">3. Secure Packaging</h3>
              <p className="text-gray-700">
                Each part is packaged to prevent damage during freight shipping.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* ---------------------------------------------------------------------- */}
      {/* ⭐ CTA SECTION */}
      {/* ---------------------------------------------------------------------- */}

      <section className="py-20 bg-gradient-to-br from-primary to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Need Help Finding a Part?
          </motion.h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our specialists will help locate the exact OEM part you need,  
            including rare and hard-to-find components.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('tel:8008383058', '_self')}
              className="text-white border-white hover:text-primary"
            >
              <Phone size={18} className="mr-2" />
              Call (800) 838-3058
            </Button>

            <Button
              size="lg"
              onClick={() => handleBrandClick('')}
              className="bg-accent text-white hover:bg-accent/90"
            >
              Request Part Search
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
