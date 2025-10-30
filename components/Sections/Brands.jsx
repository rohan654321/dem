'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  SiFord, SiHonda, SiToyota, SiChevrolet, SiBmw, SiMercedes,
  SiNissan, SiHyundai, SiKia, SiVolkswagen, SiAudi, SiSubaru,
  SiPorsche, SiLandrover, SiFerrari, SiLamborghini, SiMazda,
  SiJeep, SiVolvo, SiTesla, SiMitsubishi, SiJaguar, SiPeugeot,
  SiFiat, SiSuzuki
} from 'react-icons/si';
import {
  GiAmericanFootballPlayer,
  GiAlienStare,
  GiAngelWings,
  GiUnionJack,
  GiCarKey,
  GiDodge,
  GiInfinity,
  GiLindenLeaf,
  GiLion,
  GiRam,
  GiCarWheel,
  GiStarsStack  // Use for Chrysler - represents luxury/prestige
} from 'react-icons/gi';
import SearchBar from '@/components/UI/SearchBar';
import { useRouter } from 'next/navigation';

const brands = [
  { name: 'AMC', icon: GiAmericanFootballPlayer },
  { name: 'Acura', icon: GiCarKey },
  { name: 'Alfa Romeo', icon: GiAlienStare },
  { name: 'Aston Martin', icon: GiAngelWings },
  { name: 'Audi', icon: SiAudi },
  { name: 'Bentley', icon: GiUnionJack },
  { name: 'BMW', icon: SiBmw },
  { name: 'Buick', icon: GiCarKey },
  { name: 'Cadillac', icon: GiStarsStack },       // ✅ Changed - represents luxury
  { name: 'Chevrolet', icon: SiChevrolet },
  { name: 'Chrysler', icon: GiCarKey },           // ✅ Changed - simple car icon
  { name: 'Dodge', icon: GiDodge },
  { name: 'Fiat', icon: SiFiat },
  { name: 'Ford', icon: SiFord },
  { name: 'GMC', icon: GiCarKey },
  { name: 'Honda', icon: SiHonda },
  { name: 'Hyundai', icon: SiHyundai },
  { name: 'Infiniti', icon: GiInfinity },
  { name: 'Jaguar', icon: SiJaguar },
  { name: 'Jeep', icon: SiJeep },
  { name: 'Kia', icon: SiKia },
  { name: 'Land Rover', icon: SiLandrover },
  { name: 'Lexus', icon: GiLindenLeaf },
  { name: 'Lincoln', icon: GiLion },
  { name: 'Mazda', icon: SiMazda },
  { name: 'Mercedes', icon: SiMercedes },
  { name: 'Mini', icon: GiCarWheel },
  { name: 'Mitsubishi', icon: SiMitsubishi },
  { name: 'Nissan', icon: SiNissan },
  { name: 'Peugeot', icon: SiPeugeot },
  { name: 'Porsche', icon: SiPorsche },
  { name: 'RAM', icon: GiRam },
  { name: 'Subaru', icon: SiSubaru },
  { name: 'Suzuki', icon: SiSuzuki },
  { name: 'Tesla', icon: SiTesla },
  { name: 'Toyota', icon: SiToyota },
  { name: 'Volkswagen', icon: SiVolkswagen },
  { name: 'Volvo', icon: SiVolvo },
  { name: 'Ferrari', icon: SiFerrari },
  { name: 'Lamborghini', icon: SiLamborghini },
];
export default function Brands() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  // Filter brands based on search input
  const filteredBrands = useMemo(() => {
    return brands.filter((brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleBrandClick = (brandName) => {
    sessionStorage.setItem('prefilledBrand', brandName);
    router.push('/');

    setTimeout(() => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
        <SearchBar
          placeholder="Search for your vehicle brand..."
          onSearch={(value) => setSearchTerm(value)}
          className="mb-12"
        />

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand, index) => {
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
                  onClick={() => handleBrandClick(brand.name)}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Icon className="text-black w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-black">{brand.name}</h3>
                </motion.div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No matching brands found.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
