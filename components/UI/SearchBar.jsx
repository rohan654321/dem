// components/UI/SearchBar.jsx
'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ placeholder = "Search...", className = "", onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value); // 🔥 Trigger filter in parent
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={`max-w-md mx-auto mb-12 relative ${className}`}>
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-md text-gray-800 placeholder-gray-500 bg-white"
      />
    </form>
  );
}
