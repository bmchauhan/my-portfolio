import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES, FONT_WEIGHTS } from '../../constants/typography';

const Button = ({ 
  children, 
  onClick, 
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  icon: Icon = null,
  isLoading = false,
  fullWidth = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  };

  const variantClasses = {
    primary: 'bg-secondary text-black hover:bg-purple-300',
    outline: 'border-2 border-secondary text-white hover:bg-secondary hover:text-black',
    ghost: 'text-white hover:bg-white/10'
  };

  const baseClasses = `
    ${FONT_SIZES.button.sm}
    ${FONT_SIZES.button.md}
    ${FONT_SIZES.button.lg}
    ${FONT_WEIGHTS.medium}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : 'w-auto'}
    rounded-lg shadow-lg transition-all flex items-center justify-center gap-2
  `;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || isLoading}
      className={`
        ${baseClasses}
        ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : (
        <>
          {Icon && <Icon size={size === 'sm' ? 14 : size === 'md' ? 16 : 18} />}
          {children}
        </>
      )}
    </motion.button>
  );
};

export default Button; 