'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Car, Calendar, User } from 'lucide-react';
import Button from './Button';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    partType: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden text-black"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-red rounded-full -translate-y-16 translate-x-16 opacity-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary rounded-full translate-y-12 -translate-x-12 opacity-10" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-10 h-10 bg-gradient-red rounded-lg flex items-center justify-center">
            <Search className="text-white" size={20} />
          </div>
          <h3 className="text-2xl font-heading font-bold text-black">
            Find My Part
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Vehicle Information */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                name="vehicleYear"
                placeholder="Vehicle Year"
                value={formData.vehicleYear}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-black placeholder-gray-600"
                required
              />
            </div>
            
            <div className="relative">
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                name="vehicleMake"
                placeholder="Vehicle Make"
                value={formData.vehicleMake}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-black placeholder-gray-600"
                required
              />
            </div>
            
            <div className="relative">
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                name="vehicleModel"
                placeholder="Vehicle Model"
                value={formData.vehicleModel}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-black placeholder-gray-600"
                required
              />
            </div>
          </div>

          {/* Part Type */}
          <select
            name="partType"
            value={formData.partType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-black placeholder-gray-600"
            required
          >
            <option value="">Select Part Type</option>
            <option value="engine">Engine</option>
            <option value="transmission">Transmission</option>
          </select>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-black placeholder-gray-600"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-black placeholder-gray-600"
                required
              />
            </div>
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all text-black placeholder-gray-600"
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full py-4 text-lg">
            Find My Part Now
          </Button>

          <p className="text-xs text-gray-700 text-center">
            By submitting, you agree to our Privacy Policy and consent to contact.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
