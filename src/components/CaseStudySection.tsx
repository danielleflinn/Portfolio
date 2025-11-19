import React from 'react';
import { motion } from 'framer-motion';
interface CaseStudySectionProps {
  header: string;
  subheader?: string;
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  backgroundColor?: string;
  id?: string;
}
export function CaseStudySection({
  header,
  subheader,
  children,
  columns = 1,
  backgroundColor,
  id,
}: CaseStudySectionProps) {
  const getGridColumns = () => {
    if (columns === 2) return 'md:grid-cols-2';
    if (columns === 3) return 'md:grid-cols-2 lg:grid-cols-3';
    if (columns === 4) return 'md:grid-cols-2 lg:grid-cols-4';
    return '';
  };
  const sectionStyles = backgroundColor 
    ? `mb-16 w-full px-6 md:px-12 py-6 md:py-12 bg-[${backgroundColor}]`
    : `mb-16 max-w-5xl mx-6 md:mx-auto`;
  
  return <motion.section id={id} initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} viewport={{
    once: true
  }} className={sectionStyles}>
      <div className={backgroundColor ? 'max-w-5xl mx-auto' : ''}>
        <div className="mb-6">
          {subheader ? (
            <>
              <h2 className="text-lg text-gray-600 mb-2">{header}</h2>
              <p className="text-2xl font-medium text-gray-800">{subheader}</p>
            </>
          ) : (
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{header}</h3>
          )}
        </div>
        <div className={columns > 1 ? `grid grid-cols-1 ${getGridColumns()} gap-10` : ''}>
          {children}
        </div>
      </div>
    </motion.section>;
}