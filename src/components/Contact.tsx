import { motion } from 'framer-motion';
import { MailIcon } from 'lucide-react';

export function Contact() {
  return <section id="contact" className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-6" initial={{
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Let's Cook Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have an opportunity I can help with? Just want to chat about design
            or cooking? Reach out, I love connecting with others!
          </p>
        </motion.div>
        <motion.div className="flex justify-center" initial={{
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
          <a href="mailto:contact@dflinn.com" className="bg-[#F4632F] hover:bg-[#D94F23] text-black font-semibold tracking-wide px-8 py-4 rounded-lg transition-colors flex items-center justify-center">
            <MailIcon size={20} className="mr-2" />
            Email me
          </a>
        </motion.div>
      </div>
    </section>;
}