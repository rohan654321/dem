// components/UI/SearchBar.jsx
'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ placeholder = "Search for your vehicle brand...", className = "" }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // You can customize this search logic based on your needs
      console.log('Searching for:', query);
      // For now, just log the search. You can implement actual search functionality later
      alert(`Search functionality would look for: ${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`max-w-md mx-auto mb-12 relative ${className}`}>
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-md text-gray-800 placeholder-gray-500 bg-white"
      />
    </form>
  );
}