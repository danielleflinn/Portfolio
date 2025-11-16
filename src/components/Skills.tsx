import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { PenToolIcon, LightbulbIcon, WrenchIcon, UsersIcon } from 'lucide-react';
export function Skills() {
  const skillCategories = [{
    title: 'Skills',
    icon: PenToolIcon,
    items: ['UI/UX Design', 'Interaction design', 'Information architecture', 'Design Systems', 'Accessibility/WCAG', 'User research', 'DesignOps']
  }, {
    title: 'Methods',
    icon: LightbulbIcon,
    items: ['Comparative analysis', 'User interviews', 'Wireframing', 'Prototyping', 'Usability testing', 'Card sort/tree testing', 'Vibe coding']
  }, {
    title: 'Tools & Tech',
    icon: WrenchIcon,
    items: ['Figma', 'ProtoPie', 'Adobe CC', 'Usertesting.com', 'Storybook', 'Github', 'HTML/CSS']
  }, {
    title: 'Soft Strengths',
    icon: UsersIcon,
    items: ['Collaboration', 'Communication', 'Organization', 'Documentation', 'Project Management', 'Leadership']
  }];
  return <section className="w-full py-16 px-6 md:px-12 bg-[#FEE8DC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return <motion.div key={categoryIndex} className="flex flex-col" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: categoryIndex * 0.1
          }} viewport={{
            once: true
          }}>
                <div className="flex items-center mb-4">
                  <IconComponent size={24} className="text-[#F45F2A] mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => <li key={itemIndex} className="text-gray-600 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#F45F2A]">
                      {item}
                    </li>)}
                </ul>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}