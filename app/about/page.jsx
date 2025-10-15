// app/about/page.js
'use client';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Truck, 
  Users, 
  Award,
  CheckCircle,
  MapPin,
  Clock,
  Star
} from 'lucide-react';
import { FeatureCard, StatsCard } from '../../components/UI/Card';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Component for animated numbers
function AnimatedNumber({ value, suffix = "" }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const extractNumber = (val) => {
    if (typeof val === 'number') return val;
    const num = parseInt(val.replace(/[^0-9]/g, ''));
    return isNaN(num) ? 0 : num;
  };

  const numericValue = extractNumber(value);

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={numericValue}
          duration={2.5}
          separator=","
          suffix={suffix}
          className="text-3xl font-bold text-primary mb-1"
        />
      ) : (
        <span className="text-3xl font-bold text-primary mb-1">0{suffix}</span>
      )}
    </div>
  );
}

export default function AboutPage() {
  const stats = [
    { number: 10000, label: 'Parts Delivered', icon: Truck, suffix: "+" },
    { number: 15, label: 'Years Experience', icon: Clock, suffix: "+" },
    { number: 50, label: 'Brands Supported', icon: Award, suffix: "+" },
    { number: 5000, label: 'Happy Customers', icon: Users, suffix: "+" }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every part undergoes rigorous OEM testing and inspection before shipping.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Nationwide shipping with 3-4 day delivery guarantee across the US.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our team of automotive experts is here to help you find the right part.'
    },
    {
      icon: Award,
      title: 'Trust & Reliability',
      description: 'Built on 15 years of trusted service and customer satisfaction.'
    }
  ];

  const team = [
    {
      name: 'Mike Johnson',
      role: 'Founder & CEO',
      experience: '25 years in automotive industry',
      specialty: 'Engine Systems'
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Manager',
      experience: '12 years in parts logistics',
      specialty: 'Supply Chain'
    },
    {
      name: 'David Rodriguez',
      role: 'Technical Director',
      experience: '18 years as master technician',
      specialty: 'Transmissions'
    },
    {
      name: 'Emily Watson',
      role: 'Customer Success',
      experience: '8 years in customer service',
      specialty: 'Client Relations'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
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
              About AutoParts Zone
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over 15 years, we've been connecting car owners with high-quality 
              used engines and transmissions. Our commitment to quality, reliability, 
              and customer satisfaction has made us a trusted name in the automotive industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#e01919] to-[#ff3b3b] rounded-full flex items-center justify-center">
                      <stat.icon className="text-white" size={28} />
                    </div>
                  </div>
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008, AutoParts Zone started as a small family business 
                  with a simple mission: to provide affordable, reliable auto parts 
                  without compromising on quality.
                </p>
                <p>
                  What began as a local operation has grown into a nationwide service, 
                  but our core values remain the same. We believe that everyone deserves 
                  access to quality automotive parts with exceptional customer service.
                </p>
                <p>
                  Today, we serve thousands of customers across the United States, 
                  from individual car owners to professional repair shops, all while 
                  maintaining the personal touch that made us successful.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'OEM-tested used engines and transmissions',
                  '90-day comprehensive warranty on all parts',
                  'Nationwide shipping with tracking',
                  'Expert technical support team',
                  'Competitive pricing with no hidden fees'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-accent flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-secondary">
                <div className="aspect-video bg-gradient-to-br from-primary to-slate-900 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <MapPin className="mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2">Our Facility</h3>
                    <p className="text-gray-300">State-of-the-art testing and storage facility in Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to finding you the right part
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#e01919] to-[#ff3b3b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-2">{member.experience}</p>
                <p className="text-gray-400 text-xs">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Ready to Find Your Part?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AutoParts Zone for 
              their automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#e01919] to-[#ff3b3b] text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us Today
              </motion.a>
              <motion.a
                href="/engines"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Browse Parts
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}