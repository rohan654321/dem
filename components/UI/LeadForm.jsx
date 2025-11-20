// components/UI/LeadForm.jsx
'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

// Car models data organized by brand
const carModelsByBrand = {
  'AMC': ['Eagle', 'Gremlin', 'Hornet', 'Javelin', 'Pacer', 'Rebel'],
  'Acura': ['CL', 'ILX', 'Integra', 'MDX', 'NSX', 'RDX', 'RL', 'RLX', 'RSX', 'TL', 'TLX', 'TSX'],
  'Alfa Romeo': ['4C', 'Giulia', 'Stelvio', 'Spider'],
  'Aston Martin': ['DB11', 'DB9', 'DBS', 'Rapide', 'Vantage', 'Vanquish'],
  'Audi': ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'R8', 'RS3', 'RS5', 'RS7', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'TT'],
  'Bentley': ['Bentayga', 'Continental', 'Flying Spur', 'Mulsanne'],
  'BMW': ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i8'],
  'Buick': ['Cascada', 'Enclave', 'Encore', 'Envision', 'LaCrosse', 'Regal', 'Verano'],
  'Cadillac': ['ATS', 'CT4', 'CT5', 'CT6', 'CTS', 'DTS', 'ELR', 'Escalade', 'SRX', 'XT4', 'XT5', 'XT6', 'XTS'],
  'Chevrolet': ['Blazer', 'Camaro', 'Captiva', 'Colorado', 'Corvette', 'Cruze', 'Equinox', 'Express', 'Impala', 'Malibu', 'Silverado', 'Sonic', 'Spark', 'Suburban', 'Tahoe', 'Traverse', 'Trax', 'Volt'],
  'Chrysler': ['200', '300', 'Pacifica', 'Town & Country', 'Voyager'],
  'Dodge': ['Avenger', 'Challenger', 'Charger', 'Dart', 'Durango', 'Grand Caravan', 'Journey', 'Neon', 'Nitro', 'Ram', 'Viper'],
  'Fiat': ['124 Spider', '500', '500L', '500X', '500e'],
  'Ford': ['Bronco', 'EcoSport', 'Edge', 'Escape', 'Expedition', 'Explorer', 'F-150', 'Fiesta', 'Flex', 'Focus', 'Fusion', 'GT', 'Mustang', 'Ranger', 'Taurus', 'Transit'],
  'GMC': ['Acadia', 'Canyon', 'Sierra', 'Terrain', 'Yukon'],
  'Honda': ['Accord', 'Civic', 'Clarity', 'CR-V', 'CR-Z', 'Element', 'Fit', 'HR-V', 'Insight', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline'],
  'Hyundai': ['Accent', 'Azera', 'Elantra', 'Genesis', 'Ioniq', 'Kona', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster', 'Venue'],
  'Infiniti': ['EX', 'FX', 'G', 'I', 'JX', 'M', 'Q', 'QX', 'QX50', 'QX60', 'QX80'],
  'Jaguar': ['E-PACE', 'F-PACE', 'F-TYPE', 'I-PACE', 'XE', 'XF', 'XJ', 'XK'],
  'Jeep': ['Cherokee', 'Compass', 'Gladiator', 'Grand Cherokee', 'Liberty', 'Patriot', 'Renegade', 'Wrangler'],
  'Kia': ['Cadenza', 'Forte', 'K5', 'K900', 'Niro', 'Optima', 'Rio', 'Sedona', 'Seltos', 'Sorento', 'Soul', 'Sportage', 'Stinger', 'Telluride'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Freelander', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport', 'Range Rover Velar'],
  'Lexus': ['CT', 'ES', 'GS', 'GX', 'HS', 'IS', 'LC', 'LFA', 'LS', 'LX', 'NX', 'RC', 'RX', 'SC', 'UX'],
  'Lincoln': ['Aviator', 'Continental', 'Corsair', 'MKC', 'MKS', 'MKT', 'MKX', 'MKZ', 'Nautilus', 'Navigator'],
  'Mazda': ['2', '3', '5', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-7', 'CX-9', 'MX-5 Miata', 'RX-8'],
  'Mercedes': ['A-Class', 'B-Class', 'C-Class', 'CLA', 'CLS', 'E-Class', 'G-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLK', 'GLS', 'M-Class', 'S-Class', 'SL', 'SLC', 'SLK', 'SLS'],
  'Mini': ['Clubman', 'Convertible', 'Countryman', 'Coupe', 'Hardtop', 'Paceman', 'Roadster'],
  'Mitsubishi': ['Eclipse', 'Eclipse Cross', 'Endeavor', 'Galant', 'i-MiEV', 'Lancer', 'Mirage', 'Outlander', 'Outlander Sport', 'Raider'],
  'Nissan': ['370Z', 'Altima', 'Armada', 'Frontier', 'GT-R', 'Juke', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Navara', 'Pathfinder', 'Quest', 'Rogue', 'Sentra', 'Titan', 'Versa', 'X-Trail', 'Xterra'],
  'Porsche': ['911', 'Boxster', 'Cayenne', 'Cayman', 'Macan', 'Panamera', 'Taycan'],
  'RAM': ['1500', '2500', '3500', 'Promaster', 'Promaster City'],
  'Subaru': ['Ascent', 'BRZ', 'Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Outback', 'STI', 'SVX', 'Tribeca', 'WRX', 'XV'],
  'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck', 'Roadster'],
  'Toyota': ['4Runner', '86', 'Avalon', 'C-HR', 'Camry', 'Corolla', 'FJ Cruiser', 'Highlander', 'Land Cruiser', 'Mirai', 'Prius', 'RAV4', 'Sequoia', 'Sienna', 'Supra', 'Tacoma', 'Tundra', 'Venza', 'Yaris'],
  'Volkswagen': ['Arteon', 'Atlas', 'Beetle', 'CC', 'Eos', 'Golf', 'GTI', 'Jetta', 'Passat', 'Phaeton', 'Tiguan', 'Touareg'],
  'Volvo': ['C30', 'C70', 'S40', 'S60', 'S80', 'S90', 'V40', 'V50', 'V60', 'V70', 'V90', 'XC40', 'XC60', 'XC70', 'XC90'],
  'Ferrari': ['California', 'Enzo', 'F8', 'Portofino', 'Roma', 'SF90', 'Testarossa'],
  'Lamborghini': ['Aventador', 'Gallardo', 'Huracan', 'Murcielago', 'Urus']
};

export default function LeadForm({ prefilledBrand = '' }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    year: '',
    car: prefilledBrand || '',
    model: '',
    part: '',
    engineSize: '',
    transmission: '',
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    consent: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [availableModels, setAvailableModels] = useState([]);

  // Update form when prefilledBrand changes
  useEffect(() => {
    if (prefilledBrand) {
      setFormData(prev => ({
        ...prev,
        car: prefilledBrand
      }));
      // Set available models when brand is prefilled
      setAvailableModels(carModelsByBrand[prefilledBrand] || []);
    }
  }, [prefilledBrand]);

  // Update available models when car brand changes
  useEffect(() => {
    if (formData.car && carModelsByBrand[formData.car]) {
      setAvailableModels(carModelsByBrand[formData.car]);
      // Reset model when brand changes
      setFormData(prev => ({
        ...prev,
        model: ''
      }));
    } else {
      setAvailableModels([]);
    }
  }, [formData.car]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setSubmitMessage('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/thank-you');
      } else {
        setSubmitMessage(result.error || 'Something went wrong! Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('Failed to submit form. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl p-6 text-black max-w-md mx-auto"
    >
      {/* Header */}
      <div className="bg-red-600 text-white text-center py-2 rounded-t-xl -mt-6 -mx-6 mb-4 font-semibold text-base">
        Find A Part Now
      </div>

      {/* Error Message */}
      {submitMessage && (
        <div className="mb-3 p-2 rounded text-center text-xs bg-red-100 text-red-800 border border-red-200">
          {submitMessage}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Row 1 - Year & Car Make */}
        <div className="grid grid-cols-2 gap-3">
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            required
          >
            <option value="">Select Year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            required
          >
            <option value="">Choose Your Car</option>
            {Object.keys(carModelsByBrand).map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Row 2 - Model & Part Type */}
        <div className="grid grid-cols-2 gap-3">
          <select
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            required
            disabled={!formData.car}
          >
            <option value="">{formData.car ? `Select ${formData.car} Model` : 'Select Car First'}</option>
            {availableModels.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>

          <select
            name="part"
            value={formData.part}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            required
          >
            <option value="">Choose Part</option>
            <option value="engine">Engine</option>
            <option value="transmission">Transmission</option>
            <option value="turbocharger">Turbocharger</option>
            <option value="ecu">ECU</option>
            <option value="alternator">Alternator</option>
            <option value="starter">Starter</option>
          </select>
        </div>

        {/* Row 3 - Engine Size & Transmission */}
        <div className="grid grid-cols-2 gap-3">
          <select
            name="engineSize"
            value={formData.engineSize}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          >
            <option value="">Engine Size</option>
            <option value="1.0L">1.0L</option>
            <option value="1.6L">1.6L</option>
            <option value="2.0L">2.0L</option>
            <option value="2.4L">2.4L</option>
            <option value="3.0L">3.0L</option>
            <option value="3.5L">3.5L</option>
            <option value="4.0L">4.0L</option>
            <option value="5.0L">5.0L</option>
            <option value="6.0L">6.0L+</option>
          </select>

          <select
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          >
            <option value="">Transmission</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
            <option value="cvt">CVT</option>
            <option value="dsg">DSG</option>
          </select>
        </div>

        {/* Row 4 - Name & Email */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            required
          />
        </div>

        {/* Row 5 - Phone & Zip Code */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            required
          />

          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Checkbox - Consent */}
        <div className="flex items-start gap-2 text-xs pt-1">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 w-3 h-3 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-1"
            required
          />
          <label className="text-gray-700 text-xs leading-tight">
            I agree to receive SMS updates and consent to the{' '}
            <a href="/terms" className="text-red-600 underline hover:text-red-700">Terms</a> and{' '}
            <a href="/privacy-policy" className="text-red-600 underline hover:text-red-700">Privacy Policy</a>.
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || !formData.consent}
          className={`w-full py-2 rounded text-base font-semibold transition-all duration-300 ${
            isSubmitting || !formData.consent
              ? 'bg-gray-400 cursor-not-allowed text-gray-200'
              : 'bg-red-600 hover:bg-red-700 text-white shadow hover:shadow-md transform hover:-translate-y-0.5'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center text-sm">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Find My Part'
          )}
        </Button>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 text-center pt-1">
          We respect your privacy. Your information will never be shared with third parties.
        </p>
      </form>
    </motion.div>
  );
}