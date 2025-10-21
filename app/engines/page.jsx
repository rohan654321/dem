// app/engines/page.js
'use client';
import { motion } from 'framer-motion';
import { 
  Search, 
  Gauge,
  Shield,
  Truck,
  CheckCircle,
  Phone
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

import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';
import { useState } from 'react';
import SearchBar from '../../components/UI/SearchBar';

const brands = [
  { name: 'Ford', icon: SiFord },
  { name: 'Honda', icon: SiHonda },
  { name: 'Toyota', icon: SiToyota },
  { name: 'Chevrolet', icon: SiChevrolet },
  { name: 'BMW', icon: SiBmw },
  { name: 'Mercedes', icon: SiMercedes },
  { name: 'Nissan', icon: SiNissan },
  { name: 'Hyundai', icon: SiHyundai },
  { name: 'Kia', icon: SiKia },
  { name: 'Volkswagen', icon: SiVolkswagen },
  { name: 'Audi', icon: SiAudi },
  { name: 'Subaru', icon: SiSubaru },
  { name: 'Porsche', icon: SiPorsche },
  { name: 'Land Rover', icon: SiLandrover },
  { name: 'Ferrari', icon: SiFerrari },
  { name: 'Lamborghini', icon: SiLamborghini },
  { name: 'Mazda', icon: SiMazda },
  { name: 'Jeep', icon: SiJeep },
  { name: 'Volvo', icon: SiVolvo },
  { name: 'Tesla', icon: SiTesla },
  { name: 'Mitsubishi', icon: SiMitsubishi },
  { name: 'Jaguar', icon: SiJaguar },
  { name: 'Peugeot', icon: SiPeugeot },
  { name: 'Fiat', icon: SiFiat },
  { name: 'Suzuki', icon: SiSuzuki },
];


export default function EnginesPage() {
    const [filteredBrands, setFilteredBrands] = useState(brands);

  const handleSearch = (query) => {
    const filtered = brands.filter((b) =>
      b.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBrands(filtered);
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Used Engines
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Find high-quality used engines with 90-day warranty. OEM tested and 
              ready for installation with nationwide delivery.
            </p>
          </motion.div>
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
              Why Choose Our Engines?
            </h2>
            <p className="text-gray-300 text-lg">
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
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Makes */}
{/* Featured Brands Section */}
 <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4 text-center">
          Featured Brands
        </h2>
        <p className="text-gray-800 text-lg text-center mb-8">
          Find used engines for all major automotive brands
        </p>

        {/* 🔍 Search Bar */}
        <SearchBar
          placeholder="Search for your vehicle brand..."
          onSearch={handleSearch}
        />

        {/* 🔧 Filtered Brand Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredBrands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={brand.name}
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
                onClick={() => window.open('tel:5551234567', '_self')}
                className='text-white'
              >
                <Phone size={18} className="mr-2" />
                Call for Availability
              </Button>
              <Button
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className='border-2 text-white'
              >
                Request Custom Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}