'use client';
import { motion } from 'framer-motion';
import { Shield, Phone } from 'lucide-react';
import LeadForm from '../UI/LeadForm';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [prefilledBrand, setPrefilledBrand] = useState('');

  const videos = [
    '/videos/Untitled design (3).mp4',
    '/videos/Untitled design (4).mp4'
  ];

  useEffect(() => {
    const brand = sessionStorage.getItem('prefilledBrand');
    if (brand) {
      setPrefilledBrand(brand);
      sessionStorage.removeItem('prefilledBrand');
    }

    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () =>
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);

    const handleVideoLoad = () => {
      video.play().catch(() => {});
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
<section
  id="hero-section"
  className="
    relative 
    min-h-[165vh] 
    sm:min-h-[155vh] 
    md:min-h-[140vh] 
    lg:min-h-[125vh] 
    xl:min-h-[110vh]
    flex items-start 
    justify-center 
    overflow-hidden 
    pt-32 md:pt-40 lg:pt-48 
    scroll-mt-32
  "
>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-6"
            >
              Buy OEM Used <span className="text-accent">Engines & Transmissions</span> with Nationwide Delivery
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              US Auto Parts Zone supplies certified, low-mileage OEM used engines and transmissions for all makes 
              and models. Every unit is inspected, compression tested, and verified for fitment before shipping. 
              We deliver to your mechanic or home anywhere in the USA with a 90-Day Replacement Warranty included.
            </motion.p>

            {/* BENEFITS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-3 mb-10 lg:max-w-lg"
            >
              {[
                "OEM Original Parts (No risky rebuilds)",
                "Verified Low Mileage & Test-Run Performance",
                "VIN-Matched for Accurate Fitment",
                "90-Day Replacement Warranty Included",
                "Fast Freight Shipping Nationwide",
                "Current Photos Available Before Purchase"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="text-accent" size={18} />
                  <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* RIGHT: LEAD FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="max-w-md mx-auto">
              <LeadForm prefilledBrand={prefilledBrand} />

              {/* Phone Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-6 text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <Phone className="text-accent" size={20} />
                    <div>
                      <p className="text-sm text-gray-300">Prefer to call?</p>
                      <a 
                        href="tel:8008383058"
                        className="text-lg font-bold text-white hover:text-accent transition-colors"
                      >
                        (800) 838-3058
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 mt-2">
                    Call us now for immediate assistance
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
