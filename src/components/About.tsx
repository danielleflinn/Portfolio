import React from 'react';
import { motion } from 'framer-motion';
import { ChefHatIcon, PenToolIcon, SparklesIcon, CheckCircleIcon, SettingsIcon } from 'lucide-react';
export function About() {
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
              <ChefHatIcon size={28} className="text-[#F45F2A] mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Chef
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Danielle Flinn
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a Senior Product Designer serving up design solutions that
              balance user needs, business goals, and engineering workflows. I
              bring system thinking, process maturity, and excellence to growing
              design teams (and the kitchen).
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not working, you'll find me experimenting with new
              recipes in my kitchen, exploring a new local restaurant, hiking,
              or meeting new friends at a social dance. Wherever I go, I'm
              curious to understand how the world works and am on the lookout
              for fantastic design inspiration.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <PenToolIcon size={16} className="text-[#F45F2A] mr-2" />
                <span className="text-gray-700">UX Design</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <SparklesIcon size={16} className="text-[#F45F2A] mr-2" />
                <span className="text-gray-700">Design Systems</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <SettingsIcon size={16} className="text-[#F45F2A] mr-2" />
                <span className="text-gray-700">DesignOps</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircleIcon size={16} className="text-[#F45F2A] mr-2" />
                <span className="text-gray-700">Accessibility</span>
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
            <div className="flex flex-col items-center mb-6">
              <img src="/headshot.png" alt="Danielle Flinn" className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white" />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-[#FFE8D9]">
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