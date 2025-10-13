'use client';
import { Phone, Star, TrendingUp, Clock, ShieldCheck, Users, Zap, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Sections/Hero';
import Brands from '../components/Sections/Brands';
import Process from '../components/Sections/Process';
import TrustSection from '../components/Sections/TrustSection';
import Policies from '../components/Sections/Policies';
import { motion } from 'framer-motion';
import { FeatureCard, StatsCard } from '../components/UI/Card';
import Button from '../components/UI/Button';

export default function Home() {
  const featuredParts = [
    {
      category: 'Engines',
      count: '1,200+',
      description: 'OEM tested used engines with 90-day warranty',
      popular: ['Honda', 'Toyota', 'Ford', 'BMW'],
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Transmissions',
      count: '800+',
      description: 'Automatic and manual transmissions ready to ship',
      popular: ['Automatic', 'Manual', 'CVT', 'DCT'],
      image: '/api/placeholder/400/300'
    },
    {
      category: 'Engine Components',
      count: '5,000+',
      description: 'Individual components and assemblies',
      popular: ['Cylinder Heads', 'Turbochargers', 'ECUs', 'Starters'],
      image: '/api/placeholder/400/300'
    }
  ];

  const testimonials = [
    {
      name: 'Mike Johnson',
      role: 'Auto Shop Owner',
      rating: 5,
      text: 'Been sourcing engines from AutoParts Zone for 3 years. Quality is consistently excellent and delivery is always on time.',
      image: '/api/placeholder/100/100'
    },
    {
      name: 'Sarah Chen',
      role: 'DIY Mechanic',
      rating: 5,
      text: 'Found a rare transmission for my 2012 BMW. Saved thousands compared to dealership and it works perfectly!',
      image: '/api/placeholder/100/100'
    },
    {
      name: 'David Rodriguez',
      role: 'Fleet Manager',
      rating: 5,
      text: 'Their bulk pricing and reliable parts keep our delivery fleet running smoothly. Excellent customer service.',
      image: '/api/placeholder/100/100'
    }
  ];

  const quickStats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '50K+', label: 'Parts Delivered', icon: TrendingUp },
    { number: '4.9/5', label: 'Customer Rating', icon: Star },
    { number: '98%', label: 'Success Rate', icon: ShieldCheck }
  ];

  const valueProps = [
    {
      icon: ShieldCheck,
      title: 'Rigorous Testing',
      description: 'Every part undergoes comprehensive OEM-standard testing and inspection'
    },
    {
      icon: Zap,
      title: 'Fast Matching',
      description: 'Find compatible parts in seconds with our advanced search technology'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 access to automotive experts for technical guidance and support'
    },
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Save up to 70% compared to new parts without compromising quality'
    }
  ];

  return (
    <Layout>
      <Hero />
      
      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatsCard
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                  className="text-center" trend={undefined}                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Brands />
      
      {/* Featured Parts Section */}
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
              Featured Parts Inventory
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our most popular part categories with thousands of options in stock
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredParts.map((part, index) => (
              <motion.div
                key={part.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{part.category}</h3>
                    <p className="text-white/80">{part.count} available</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{part.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Popular Items:</h4>
                    <div className="flex flex-wrap gap-2">
                      {part.popular.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-secondary text-primary rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    Browse {part.category}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* Value Propositions */}
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
              Why Choose AutoParts Zone?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're revolutionizing the way you source quality used auto parts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  variant="elevated"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-300 text-lg">
              Join thousands of satisfied customers across the US
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '10,000+', label: 'Happy Customers' },
                { number: '15+', label: 'Years Experience' },
                { number: '50+', label: 'Brands Supported' },
                { number: '99%', label: 'Satisfaction Rate' }
              ].map((item, index) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">{item.number}</div>
                  <div className="text-gray-300 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent to-red-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Need a Part Urgently?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Emergency part needed? We offer expedited shipping and priority handling for urgent requests.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-accent hover:bg-gray-100"
                  onClick={() => window.open('tel:5551234567', '_self')}
                >
                  <Phone className="mr-2" size={18} />
                  Call for Emergency Parts
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-accent"
                  onClick={() => window.location.href = '/contact'}
                >
                  Request Expedited Shipping
                </Button>
              </div>
              
              <p className="text-red-200 text-sm mt-6">
                ⚡ Same-day shipping available for orders placed before 2 PM PST
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Policies />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 rounded-full shadow-2xl"
          onClick={() => window.open('tel:5551234567', '_self')}
        >
          <Phone size={24} />
        </motion.button>
      </div>
    </Layout>
  );
}