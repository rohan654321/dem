// components/UI/Card.jsx
'use client';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

const cardVariants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className = '',
  onClick,
  ...props
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary border border-gray-300',
    gradient: 'bg-gradient-to-br from-primary to-slate-900 text-white'
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={hoverable ? "hover" : ""}
      className={`
        rounded-2xl transition-all duration-300
        ${variants[variant]}
        ${paddings[padding]}
        ${hoverable ? 'cursor-pointer hover:shadow-xl' : ''}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Card Header Component
export const CardHeader = ({
  title,
  subtitle,
  icon: Icon,
  action,
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className={`flex items-center ${align === 'center' ? 'justify-center text-center' : 'justify-between'}`}>
        <div className={`flex items-center ${align === 'center' ? 'flex-col' : 'space-x-3'}`}>
          {Icon && (
            <div className={`${align === 'center' ? 'mb-3' : ''}`}>
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Icon className="text-white" size={24} />
              </div>
            </div>
          )}
          
          <div className={align === 'center' ? 'text-center' : ''}>
            {title && (
              <h3 className="text-xl font-semibold text-primary">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-gray-600 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        
        {action && (
          <div className="flex-shrink-0">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

// Card Content Component
export const CardContent = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

// Card Footer Component
export const CardFooter = ({
  children,
  align = 'left',
  className = ''
}) => {
  const alignment = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between'
  };

  return (
    <div className={`mt-6 flex ${alignment[align]} items-center space-x-4 ${className}`}>
      {children}
    </div>
  );
};

// Feature Card Component
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = 'default',
  hoverable = true,
  className = '',
  iconColor = 'text-black' // <-- new prop for icon color
}) => {
  return (
    <Card
      variant={variant}
      hoverable={hoverable}
      padding="lg"
      className={`text-center group ${className}`}
    >
      <div className="flex flex-col items-center">
        {Icon && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 bg-gradient-red rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all"
          >
            <Icon className={`${iconColor}`} size={28} />
          </motion.div>
        )}
        
        {title && (
          <h4 className="text-lg font-semibold text-primary mb-3">
            {title}
          </h4>
        )}
        
        {description && (
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
};


// Stats Card Component
export const StatsCard = ({
  number,
  label,
  icon: Icon,
  trend,
  className = ''
}) => {
  return (
    <Card
      variant="elevated"
      hoverable={true}
      padding="lg"
      className={className}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-primary mb-1">
            {number}
          </p>
          <p className="text-gray-600 font-medium">
            {label}
          </p>
          {trend && (
            <p className={`text-sm mt-2 ${
              trend.direction === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>
              {trend.value}% {trend.direction === 'up' ? '↑' : '↓'}
            </p>
          )}
        </div>
        
        {Icon && (
          <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
            <Icon className="text-primary" size={24} />
          </div>
        )}
      </div>
    </Card>
  );
};

// Testimonial Card Component
export const TestimonialCard = ({
  quote,
  author,
  position,
  avatar,
  rating = 5,
  className = ''
}) => {
  return (
    <Card
      variant="elevated"
      hoverable={true}
      padding="lg"
      className={className}
    >
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center space-x-3">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-primary">{author}</p>
          {position && (
            <p className="text-sm text-gray-600">{position}</p>
          )}
        </div>
      </div>
    </Card>
  );
};
export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold text-primary ${className}`}>{children}</h3>
);

// CardDescription component
export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 leading-relaxed ${className}`}>{children}</p>
);

export default Card;
export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  FeatureCard,
  StatsCard,
  TestimonialCard
};