// components/Sections/Hero.jsx
'use client';
import { motion } from 'framer-motion';
import { Search, Shield, Truck, Wrench } from 'lucide-react';
import LeadForm from '../UI/LeadForm';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    '/videos/Untitled design (3).mp4',
    '/videos/Untitled design (4).mp4'
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handleVideoLoad = () => {
      video.play().catch((error) => {
        console.log('Auto-play prevented:', error);
      });
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('loadeddata', handleVideoLoad);

    video.src = videos[currentVideoIndex];
    video.load();

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('loadeddata', handleVideoLoad);
    };
  }, [currentVideoIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop={false}
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-4 lg:mb-6"
            >
              Find Reliable Used{' '}
              <span className="text-accent">Engines & Transmissions</span>
              {' '}— Delivered Fast
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed"
            >
              Nationwide delivery • 90-day warranty • OEM tested parts
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-6 lg:mb-8"
            >
              {[
                { icon: Shield, text: '90-Day Warranty' },
                { icon: Truck, text: 'Fast Shipping' },
                { icon: Wrench, text: 'OEM Tested' }
              ].map((item, index) => (
                <div key={item.text} className="flex items-center space-x-2">
                  <item.icon className="text-accent" size={18} />
                  <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lead Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="max-w-md mx-auto lg:mx-0">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}