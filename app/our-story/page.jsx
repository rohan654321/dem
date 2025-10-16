// app/our-story/page.js
'use client';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Heart,
  MapPin,
  Shield,
  Truck,
  Star
} from 'lucide-react';
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

export default function OurStoryPage() {
  const timeline = [
    {
      year: '2010',
      title: 'Humble Beginnings',
      description: 'Founded as a small family business with a single warehouse in Los Angeles',
      icon: Calendar
    },
    {
      year: '2013',
      title: 'First Major Expansion',
      description: 'Opened second distribution center and expanded to nationwide shipping',
      icon: TrendingUp
    },
    {
      year: '2016',
      title: 'Quality Certification',
      description: 'Implemented rigorous OEM testing standards and 90-day warranty program',
      icon: Award
    },
    {
      year: '2019',
      title: 'Digital Transformation',
      description: 'Launched advanced online platform with real-time inventory tracking',
      icon: Target
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as a trusted supplier serving all 50 states',
      icon: Users
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above all else, building relationships that last for years.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every part undergoes rigorous testing to ensure reliability and performance.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our automotive experts have decades of combined industry experience.'
    },
    {
      icon: Truck,
      title: 'Reliable Service',
      description: 'Consistent, dependable delivery and support when you need it most.'
    }
  ];

  const milestones = [
    { number: '50,000+', label: 'Parts Delivered', icon: Truck },
    { number: '15,000+', label: 'Satisfied Customers', icon: Users },
    { number: '50+', label: 'Brands Supported', icon: Award },
    { number: '15+', label: 'Years of Trust', icon: Calendar }
  ];

  const teamPrinciples = [
    'Transparent pricing with no hidden fees',
    'Honest assessments of part condition',
    'Clear communication throughout the process',
    'Fair treatment of every customer',
    'Accountability for our products and service'
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
              Our Story
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From a small family business to a trusted nationwide supplier - 
              our journey of passion, quality, and commitment to automotive excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Built on Family Values
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  AutoParts Zone began in 2010 when founder Mike Johnson, a third-generation 
                  mechanic, saw an opportunity to provide quality used auto parts to car owners 
                  who wanted reliability without the dealership price tag.
                </p>
                <p>
                  What started in a 2,000 square foot garage with just three employees has 
                  grown into a nationwide operation, but our core philosophy remains unchanged: 
                  treat every customer like family and every part with the care it deserves.
                </p>
                <p>
                  We believe that everyone deserves access to affordable, reliable automotive 
                  parts backed by honest service and expert support.
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-4 p-6 bg-white rounded-2xl border border-gray-200">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Still Family-Owned</h4>
                  <p className="text-gray-600 text-sm">
                    Operating from our original Los Angeles location, now expanded to serve all 50 states
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-primary to-slate-900 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Heart className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To provide quality used auto parts with exceptional service, 
                      making vehicle maintenance accessible and affordable for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 md:w-48 text-center md:text-right">
                  <div className="bg-accent text-white rounded-2xl px-6 py-3 inline-block">
                    <span className="text-2xl font-bold">{item.year}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-secondary rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <item.icon className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
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
              By The Numbers
            </h2>
            <p className="text-gray-300 text-lg">
              Our impact and growth over the years
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <milestone.icon className="text-white" size={28} />
                  </div>
                  <AnimatedNumber value={milestone.number} />
                  <p className="text-gray-300 font-medium">{milestone.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-gray-600 text-lg">
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
                className="text-center"
              >
                <div className="bg-secondary rounded-2xl p-8 border border-gray-200 h-full">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Principles */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                The AutoParts Zone Difference
              </h2>
              <p className="text-gray-700 text-lg">
                What sets us apart in the automotive parts industry
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                    <Star className="text-accent mr-3" size={24} />
                    Our Commitment
                  </h3>
                  <ul className="space-y-3">
                    {teamPrinciples.map((principle, index) => (
                      <motion.li
                        key={principle}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{principle}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-4">Looking Ahead</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As we continue to grow, our focus remains on innovation in parts testing, 
                    expanding our inventory, and enhancing customer experience through technology.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We're committed to maintaining the personal touch that made us successful 
                    while embracing new opportunities to serve the automotive community.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Join Our Story
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Become part of the AutoParts Zone family and experience the difference 
              that comes from 15 years of passion for automotive excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Meet Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}