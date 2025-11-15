// app/transmissions/page.js
'use client';
import { motion } from 'framer-motion';
import { 
  Settings,
  Shield,
  Truck,
  CheckCircle,
  Phone,
  Wrench
} from 'lucide-react';
import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';
import SearchBar from '../../components/UI/SearchBar';
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
  GiStarsStack
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

export default function TransmissionsPage() {  
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
      description: 'Full warranty coverage on all transmissions'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Nationwide shipping in 3-4 days'
    },
    {
      icon: Settings,
      title: 'Professional Testing',
      description: 'Thoroughly tested and inspected'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Rigorous quality control process'
    }
  ];

  const transmissionInfo = [
    {
      type: 'Automatic',
      description: 'Smooth shifting, easy operation',
      compatibility: 'Most modern vehicles',
      benefits: ['Easy to drive', 'Smooth operation', 'Modern technology']
    },
    {
      type: 'Manual',
      description: 'Full control, engaging drive',
      compatibility: 'Performance and economy cars',
      benefits: ['Better control', 'Improved fuel economy', 'Sporty driving']
    },
    {
      type: 'CVT',
      description: 'Continuous power, maximum efficiency',
      compatibility: 'Modern fuel-efficient vehicles',
      benefits: ['Best fuel economy', 'Smooth acceleration', 'Lightweight']
    }
  ];

  return (
    <div className="min-h-screen bg-secondary pt-20">
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
                Used Transmissions — <span className="text-accent">Automatic & Manual Gearboxes</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              >
                We offer professionally tested used transmissions with verified shift quality and internal fluid
                condition. Whether automatic, manual, or CVT, we verify gear engagement, clutch pressure, and torque
                converter behavior before shipment. VIN-match confirmed for electronic compatibility and gear ratios.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col gap-3 mb-10 lg:max-w-lg"
              >
                {[
                  "Professionally Tested Shift Quality",
                  "VIN-Matched Electronic Compatibility",
                  "Verified Fluid & Clutch Condition",
                  "90-Day Replacement Warranty Included",
                  "Fast Nationwide Freight Delivery",
                  "Request Photos of the Actual Unit"
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
                  defaultPartType="transmission"
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-gray-300 text-lg">
              Every transmission undergoes rigorous testing and inspection
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

      {/* Transmission Types */}
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
              Transmission Types
            </h2>
            <p className="text-gray-600 text-lg">
              Understanding different transmission technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {transmissionInfo.map((info, index) => (
              <motion.div
                key={info.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {info.type}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {info.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Compatibility:</h4>
                  <p className="text-gray-700">{info.compatibility}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {info.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-accent flex-shrink-0" size={16} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Featured Brands
            </h2>
            <p className="text-gray-700 text-lg">
              Find used transmissions for all major automotive brands
            </p>
          </motion.div>

          {/* 🔍 Search Bar */}
          <SearchBar
            placeholder="Search for your vehicle brand..."
            onSearch={handleSearch}
          />

          {/* 🔧 Filtered Brand Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{brand.name}</h3>
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
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our transmission experts can help you find the perfect match for your 
              vehicle and driving needs.
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
                Get Custom Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
