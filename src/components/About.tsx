import React from 'react';
import { motion } from 'framer-motion';
import { ChefHatIcon, PenToolIcon, SparklesIcon, HeartIcon } from 'lucide-react';
export function About() {
  const skills = [{
    name: 'User Research',
    level: 90
  }, {
    name: 'Wireframing',
    level: 85
  }, {
    name: 'Prototyping',
    level: 95
  }, {
    name: 'Usability Testing',
    level: 80
  }, {
    name: 'Visual Design',
    level: 85
  }, {
    name: 'Interaction Design',
    level: 90
  }];
  return <section id="chef" className="w-full py-16 px-6 md:px-12 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div className="md:w-1/2" initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <div className="flex items-center mb-4">
              <ChefHatIcon size={28} className="text-[#FF6B35] mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Chef
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Julia Chen
            </h3>
            <p className="text-gray-600 mb-6">
              I’m a Senior Product Designer serving up design solutions that balance user needs, business goals, and engineering workflows. I bring system thinking, process maturity, and excellence to growing design teams (and the kitchen).
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not designing interfaces, you'll find me experimenting
              with new recipes in my kitchen, exploring local farmers markets,
              or hosting dinner parties where I test both my latest culinary
              creations and design prototypes on willing friends.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <PenToolIcon size={16} className="text-[#FF6B35] mr-2" />
                <span className="text-gray-700">UX Design</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <SparklesIcon size={16} className="text-[#FF6B35] mr-2" />
                <span className="text-gray-700">Design Systems</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <HeartIcon size={16} className="text-[#FF6B35] mr-2" />
                <span className="text-gray-700">Culinary Arts</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="md:w-1/2" initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6" id="ingredients">
              My Ingredients (Skills)
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-[#FF6B35]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div className="bg-[#FF6B35] h-2.5 rounded-full" initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1,
                  delay: 0.1 * index
                }} viewport={{
                  once: true
                }}></motion.div>
                  </div>
                </div>)}
            </div>
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-[#FFE8D9]">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                My Design Philosophy
              </h4>
              <p className="text-gray-600 italic">
                "Just as a great meal brings people together, great design
                creates meaningful connections between users and products. Both
                require understanding your audience, attention to detail, and a
                willingness to iterate until it's just right."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}