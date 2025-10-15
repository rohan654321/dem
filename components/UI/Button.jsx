// components/UI/Button.jsx
'use client';
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon: Icon = null,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantsClasses = {
    primary: 'bg-gradient-to-r from-[#e01919] to-[#ff3b3b] text-white shadow-lg hover:shadow-xl focus:ring-[#ff3b3b]',
    secondary: 'bg-primary text-white shadow-lg hover:shadow-xl focus:ring-primary',
    outline: 'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white shadow-lg focus:ring-primary',
    accent: 'border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white shadow-lg focus:ring-accent',
    ghost: 'bg-transparent text-primary hover:bg-primary/10 shadow-none focus:ring-primary'
  };

  const sizesClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed hover:scale-100';

  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled && !loading ? 'hover' : ''}
      whileTap={!disabled && !loading ? 'tap' : ''}
      className={`${baseClasses} ${variantsClasses[variant]} ${sizesClasses[size]} ${
        disabled || loading ? disabledClasses : ''
      } ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      {...props}
    >
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
        />
      )}

      {Icon && iconPosition === 'left' && !loading && (
        <Icon size={size === 'sm' ? 16 : 20} className="mr-2" />
      )}

      {children}

      {Icon && iconPosition === 'right' && !loading && (
        <Icon size={size === 'sm' ? 16 : 20} className="ml-2" />
      )}
    </motion.button>
  );
};

export default Button;