// components/UI/Form.jsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import Button from './Button';

// Input Field Component
export const InputField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-primary mb-2"
        >
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      
      <motion.div
        initial={false}
        animate={{ 
          borderColor: error ? '#C21807' : isFocused ? '#0A1F44' : '#D1D5DB',
          boxShadow: isFocused ? '0 0 0 3px rgba(10, 31, 68, 0.1)' : 'none'
        }}
        className="relative rounded-lg transition-all duration-200"
      >
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon size={20} />
          </div>
        )}
        
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-primary/20
            transition-all duration-200
            ${Icon ? 'pl-12' : 'pl-4'}
            ${error ? 'border-accent' : 'border-gray-300'}
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          `}
          {...props}
        />
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-accent text-sm mt-2 flex items-center"
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// Select Field Component
export const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  icon: Icon,
  error,
  required = false,
  disabled = false,
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-primary mb-2"
        >
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      
      <motion.div
        initial={false}
        animate={{ 
          borderColor: error ? '#C21807' : isFocused ? '#0A1F44' : '#D1D5DB',
        }}
        className="relative rounded-lg transition-all duration-200"
      >
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
            <Icon size={20} />
          </div>
        )}
        
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-primary/20
            appearance-none bg-white cursor-pointer
            transition-all duration-200
            ${Icon ? 'pl-12' : 'pl-4'}
            ${error ? 'border-accent' : 'border-gray-300'}
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
          `}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </div>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-accent text-sm mt-2 flex items-center"
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// TextArea Component
export const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
  required = false,
  disabled = false,
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-primary mb-2"
        >
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      
      <motion.div
        initial={false}
        animate={{ 
          borderColor: error ? '#C21807' : isFocused ? '#0A1F44' : '#D1D5DB',
        }}
        className="rounded-lg transition-all duration-200"
      >
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-primary/20
            transition-all duration-200 resize-vertical
            ${error ? 'border-accent' : 'border-gray-300'}
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          `}
        />
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-accent text-sm mt-2 flex items-center"
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// Form Container Component
export const FormContainer = ({
  title,
  subtitle,
  children,
  onSubmit,
  submitButton,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
          )}
          {subtitle && (
            <p className="text-gray-600">{subtitle}</p>
          )}
        </div>
      )}
      
      <form onSubmit={onSubmit}>
        {children}
        
        {submitButton && (
          <div className="mt-6">
            <Button
              type="submit"
              variant={submitButton.variant || 'primary'}
              size={submitButton.size || 'lg'}
              loading={submitButton.loading}
              disabled={submitButton.disabled}
              className="w-full"
            >
              {submitButton.text || 'Submit'}
            </Button>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default {
  InputField,
  SelectField,
  TextAreaField,
  FormContainer
};