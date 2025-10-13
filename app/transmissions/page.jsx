// app/transmissions/page.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Search, 
  Car, 
  Calendar,
  Settings,
  Shield,
  Truck,
  CheckCircle,
  Gauge,
  Phone
} from 'lucide-react';
import { FormContainer, InputField, SelectField } from '../../components/UI/Form';
import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';

export default function TransmissionsPage() {
  const [searchFilters, setSearchFilters] = useState({
    make: '',
    model: '',
    year: '',
    transmissionType: '',
    driveType: ''
  });

  const popularMakes = ['Honda', 'Toyota', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Nissan', 'Hyundai'];
  const transmissionTypes = ['Automatic', 'Manual', 'CVT', 'DCT'];
  const driveTypes = ['FWD', 'RWD', 'AWD', '4WD'];
  
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
              Used Transmissions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Quality used transmissions with comprehensive testing and 90-day warranty. 
              Find the perfect transmission for your vehicle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <FormContainer
              title="Find Your Transmission"
              subtitle="Search our inventory of quality tested used transmissions"
              onSubmit={handleSearch}
              submitButton={{
                text: 'Search Transmissions',
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
                  label="Transmission Type"
                  name="transmissionType"
                  value={searchFilters.transmissionType}
                  onChange={handleFilterChange}
                  placeholder="Select type"
                  options={transmissionTypes.map(type => ({ value: type.toLowerCase(), label: type }))}
                />
                
                <SelectField
                  label="Drive Type"
                  name="driveType"
                  value={searchFilters.driveType}
                  onChange={handleFilterChange}
                  placeholder="Select drive type"
                  options={driveTypes.map(type => ({ value: type.toLowerCase(), label: type }))}
                />
              </div>
            </FormContainer>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-gray-600 text-lg">
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
                className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
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

      {/* Popular Makes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Popular Transmission Makes
            </h2>
            <p className="text-gray-600 text-lg">
              Browse transmissions by vehicle manufacturer
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {popularMakes.map((make, index) => (
              <motion.a
                key={make}
                href={`/transmissions/${make.toLowerCase()}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 group border border-gray-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Car className="text-primary group-hover:text-white" size={20} />
                </div>
                <span className="font-medium text-gray-800 group-hover:text-accent">
                  {make}
                </span>
              </motion.a>
            ))}
          </div>
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
                onClick={() => window.open('tel:5551234567', '_self')}
              >
                <Phone size={18} className="mr-2" />
                Expert Consultation
              </Button>
              <Button
                size="lg"
                onClick={() => window.location.href = '/contact'}
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