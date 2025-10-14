// app/engines/page.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Car, 
  Calendar,
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

import { FormContainer, InputField, SelectField } from '../../components/UI/Form';
import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';

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
  const [searchFilters, setSearchFilters] = useState({
    make: '',
    model: '',
    year: '',
    engineType: '',
    mileage: ''
  });

  const popularMakes = ['Honda', 'Toyota', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Nissan', 'Hyundai'];
  const engineTypes = ['Gasoline', 'Diesel', 'Hybrid', 'Electric'];
  
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

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search filters:', searchFilters);
    // Handle search logic
  };

  const handleFilterChange = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Search Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <FormContainer
              title="Find Your Engine"
              subtitle="Search our extensive inventory of quality used engines"
              onSubmit={handleSearch}
              submitButton={{
                text: 'Search Engines',
                variant: 'primary',
                size: 'lg',
                icon: Search
              }}
              className="shadow-2xl border border-gray-200"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SelectField
                  label="Vehicle Make"
                  name="make"
                  value={searchFilters.make}
                  onChange={handleFilterChange}
                  placeholder="Select make"
                  options={popularMakes.map(make => ({ value: make.toLowerCase(), label: make }))}
                />
                
                <InputField
                  label="Vehicle Model"
                  name="model"
                  value={searchFilters.model}
                  onChange={handleFilterChange}
                  placeholder="Enter model"
                />
                
               <InputField
  label="Vehicle Year"
  name="year"
  type="number"
  value={searchFilters.year}
  onChange={handleFilterChange}
  placeholder="Enter year"
  icon={Calendar}
/>
                
                <SelectField
                  label="Engine Type"
                  name="engineType"
                  value={searchFilters.engineType}
                  onChange={handleFilterChange}
                  placeholder="Select type"
                  options={engineTypes.map(type => ({ value: type.toLowerCase(), label: type }))}
                />
                
                <InputField
  label="Max Mileage"
  name="mileage"
  type="number"
  value={searchFilters.mileage}
  onChange={handleFilterChange}
  placeholder="Enter mileage"
  icon={Gauge}
/>
              </div>
            </FormContainer>
          </motion.div>
        </div>
      </section> */}

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
        Featured Brands
      </h2>
      <p className="text-gray-800 text-lg">
        Find used engines for all major automotive brands
      </p>
    </motion.div>

    {/* Search Bar */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto mb-12 relative"
    >
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" size={20} />
      <input
        type="text"
        placeholder="Search for your vehicle brand..."
        className="w-full pl-12 pr-4 py-4 border border-gray-400 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm text-black placeholder-gray-500"
      />
    </motion.div>

    {/* Brands Grid */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
    >
      {brands.map((brand, index) => {
        const Icon = brand.icon;
        return (
          <motion.div
            key={brand.name}
            onClick={() => (window.location.href = '/')}  // 👈 redirects to home page
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Icon className="text-black w-8 h-8" />
            </div>
            <h3 className="font-semibold text-black">{brand.name}</h3>
          </motion.div>
        );
      })}
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