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
    'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 text-black';

  const variantsClasses = {
    primary: 'bg-gradient-red shadow-lg focus:ring-black',
    secondary: 'bg-primary shadow-lg focus:ring-black',
    outline: 'border-2 border-black bg-white text-black shadow-lg focus:ring-black',
    ghost: 'bg-transparent text-black shadow-none focus:ring-black',
    danger: 'bg-red-100 border border-red-500 text-black shadow-lg focus:ring-black'
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
          className="w-4 h-4 border-2 border-black border-t-transparent rounded-full mr-2"
        />
      )}

      {Icon && iconPosition === 'left' && !loading && (
        <Icon size={size === 'sm' ? 16 : 20} className="mr-2 text-black" />
      )}

      {children}

      {Icon && iconPosition === 'right' && !loading && (
        <Icon size={size === 'sm' ? 16 : 20} className="ml-2 text-black" />
      )}
    </motion.button>
  );
};

export default Button;
