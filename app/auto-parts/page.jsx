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
  Search,
  Wrench,
} from 'lucide-react';
import SearchBar from '../../components/UI/SearchBar';
import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';
import LeadForm from '../../components/UI/LeadForm';
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
  GiStarsStack  // Use for Chrysler - represents luxury/prestige
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
  { name: 'Cadillac', icon: GiStarsStack },       // ✅ Changed - represents luxury
  { name: 'Chevrolet', icon: SiChevrolet },
  { name: 'Chrysler', icon: GiCarKey },           // ✅ Changed - simple car icon
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
    // Scroll to the hero section form
    setTimeout(() => {
      document.getElementById('hero-form')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const categories = [
    { name: 'Engines', count: '1,200+', href: '/engines' },
    { name: 'Transmissions', count: '800+', href: '/transmissions' },
    { name: 'Engine Components', count: '5,000+', href: '#' },
    { name: 'Electrical Parts', count: '3,200+', href: '#' },
    { name: 'Cooling System', count: '1,800+', href: '#' },
    { name: 'Fuel System', count: '2,100+', href: '#' },
    { name: 'Exhaust System', count: '1,500+', href: '#' },
    { name: 'Suspension', count: '2,800+', href: '#' }
  ];

  const features = [
    {
      icon: Shield,
      title: '90-Day Warranty',
      description: 'Comprehensive warranty on all parts'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Nationwide delivery in 3-4 days'
    },
    {
      icon: CheckCircle,
      title: 'Quality Tested',
      description: 'Thorough inspection process'
    },
    {
      icon: Package,
      title: 'Easy Returns',
      description: '30-day return policy'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/api/placeholder/1920/1080" // Optional: fallback image
          >
            {/* Add multiple video sources for better browser compatibility */}
           <source src="/videos/Untitled design (3).mp4" type="video/mp4" />
            <source src="/videos/Untitled design (4).mp4" type="video/webm" />
            {/* Fallback text for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-30">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 lg:mb-6"
              >
                Find Reliable Used{' '}
                <span className="text-accent">Auto Parts</span>
                {' '}— Delivered Fast
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed"
              >
                Complete inventory of quality used auto parts. From engines to small
                components, find everything you need with our 90-day warranty.
              </motion.p>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-6 lg:mb-8"
              >
                {[
                  { icon: Shield, text: '90-Day Warranty' },
                  { icon: Truck, text: 'Fast Shipping' },
                  { icon: Wrench, text: 'OEM Tested' }
                ].map((item, index) => (
                  <div key={item.text} className="flex items-center space-x-2">
                    <item.icon className="text-accent" size={18} />
                    <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Lead Form Card */}
            <motion.div
              id="hero-form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="max-w-md mx-auto lg:mx-0">
                <LeadForm 
                  preSelectedBrand={selectedBrand}
                />
                
                {/* Phone Number Section */}
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
                          className="text-lg font-bold text-white hover:text-accent transition-colors duration-300"
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

      {/* Rest of your existing sections remain the same */}
      {/* Categories Grid */}
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
              Browse our comprehensive auto parts inventory
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
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-all">
                  <Package className="text-primary group-hover:text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.count} parts
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent text-sm font-medium">Browse</span>
                  <ArrowRight className="text-accent transform group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our Parts?
            </h2>
            <p className="text-gray-700 text-lg">
              Quality and reliability in every part we sell
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Featured Brands
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Find auto parts for all major automotive brands
          </p>

          {/* 🔍 Search Bar */}
          <SearchBar
            placeholder="Search for your vehicle brand..."
            onSearch={handleSearch}
          />

          {/* 🔧 Filtered Brands Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
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
                  whileHover={{ scale: 1.08, y: -6 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-200"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{brand.name}</h3>
                </motion.div>
              );
            })}
            {filteredBrands.length === 0 && (
              <p className="col-span-full text-gray-600">No brands found.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Can't Find What You Need?
          </motion.h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our parts specialists can help you locate hard-to-find components
            and provide expert advice on compatibility and installation.
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
              Request Part Search
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}