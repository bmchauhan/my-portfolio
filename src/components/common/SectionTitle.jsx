import React from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES, TEXT_COLORS, FONT_WEIGHTS } from '../../constants/typography';

const SectionTitle = ({ 
  title, 
  subtitle,
  accent,
  className = "",
  center = true,
  note // NEW: Optional disclaimer or warning text
}) => {
  const titleClasses = `${FONT_SIZES.title.sm} ${FONT_SIZES.title.md} ${FONT_SIZES.title.lg} ${FONT_WEIGHTS.bold} ${TEXT_COLORS.primary} mb-1 md:mb-2`;
  const subtitleClasses = `${FONT_SIZES.body.sm} ${FONT_SIZES.body.md} ${FONT_SIZES.body.lg} ${TEXT_COLORS.secondary} max-w-2xl ${center ? 'mx-auto' : ''}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${center ? 'text-center' : ''} mb-6 md:mb-10 ${className}`}
    >
      <h2 className={titleClasses}>
        {accent ? (
          <>
            {title.split(accent)[0]}
            <span className={TEXT_COLORS.accent}>{accent}</span>
            {title.split(accent)[1]}
          </>
        ) : title}
      </h2>

      <div className={`w-12 md:w-20 h-0.5 md:h-1 bg-secondary ${center ? 'mx-auto' : ''} mb-2 md:mb-3`}></div>

      {subtitle && (
        <p className={subtitleClasses}>
          {subtitle}
        </p>
      )}

      {note && (
        <p className={`italic text-sm text-white/70 mt-4 ${center ? 'mx-auto' : ''} max-w-2xl`}>
          {note}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
