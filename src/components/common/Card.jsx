import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES, TEXT_COLORS, FONT_WEIGHTS } from '../../constants/typography';

const Card = ({ 
  icon: Icon,
  title,
  content,
  link,
  delay = 0,
  className = "",
  center = true,
  hover = true,
  iconClassName = "text-secondary"
}) => {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? { href: link } : {};

  const titleClasses = `${FONT_SIZES.subtitle.sm} ${FONT_SIZES.subtitle.md} ${FONT_SIZES.subtitle.lg} ${FONT_WEIGHTS.semibold} ${TEXT_COLORS.primary} mb-1 md:mb-2`;
  const contentClasses = `${FONT_SIZES.body.sm} ${FONT_SIZES.body.md} ${FONT_SIZES.body.lg} ${TEXT_COLORS.secondary}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.3 }
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        bg-primary/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-secondary/20 
        ${hover ? 'hover:border-secondary/40 transition-colors duration-300' : ''} 
        h-full 
        ${className}
      `}
    >
      <CardWrapper 
        {...cardProps}
        className={`flex flex-col ${center ? 'items-center text-center' : ''} h-full`}
      >
        {Icon && (
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2 md:mb-3">
            <Icon className={iconClassName} size={18} />
          </div>
        )}
        <h3 className={titleClasses}>
          {title}
        </h3>
        {typeof content === 'string' ? (
          <p className={contentClasses}>
            {content}
          </p>
        ) : (
          content
        )}
      </CardWrapper>
    </motion.div>
  );
};

export default Card; 