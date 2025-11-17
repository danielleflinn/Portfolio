import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, UsersIcon, LayersIcon } from 'lucide-react';
interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  team: string;
  tools: string[];
  index: number;
}
export function RecipeCard({
  title,
  description,
  image,
  duration,
  team,
  tools,
  index
}: RecipeCardProps) {
  return <motion.div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }}>
      <div className="relative h-56 md:h-auto md:w-64 flex-shrink-0 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-contain transition-transform hover:scale-105 duration-500 bg-[#FFFAF5]" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="block text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
          <div className="flex items-center">
            <ClockIcon size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <UsersIcon size={16} className="mr-1" />
            <span>{team}</span>
          </div>
          <div className="flex items-center">
            <LayersIcon size={16} className="mr-1" />
            <span>{tools.length} methods</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tools.map((tool, idx) => <span key={idx} className="bg-[#FFF0E8] text-[#C3471D] text-xs px-2 py-1 rounded-full">
              {tool}
            </span>)}
        </div>
        <button className="w-full bg-[#FFFAF5] hover:bg-[#FFE8D9] text-[#C3471D] font-medium py-2 rounded-lg transition-colors border border-[#FFD6C2]">
          View full case study
        </button>
      </div>
    </motion.div>;
}