import React from 'react';
import { motion } from 'framer-motion';
interface CaseStudySectionProps {
  header: string;
  subheader?: string;
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
}
export function CaseStudySection({
  header,
  subheader,
  children,
  columns = 1
}: CaseStudySectionProps) {
  const getGridColumns = () => {
    if (columns === 2) return 'md:grid-cols-2';
    if (columns === 3) return 'md:grid-cols-2 lg:grid-cols-3';
    if (columns === 4) return 'md:grid-cols-2 lg:grid-cols-4';
    return '';
  };
  return <motion.section initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} viewport={{
    once: true
  }} className="mb-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{header}</h2>
        {subheader && <p className="text-lg text-gray-600">{subheader}</p>}
      </div>
      <div className={columns > 1 ? `grid grid-cols-1 ${getGridColumns()} gap-6` : ''}>
        {children}
      </div>
    </motion.section>;
}