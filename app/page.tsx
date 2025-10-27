// app/page.js
'use client';
import { Phone, Star, TrendingUp, Clock, ShieldCheck, Users, Zap, ArrowRight } from 'lucide-react';
import Hero from '../components/Sections/Hero';
import Brands from '../components/Sections/Brands';
import Process from '../components/Sections/Process';
import TrustSection from '../components/Sections/TrustSection';
import Policies from '../components/Sections/Policies';
import { motion } from 'framer-motion';
import { FeatureCard } from '../components/UI/Card';
import Button from '../components/UI/Button';
import CountUp from 'react-countup';
import PartsGrid from '@/components/parts-grid';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

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

  // const quickStats = [
  //   { number: '15+', label: 'Years Experience', icon: Clock },
  //   { number: '50K+', label: 'Parts Delivered', icon: TrendingUp },
  //   { number: '4.9/5', label: 'Customer Rating', icon: Star },
  //   { number: '98%', label: 'Success Rate', icon: ShieldCheck }
  // ];

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

  const handleBrowseParts = (category: string) => {
    router.push(`/${category.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleKnowMore = () => {
    router.push('/about');
  };

  const handleViewMore = () => {
    router.push('/auto-parts');
  };

  const handlePartClick = (part: any, index: number) => {
    console.log('Part clicked:', part.title);
    router.push('/auto-parts');
  };

  return (
    <>
      <Hero />

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon size={32} className="text-primary mx-auto mb-3" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
                  <CountUp
                    end={parseFloat(stat.number.replace(/\D/g, ''))}
                    duration={2}
                    suffix={stat.number.replace(/\d/g, '')}
                  />
                </h3>
                <p className="text-sm md:text-lg text-primary">{stat.label}</p>
              </motion.div>
            ))} */}
          </div>
        </div>
      </section>

      <Brands />
            {/* Featured Parts Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Featured Parts Inventory
            </h2>
            <p className="text-primary text-base md:text-lg max-w-5xl mx-auto">
              Browse our most popular part categories with thousands of options in stock
            </p>
          </motion.div>

          {/* Updated grid container with flex and justify-center */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
              {featuredParts.map((part, index) => (
                <motion.div
                  key={part.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                  onClick={() => handleBrowseParts(part.category)}
                >
                  <div className="h-48 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{part.category}</h3>
                      <p className="text-white/80 text-sm md:text-base">{part.count} available</p>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <p className="text-primary text-sm md:text-base mb-4">{part.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Popular Items:</h4>
                      <div className="flex flex-wrap gap-2">
                        {part.popular.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-secondary text-primary rounded-full text-xs md:text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-accent group-hover:text-white transition-all border-accent text-accent text-sm md:text-base"
                      onClick={(e: { stopPropagation: () => void; }) => {
                        e.stopPropagation();
                        handleBrowseParts(part.category);
                      }}
                    >
                      Browse {part.category}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Process /> */}

      {/* Value Propositions */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Why Choose AutoParts Zone?
            </h2>
            <p className="text-primary text-base md:text-lg max-w-2xl mx-auto">
              We're revolutionizing the way you source quality used auto parts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                  className="text-primary h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PartsGrid
        primary="#0e2a47"
        buttonText="Know More"
        viewMoreText="View More"
        onPartClick={handlePartClick}
        onViewMoreClick={handleViewMore}
      />

      <TrustSection />

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-primary text-base md:text-lg">
              Join thousands of satisfied customers across the US
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-secondary"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                    />
                  ))}
                </div>

                <blockquote className="text-primary mb-6 leading-relaxed text-sm md:text-base">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-primary text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <Policies /> */}
      {/* Sticky Mobile CTA - Only show on mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-accent text-white p-4 rounded-full shadow-2xl"
          onClick={() => window.open('tel:5551234567', '_self')}
        >
          <Phone size={24} />
        </motion.button>
      </div>
    </>
  );
}