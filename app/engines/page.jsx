// app/engines/page.js
'use client';
import { motion } from 'framer-motion';
import { 
  Search, 
  Gauge,
  Shield,
  Truck,
  CheckCircle,
  Phone,
  Wrench
} from 'lucide-react';
import {
  SiFord,
  SiHonda,
  SiToyota,
  SiChevrolet,
  SiBmw,
  SiMercedes,
  SiNissan,
  SiHyundai,
  SiKia,
  SiVolkswagen,
  SiAudi,
  SiSubaru,
  SiPorsche,
  SiLandrover,
  SiFerrari,
  SiLamborghini,
  SiMazda,
  SiJeep,
  SiVolvo,
  SiTesla,
  SiMitsubishi,
  SiJaguar,
  SiPeugeot,
  SiFiat,
  SiSuzuki
} from 'react-icons/si';
import {
  GiAmericanFootballPlayer,
  GiAlienStare,
  GiAngelWings,
  GiUnionJack,
  GiCarKey,
  GiDodge,
  GiInfinity,
  GiLindenLeaf,
  GiLion,
  GiRam,
  GiCarWheel,
  GiStarsStack
} from 'react-icons/gi';

import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';
import { useState, useRef } from 'react';
import SearchBar from '../../components/UI/SearchBar';
import LeadForm from '../../components/UI/LeadForm';

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

export default function EnginesPage() {
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
    // Scroll to the hero section form
    setTimeout(() => {
      document.getElementById('hero-form')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const features = [
    {
      icon: Shield,
      title: '90-Day Warranty',
      description: 'Comprehensive warranty on all engines'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: '3-4 day delivery nationwide'
    },
    {
      icon: Gauge,
      title: 'OEM Tested',
      description: 'Thoroughly tested for performance'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Rigorous quality inspection'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary pt-20">
      {/* Hero Section with Video Background */}
    {/* ===== HERO SECTION (MATCHED WITH HOME PAGE STYLE) ===== */}
<section
  id="hero-section"
  className="
    relative 
    min-h-[165vh] 
    sm:min-h-[155vh] 
    md:min-h-[140vh] 
    lg:min-h-[125vh] 
    xl:min-h-[110vh]
    flex items-start 
    justify-center 
    overflow-hidden 
    pt-32 md:pt-40 lg:pt-48 
    scroll-mt-32
  "
>
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
    </video>
    <div className="absolute inset-0 bg-black/60 z-10"></div>
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
        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-6"
        >
          Buy High-Quality Used <span className="text-accent">Engines</span>  
          with Fast Nationwide Shipping
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
        >
          US Auto Parts Zone supplies tested, low-mileage OEM used engines for all makes 
          and models. Every engine is compression-tested, inspected, and VIN-matched 
          for exact compatibility. We ship fully secured freight to any home or repair 
          shop in the USA with a 90-Day Replacement Warranty included.
        </motion.p>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col gap-3 mb-10 lg:max-w-lg"
        >
          {[
            "OEM Original Factory Engines — No Rebuilds",
            "Low Mileage Verified & Test-Run Performance",
            "Compression-Tested and Fully Inspected Units",
            "VIN-Matched for Perfect Fitment",
            "Fast Nationwide Freight Shipping",
            "Photos of the Actual Engine Available"
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Shield className="text-accent" size={18} />
              <span className="text-gray-300 text-sm md:text-base">{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT - FORM */}
      <motion.div
        id="hero-form"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="max-w-md mx-auto">
          <LeadForm 
            preSelectedBrand={selectedBrand}
            defaultPartType="engine"
          />

          {/* Phone Box */}
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
                  <a 
                    href="tel:8008383058"
                    className="text-lg font-bold text-white hover:text-accent transition-colors"
                  >
                    (800) 838-3058
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-2">
                Call us now for immediate assistance
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Our Engines?
            </h2>
            <p className="text-gray-700 text-lg">
              Quality and reliability you can trust
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant="elevated"
                  className='h-full'
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4 text-center">
            Popular Engine Inventory
          </h2>
          <p className="text-gray-800 text-lg text-center mb-8">
            Toyota 2AR-FE / 2GR-FE · Honda K24 / J35 · Ford EcoBoost / Coyote 5.0 · Chevy LS / Vortec · Nissan QR25 / VQ35 · Jeep 3.6 Pentastar · and more.
          </p>

          {/* Search Bar */}
          <SearchBar
            placeholder="Search for your vehicle brand..."
            onSearch={handleSearch}
          />

          {/* Filtered Brand Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8"
          >
            {filteredBrands.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <motion.div
                  key={brand.name}
                  onClick={() => handleBrandClick(brand.name)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Icon className="text-black w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-black">{brand.name}</h3>
                </motion.div>
              );
            })}
            {filteredBrands.length === 0 && (
              <p className="col-span-full text-center text-gray-600">
                No matching brands found.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Can't Find Your Engine?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our inventory is constantly updated. Contact us with your specific 
              requirements and we'll help you find the perfect engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('tel:8008383058', '_self')}
                className='text-white border-white hover:text-primary'
              >
                <Phone size={18} className="mr-2" />
                Call (800) 838-3058
              </Button>
              <Button
                size="lg"
                onClick={() => handleBrandClick('')}
                className='bg-accent text-white hover:bg-accent/90'
              >
                Request Custom Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== EXTRA SEO SECTIONS (ADDED FROM PDF) ===== */}

      {/* WHY BUY USED ENGINES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-3">
              Why Buy Used Engines from US Auto Parts Zone?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Buying a used OEM engine can save thousands compared to a new replacement while delivering
              reliable performance when sourced and inspected properly. We supply verified low-mileage units,
              matched to your VIN, and backed by a 90-day replacement warranty — giving you confidence and
              strong value for money.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2 text-lg">OEM Original Parts</h4>
              <p className="text-gray-600 text-sm">You get factory-built components — not risky rebuilds or unknown cores.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2 text-lg">Verified Low Mileage</h4>
              <p className="text-gray-600 text-sm">We only list engines with verified mileage and test-run performance.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2 text-lg">VIN-Matched Fitment</h4>
              <p className="text-gray-600 text-sm">Exact compatibility checks for sensors, mounts, emission systems, and harnesses.</p>
            </div>
          </div>
        </div>
      </section>



      {/* WARRANTY SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              90-Day Replacement Warranty
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Every engine includes a 90-day replacement warranty that covers internal mechanical failure
              of the long block or engine assembly under normal operating conditions. Installation must be
              performed by a certified mechanic for the warranty to remain valid.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Not covered:</strong> Improper installation, overheating, lack of proper fluids, or damage from
              modifications/tuning are not covered by the warranty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-3">Frequently Asked Questions</h3>
            <p className="text-gray-700">Answers to common questions about our used engines, warranties, and shipping.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="p-4 border rounded-lg">
              <summary className="font-semibold cursor-pointer">Do these engines come with a warranty?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes — every engine includes a 90-day replacement warranty covering internal mechanical failure under
                normal operating conditions. See our warranty page for full terms.
              </p>
            </details>

            <details className="p-4 border rounded-lg">
              <summary className="font-semibold cursor-pointer">How do you verify compatibility?</summary>
              <p className="mt-2 text-sm text-gray-600">
                We VIN-match engines to confirm compatibility with your vehicle’s sensors, mounts, harnesses, and
                emission systems before shipping.
              </p>
            </details>

            <details className="p-4 border rounded-lg">
              <summary className="font-semibold cursor-pointer">Can I request photos of the actual engine?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes — we provide current photos of the exact unit you will receive when available. Request photos when
                you submit your vehicle details.
              </p>
            </details>

            <details className="p-4 border rounded-lg">
              <summary className="font-semibold cursor-pointer">What is your shipping timeline?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Most orders ship within 1–3 business days depending on availability. Freight transit times vary by
                distance and carrier.
              </p>
            </details>

            <details className="p-4 border rounded-lg">
              <summary className="font-semibold cursor-pointer">What is not covered by the warranty?</summary>
              <p className="mt-2 text-sm text-gray-600">
                The warranty does not cover improper installation, overheating, lack of proper fluids, or damage from
                modifications/tuning.
              </p>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}
