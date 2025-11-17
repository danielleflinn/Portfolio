import React from 'react';
import { motion } from 'framer-motion';
export function OutsideWork() {
  const images = [{
    url: "/smith-rock.jpg",
    caption: 'Exploring Smith Rock State Park'
  }, {
    url: "/wedding.jpg",
    caption: "My boyfriend, now fiancé, and I at our friend's wedding"
  }, {
    url: "/scones.jpg",
    caption: 'Homemade gluten free blueberry almond scones'
  }, {
    url: "/dancing.jpg",
    caption: 'Social dancing with friends'
  }, {
    url: '/about/woods.png',
    caption: 'Finding inspiration at Redwood National Park'
  }, {
    url: "/ramen.jpg",
    caption: 'A second attempt at making gluten free ramen'
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
          <p className="text-lg text-gray-600 mb-4 max-w-4xl">
            When I'm not working, you'll find me experimenting with new recipes in my kitchen, exploring a new local restaurant, hiking, or meeting new friends at a social dance. 
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl">
          Wherever I go, I'm curious to understand how the world works and am on the lookout for fantastic design inspiration.
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
                <img src={image.url} alt={image.caption} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-700 text-center">{image.caption}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}