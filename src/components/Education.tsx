import React from 'react';
import { motion } from 'framer-motion';
export function Education() {
  const educationItems = [{
    logo: "/image.png",
    degree: 'Bachelor of Design in User Experience',
    institution: 'Eastern Washington University'
  }, {
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop',
    degree: 'Design Systems Masterclass',
    institution: 'Brad Frost via Hatch Conference'
  }, {
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop',
    degree: 'Web Accessibility Curriculum',
    institution: 'Deque Systems, Inc'
  }];
  return <section className="w-full py-16 px-6 md:px-12 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          My education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationItems.map((item, index) => <motion.div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <div className="w-16 h-16 mb-4 overflow-hidden bg-gray-100">
                <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.degree}
              </h3>
              <p className="text-gray-600">{item.institution}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}