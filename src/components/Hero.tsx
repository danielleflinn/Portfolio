import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function Hero() {
  return <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
        <motion.div className="md:w-1/2 mb-8 md:mb-0" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Cooking Up <span className="text-[#FF6B35]">Delightful</span> User
            Experiences
          </h1>
          <p className="text-lg text-gray-600 mb-6">
           I’m a Senior Product Designer serving up design solutions that balance user needs, business goals, and engineering workflows. I bring system thinking, process maturity, and excellence to growing design teams (and the kitchen).
          </p>
          <button type="submit" className="bg-[#FF6B35] hover:bg-[#E85A2A] text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
            More about me
            <ArrowRight size={18} className="ml-2" />
          </button>{' '}
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <svg width="394" height="363" viewBox="0 0 394 363" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
            <path d="M51.3183 21.1254C60.2844 21.8613 66.9584 29.7264 66.2227 38.6926C65.9978 41.4327 65.1026 43.9562 63.7181 46.1219C72.365 47.1647 78.7108 54.8674 77.9927 63.6225C77.257 72.5886 69.3902 79.2612 60.4241 78.5257C56.3246 78.1891 52.7072 76.359 50.0557 73.6178L37.806 88.4322C36.9557 89.4605 35.3561 89.3829 34.5919 88.289C32.4863 85.275 30.4748 82.6119 28.4808 80.2263C27.8565 79.4793 27.8373 78.3929 28.4525 77.6384L42.2837 60.6758C42.5995 60.2885 42.5415 59.7184 42.1542 59.4026C41.7668 59.0867 41.1968 59.1447 40.8809 59.532L27.6314 75.7813C26.8598 76.7276 25.4294 76.7654 24.5766 75.8916C21.7252 72.9695 18.8062 70.514 15.5958 68.3162C14.6059 67.6386 14.3786 66.2576 15.1367 65.3279L28.2563 49.238C28.5722 48.8506 28.5142 48.2806 28.1268 47.9647C27.7395 47.6489 27.1694 47.7069 26.8536 48.0942L13.2441 64.7849C12.6178 65.553 11.525 65.7441 10.6613 65.2581C7.8126 63.655 4.70641 62.1513 1.22624 60.6407C-0.00730146 60.1052 -0.397399 58.5359 0.4596 57.4996L14.0296 41.0905C11.2041 37.8854 9.63177 33.583 10.0088 28.9882C10.7445 20.0219 18.61 13.3506 27.5762 14.0863C33.7173 14.5904 38.7817 18.4384 41.1273 23.6944C44.0437 21.8008 47.5847 20.8193 51.3183 21.1254Z" fill="#FEE8DC" />
            <ellipse cx="213.055" cy="314.438" rx="137.294" ry="46.4034" transform="rotate(0.851386 213.055 314.438)" fill="#FEE8DC" />
            <ellipse cx="212.587" cy="311" rx="30.5" ry="5" fill="#FDC8AB" />
            <path d="M339.849 24.7237C272.708 -15.8331 213.701 27.6443 192.694 57.3083C191.512 58.9776 191.909 61.2713 193.506 62.5485C252.555 109.747 293.547 133.821 377.351 168.657C379.372 169.497 381.721 168.581 382.52 166.543C395.428 133.604 406.704 65.1081 339.849 24.7237Z" fill="#FEE8DC" />
            <path d="M221.627 69.4903C260.089 16.5802 313.185 20.103 333.729 29.3025C269.589 -7.72892 221.817 30.9762 204.369 56.9295C203.505 58.2148 203.829 59.9349 205.063 60.8718L217.303 70.172C218.663 71.2049 220.623 70.8714 221.627 69.4903Z" fill="#FFFAF5" />
            <path d="M345.813 9.35015C346.429 8.40733 347.674 8.10996 348.649 8.67291C349.624 9.23585 349.989 10.4628 349.48 11.4671L342.089 26.0561L336.874 23.0452L345.813 9.35015Z" fill="#FEE8DC" />
            <path d="M183.087 204C183.087 199.582 186.669 196 191.087 196H231.087C235.505 196 239.087 199.582 239.087 204V297H183.087V204Z" fill="#FFFAF5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M231.087 191C237.715 191 243.087 196.373 243.087 203V298C243.087 304.627 237.715 310 231.087 310H191.087C184.46 310 179.087 304.627 179.087 298V203C179.087 196.373 184.46 191 191.087 191H231.087ZM191.087 196C186.669 196 183.087 199.582 183.087 204V297H239.087V204C239.087 199.582 235.505 196 231.087 196H229.087V198C229.087 199.657 227.744 201 226.087 201H196.087C194.43 201 193.087 199.657 193.087 198V196H191.087Z" fill="#FF6B36" />
            <circle cx="211.087" cy="303" r="3" fill="#FFFAF5" />
            <path d="M189.087 257H234.087" stroke="black" strokeWidth="0.5" />
            <path d="M189.087 251H234.087" stroke="black" strokeWidth="0.5" />
            <path d="M189.087 263H234.087" stroke="black" strokeWidth="0.5" />
            <path d="M189.087 269H234.087" stroke="black" strokeWidth="0.5" />
            <path d="M189.087 275H234.087" stroke="black" strokeWidth="0.5" />
            <rect x="189.337" y="283.25" width="44.5" height="7.5" rx="3.75" stroke="#FF6B36" strokeWidth="0.5" />
            <rect x="189.087" y="212" width="45" height="27" rx="1" fill="#FEE8DC" />
          </svg>
        </motion.div>
      </div>
    </section>;
}