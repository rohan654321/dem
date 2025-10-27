// components/UI/LeadForm.jsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    year: '',
    car: '',
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
            <option value="AMC">AMC</option>
            <option value="Acura">Acura</option>
            <option value="Alfa">Alfa</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Audi">Audi</option>
            <option value="Bentley">Bentley</option>
            <option value="BMW">BMW</option>
            <option value="Buick">Buick</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Chevy">Chevy</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Dodge">Dodge</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="GMC">GMC</option>
            <option value="Honda">Honda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Infiniti">Infiniti</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Jeep">Jeep</option>
            <option value="Kia">Kia</option>
            <option value="Landrover">Landrover</option>
            <option value="Lexus">Lexus</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Mazda">Mazda</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Mini">Mini</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Porsche">Porsche</option>
            <option value="RAM">RAM</option>
            <option value="Subaru">Subaru</option>
            <option value="Tesla">Tesla</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Volvo">Volvo</option>
          </select>
        </div>

        {/* Row 2 - Model & Part Type */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            required
          />

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