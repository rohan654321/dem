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
} from 'lucide-react';
import SearchBar from '../../components/UI/SearchBar';
import { navigateToHomeWithForm } from '../../utils/navigation';
import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';
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
import { useState } from 'react';

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

export default function AutoPartsPage() {
  const [filteredBrands, setFilteredBrands] = useState(brands);

  const handleSearch = (query) => {
    const filtered = brands.filter((b) =>
      b.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBrands(filtered);
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            Auto Parts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Complete inventory of quality used auto parts. From engines to small
            components, find everything you need with our 90-day warranty.
          </motion.p>
        </div>
      </section>

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredBrands.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <motion.div
                  key={brand.name}
                  onClick={() => navigateToHomeWithForm(brand.name)}
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
              onClick={() => window.open('tel:5551234567', '_self')}
              className='text-white'
            >
              <Phone size={18} className="mr-2" />
              Parts Specialist
            </Button>
            <Button
              size="lg"
              onClick={() => (window.location.href = '/contact')}
              className='text-white border-2'
            >
              Request Part Search
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}