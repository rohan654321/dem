'use client';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
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

export default function Brands() {
  return (
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
  );
}
