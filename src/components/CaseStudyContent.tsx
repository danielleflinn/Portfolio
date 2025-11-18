import React from 'react';
import { motion } from 'framer-motion';
interface CaseStudySection {
  title: string;
  content: React.ReactNode;
}
interface CaseStudyContentProps {
  sections: CaseStudySection[];
}
export function CaseStudyContent({
  sections
}: CaseStudyContentProps) {
  return <div className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-16">
        {sections.map((section, index) => <motion.section key={index} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {section.title}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {section.content}
            </div>
          </motion.section>)}
      </div>
    </div>;
}