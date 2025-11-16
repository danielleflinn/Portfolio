import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };
  return <section id="kitchen" className="w-full py-16 px-6 md:px-12 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Let's Cook Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have an opportunity I can help with? Just want to chat about design
            or cooking? Reach out, I love connecting with others!
          </p>
        </motion.div>
        <motion.div className="max-w-2xl mx-auto bg-[#FFFAF5] p-8 rounded-xl" initial={{
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Your Name
              </label>
              <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F45F2A] focus:border-transparent" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Your Email
              </label>
              <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F45F2A] focus:border-transparent" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Your Message
              </label>
              <textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F45F2A] focus:border-transparent" required></textarea>
            </div>
            <button type="submit" className="bg-[#F45F2A] hover:bg-[#D94F23] text-black font-semibold tracking-wide px-6 py-3 rounded-lg transition-colors flex items-center justify-center w-full">
              <SendIcon size={18} className="mr-2" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>;
}