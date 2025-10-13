// app/auto-parts/page.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Car, 
  Calendar,
  Package,
  Shield,
  Truck,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';
import { FormContainer, InputField, SelectField } from '../../components/UI/Form';
import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';

export default function AutoPartsPage() {
  const [searchFilters, setSearchFilters] = useState({
    category: '',
    make: '',
    model: '',
    year: '',
    partNumber: ''
  });

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

  const popularMakes = ['Honda', 'Toyota', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Nissan', 'Hyundai'];
  const partCategories = ['Engines', 'Transmissions', 'Electrical', 'Cooling', 'Fuel', 'Exhaust', 'Suspension', 'Brakes'];
  
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
              Auto Parts
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Complete inventory of quality used auto parts. From engines to small 
              components, find everything you need with our 90-day warranty.
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
              title="Find Auto Parts"
              subtitle="Search our complete inventory of quality used parts"
              onSubmit={handleSearch}
              submitButton={{
                text: 'Search Parts',
                variant: 'primary',
                size: 'lg',
                icon: Search
              }}
              className="shadow-2xl border border-gray-200"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SelectField
                  label="Part Category"
                  name="category"
                  value={searchFilters.category}
                  onChange={handleFilterChange}
                  placeholder="Select category"
                  options={partCategories.map(cat => ({ value: cat.toLowerCase(), label: cat }))}
                />
                
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
  icon={Calendar}  // fixed
/>

                
                <InputField
                  label="Part Number"
                  name="partNumber"
                  value={searchFilters.partNumber}
                  onChange={handleFilterChange}
                  placeholder="Enter part number"
                />
              </div>
            </FormContainer>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Part Categories
            </h2>
            <p className="text-gray-600 text-lg">
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
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
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
            <p className="text-gray-600 text-lg">
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
                />
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
              Parts by Vehicle Make
            </h2>
            <p className="text-gray-600 text-lg">
              Find parts for your specific vehicle manufacturer
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {popularMakes.map((make, index) => (
              <motion.a
                key={make}
                href={`/auto-parts/${make.toLowerCase()}`}
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
              Can't Find What You Need?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our parts specialists can help you locate hard-to-find components 
              and provide expert advice on compatibility and installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('tel:5551234567', '_self')}
              >
                <Phone size={18} className="mr-2" />
                Parts Specialist
              </Button>
              <Button
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Request Part Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}