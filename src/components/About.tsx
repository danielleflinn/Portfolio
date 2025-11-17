import React from 'react';
import { motion } from 'framer-motion';
import { ChefHatIcon, PenToolIcon, SparklesIcon, CheckCircleIcon, SettingsIcon } from 'lucide-react';
export function About() {
  return <section id="about" className="w-full py-16 px-6 md:px-12 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start gap-12">
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="lg:mr-12">
            <div className="flex items-center mb-2">
              <ChefHatIcon size={28} className="text-[#F45F2A] mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Cook
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Danielle Flinn
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a strong Senior Product Designer and lead serving up design
              solutions that balance user needs, business goals, and engineering
              workflows. I bring system thinking, process maturity, and
              excellence to growing design teams (and the kitchen).
            </p>
            <p className="text-gray-600 mb-6">
              I’ve led a variety of end-to-end design initiatives at Bitwarden,
              a password management startup, and WebMD Health Services, a more
              established company. I enjoy connecting design decisions to
              business impact, improving team efficiency, and fostering strong
              cross-functional collaboration.
            </p>
            <p className="text-gray-600 mb-6">
              I thrive in growth-stage startups, or similar environments, where
              design maturity and process evolution are key. My strengths in
              system thinking, UX strategy, and a bias toward action help teams
              deliver consistent, accessible, and high-quality experiences. I’m
              especially drawn to companies in healthcare, finance, and HR
              technology—where design has the power to make a strong impact. 
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
          <motion.div initial={{
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
            <div className="w-80 md:mt-16">
              <img src="/headshot.jpeg" alt="Professional headshot of Danielle Flinn smilling at the camera" className="w-80 rounded-full object-cover shadow-lg border-4 border-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}