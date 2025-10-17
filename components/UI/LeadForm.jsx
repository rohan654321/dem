'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';

export default function LeadForm() {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

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

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          {/* Year input (calendar icon) */}
          <input
            type="month"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Select Year"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Car input */}
          <input
            type="text"
            name="car"
            placeholder="Enter Car Name"
            value={formData.car}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="model"
            placeholder="Enter Model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          />

          <select
            name="part"
            value={formData.part}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">Choose Part</option>
            <option value="engine">Engine</option>
            <option value="transmission">Transmission</option>
            <option value="brakes">Brakes</option>
            <option value="battery">Battery</option>
          </select>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-4">
          <select
            name="engineSize"
            value={formData.engineSize}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">Engine Size</option>
            <option value="1.2L">1.2L</option>
            <option value="1.5L">1.5L</option>
            <option value="2.0L">2.0L</option>
            <option value="3.0L">3.0L</option>
          </select>

          {/* Transmission as text input */}
          <input
            type="text"
            name="transmission"
            placeholder="Transmission Type"
            value={formData.transmission}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1"
          />
          <p className="text-gray-700">
            I agree to receive SMS updates and consent to the{' '}
            <a href="/terms" className="text-red-600 underline">Terms of Service</a> and{' '}
            <a href="/privacy-policy" className="text-red-600 underline">Privacy Policy</a>.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md text-lg font-semibold transition-all"
        >
          Find My Part
        </Button>
      </form>
    </motion.div>
  );
}
