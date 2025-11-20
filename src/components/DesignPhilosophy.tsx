import { motion } from 'framer-motion';
import { HeartIcon, UsersIcon, EyeIcon, TrendingUpIcon } from 'lucide-react';
export function DesignPhilosophy() {
  const values = [{
    title: 'User-centered',
    description: 'Every design decision starts with understanding user needs, behaviors, and pain points to create intuitive experiences.',
    icon: HeartIcon
  }, {
    title: 'Collaborative',
    description: 'Great design emerges from cross-functional teamwork, open communication, and shared ownership of outcomes.',
    icon: UsersIcon
  }, {
    title: 'Accessible',
    description: 'Inclusive design ensures everyone can use and benefit from products, regardless of their abilities or circumstances.',
    icon: EyeIcon
  }, {
    title: 'Scalable',
    description: 'Building flexible systems and patterns that grow with the product while maintaining consistency and efficiency.',
    icon: TrendingUpIcon
  }];
  return <section className="w-full py-16 px-6 md:px-12 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" initial={{
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Design Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Just as a great meal brings people together, great design creates
            meaningful connections between users and products. Both require
            understanding your audience, attention to detail, and a willingness
            to iterate until it's just right.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
          const IconComponent = value.icon;
          return <motion.div key={index} className="flex flex-col" initial={{
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
                <div className="flex items-center mb-4">
                  <IconComponent size={24} className="text-[#F4632F] mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}