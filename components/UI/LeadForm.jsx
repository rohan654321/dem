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
        // Redirect to thank you page after successful submission
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

  // Get current year for the year input
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl p-8 text-black max-w-md mx-auto"
    >
      {/* Header */}
      <div className="bg-red-600 text-white text-center py-3 rounded-t-xl -mt-8 -mx-8 mb-6 font-semibold text-lg">
        Find A Part Now
      </div>

      {/* Error Message */}
      {submitMessage && (
        <div className="mb-4 p-3 rounded-md text-center text-sm bg-red-100 text-red-800 border border-red-200">
          {submitMessage}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1 - Year & Car Make */}
        <div className="grid grid-cols-2 gap-4">
          {/* Year Select */}
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="">Select Year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          {/* Car Make */}
          <input
            type="text"
            name="car"
            placeholder="Car Make"
            value={formData.car}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        {/* Row 2 - Model & Part Type */}
        <div className="grid grid-cols-2 gap-4">
          {/* Car Model */}
          <input
            type="text"
            name="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />

          {/* Part Type */}
          <select
            name="part"
            value={formData.part}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
        <div className="grid grid-cols-2 gap-4">
          {/* Engine Size */}
          <select
            name="engineSize"
            value={formData.engineSize}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Engine Size</option>
            <option value="1.0L">1.0L</option>
            <option value="1.2L">1.2L</option>
            <option value="1.4L">1.4L</option>
            <option value="1.6L">1.6L</option>
            <option value="1.8L">1.8L</option>
            <option value="2.0L">2.0L</option>
            <option value="2.2L">2.2L</option>
            <option value="2.4L">2.4L</option>
            <option value="3.0L">3.0L</option>
            <option value="3.5L">3.5L</option>
            <option value="4.0L">4.0L</option>
            <option value="5.0L">5.0L</option>
            <option value="6.0L">6.0L+</option>
          </select>

          {/* Transmission Type */}
          <select
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Transmission</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
            <option value="cvt">CVT</option>
            <option value="dsg">DSG</option>
            <option value="amt">AMT</option>
          </select>
        </div>

        {/* Row 4 - Name & Email */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        {/* Row 5 - Phone & Zip Code */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />

          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        {/* Checkbox - Consent */}
        <div className="flex items-start gap-3 text-sm pt-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
            required
          />
          <label className="text-gray-700 text-xs leading-relaxed">
            I agree to receive SMS updates and consent to the{' '}
            <a href="/terms" className="text-red-600 underline hover:text-red-700">Terms of Service</a> and{' '}
            <a href="/privacy-policy" className="text-red-600 underline hover:text-red-700">Privacy Policy</a>.
            I understand that I may be contacted by phone, email, or SMS regarding my parts inquiry.
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || !formData.consent}
          className={`w-full py-3 rounded-md text-lg font-semibold transition-all duration-300 ${
            isSubmitting || !formData.consent
              ? 'bg-gray-400 cursor-not-allowed text-gray-200'
              : 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
        <p className="text-xs text-gray-500 text-center pt-2">
          We respect your privacy. Your information will never be shared with third parties.
        </p>
      </form>
    </motion.div>
  );
}