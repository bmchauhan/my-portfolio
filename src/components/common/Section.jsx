import React from 'react';
import { motion } from 'framer-motion';
import { SECTION_SPACING, CONTAINER } from '../../constants/typography';

const Section = ({ 
  children, 
  id, 
  className = "",
  withContainer = true,
  animate = true 
}) => {
  const baseClasses = `${SECTION_SPACING.sm} ${SECTION_SPACING.md} ${SECTION_SPACING.lg}`;
  
  const content = withContainer ? (
    <div className={CONTAINER.default}>
      {children}
    </div>
  ) : children;

  if (!animate) {
    return (
      <section id={id} className={`${baseClasses} ${className}`}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${baseClasses} ${className}`}
    >
      {content}
    </motion.section>
  );
};

export default Section; 