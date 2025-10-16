// app/transmissions/page.js
'use client';
import { motion } from 'framer-motion';
import { 
  Settings,
  Shield,
  Truck,
  CheckCircle,
  Phone
} from 'lucide-react';
import Button from '../../components/UI/Button';
import { FeatureCard } from '../../components/UI/Card';
import SearchBar from '../../components/UI/SearchBar';
import { navigateToHomeWithForm } from '../../utils/navigation';
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

export default function TransmissionsPage() {  
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
              Find used transmissions for all major automotive brands
            </p>
          </motion.div>

          {/* Search Bar */}
          <SearchBar placeholder="Search for your vehicle brand..." />

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
                  onClick={() => navigateToHomeWithForm(brand.name)}
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
                className='border-2 text-white'
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