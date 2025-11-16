import React from 'react';
import { motion } from 'framer-motion';
export function OutsideWork() {
  const images = [{
    url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
    caption: 'Exploring local trails'
  }, {
    url: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=600&fit=crop',
    caption: 'Social dancing with friends'
  }, {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    caption: 'Volunteering with students'
  }, {
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
    caption: 'Cooking new recipes'
  }, {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    caption: 'Finding inspiration in nature'
  }, {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    caption: 'Discovering great design'
  }];
  return <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Outside of work
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl">
            When I'm not working, you'll find me experimenting with new recipes in my kitchen, exploring a new local restaurant, hiking, or meeting new friends at a social dance. Wherever I go, I'm curious to understand how the world works and am on the lookout for fantastic design inspiration.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => <motion.div key={index} className="flex flex-col" initial={{
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
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3">
                <img src={image.url} alt={image.caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <p className="text-gray-700 text-center">{image.caption}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}