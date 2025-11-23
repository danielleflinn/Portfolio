import { Link } from 'react-router-dom';
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
            Cooking Up <span className="text-[#F4632F]">Delightful</span> User
            Experiences
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I'm a Senior Product Designer serving up design solutions that
            balance user needs, business goals, and engineering workflows. I
            bring system thinking, process maturity, and excellence to growing
            design teams (and the kitchen).
          </p>
          <Link to="/about" className="border-2 border-[#F45F2A] text-[#C3471D] hover:bg-[#FFF0E8] font-semibold tracking-wide px-6 py-3 rounded-lg transition-colors flex items-center justify-center inline-flex">
            More about me
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center mb-8 md:mb-0" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <svg width="403" height="424" viewBox="0 0 403 424" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
            <path d="M45.8545 79.8064C54.3657 76.8923 63.6296 81.429 66.5439 89.9402C67.4345 92.5413 67.624 95.2121 67.2221 97.7509C75.5636 95.2459 84.4618 99.765 87.3076 108.076C90.2219 116.587 85.6832 125.85 77.1721 128.765C73.2805 130.097 69.233 129.868 65.7061 128.417L60.4093 146.895C60.0416 148.178 58.5446 148.747 57.4065 148.051C54.2707 146.131 51.3614 144.496 48.5794 143.108C47.7082 142.673 47.2558 141.685 47.5176 140.747L53.404 119.667C53.5384 119.186 53.2571 118.686 52.7757 118.552C52.2943 118.417 51.7951 118.699 51.6607 119.18L46.0219 139.374C45.6935 140.55 44.3978 141.157 43.2666 140.698C39.484 139.161 35.8263 138.079 32.0046 137.35C30.8262 137.125 30.0653 135.95 30.3879 134.795L35.9714 114.799C36.1058 114.318 35.8245 113.819 35.3431 113.684C34.8617 113.55 34.3625 113.831 34.2281 114.312L28.4361 135.055C28.1696 136.009 27.2446 136.622 26.2586 136.522C23.0064 136.193 19.558 136.058 15.7641 136.067C14.4194 136.07 13.4338 134.788 13.8044 133.495L19.673 113.027C15.8009 111.22 12.638 107.907 11.1446 103.545C8.23033 95.0337 12.7683 85.772 21.2796 82.8577C27.1091 80.8619 33.2903 82.3614 37.5434 86.2393C39.4582 83.3368 42.3104 81.0201 45.8545 79.8064Z" fill="#FEE8DC" />
            <ellipse cx="210.968" cy="375.438" rx="137.294" ry="46.4034" transform="rotate(0.851386 210.968 375.438)" fill="#FEE8DC" />
            <ellipse cx="210.5" cy="372" rx="30.5" ry="5" fill="#FDC8AB" />
            <path d="M306.762 119.724C239.622 79.1669 180.614 122.644 159.607 152.308C158.425 153.978 158.822 156.271 160.42 157.548C219.468 204.747 260.461 228.821 344.264 263.657C346.285 264.497 348.635 263.581 349.433 261.543C362.341 228.604 373.617 160.108 306.762 119.724Z" fill="#FDC8AB" />
            <path d="M188.54 164.49C227.001 111.58 280.097 115.103 300.641 124.302C236.501 87.2711 188.729 125.976 171.281 151.929C170.417 153.215 170.742 154.935 171.975 155.872L184.216 165.172C185.576 166.205 187.536 165.871 188.54 164.49Z" fill="#FFFAF5" />
            <path d="M312.726 104.35C313.342 103.407 314.587 103.11 315.562 103.673C316.537 104.236 316.902 105.463 316.393 106.467L309.002 121.056L303.787 118.045L312.726 104.35Z" fill="#FDC8AB" />
            <path d="M181 265C181 260.582 184.582 257 189 257H229C233.418 257 237 260.582 237 265V358H181V265Z" fill="#FFFAF5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M229 252C235.627 252 241 257.373 241 264V359C241 365.627 235.627 371 229 371H189C182.373 371 177 365.627 177 359V264C177 257.373 182.373 252 189 252H229ZM189 257C184.582 257 181 260.582 181 265V358H237V265C237 260.582 233.418 257 229 257H227V259C227 260.657 225.657 262 224 262H194C192.343 262 191 260.657 191 259V257H189Z" fill="#F4632F" />
            <circle cx="209" cy="364" r="3" fill="#FFFAF5" />
            <path d="M187 318H232" stroke="#4B5563" strokeWidth="0.25" />
            <path d="M187 312H232" stroke="#4B5563" strokeWidth="0.25" />
            <path d="M187 324H232" stroke="#4B5563" strokeWidth="0.25" />
            <path d="M187 330H232" stroke="#4B5563" strokeWidth="0.25" />
            <path d="M187 336H232" stroke="#4B5563" strokeWidth="0.25" />
            <rect x="187.25" y="344.25" width="44.5" height="7.5" rx="3.75" stroke="#FF6B36" strokeWidth="0.5" />
            <rect x="187" y="273" width="45" height="27" rx="1" fill="#FEE8DC" />
            <path d="M363.52 84.7198C366.32 87.1198 377.5 100.167 382 105.5C379.166 112.167 369.52 120.72 369.52 120.72C369.52 120.72 367.52 117.72 361.52 118.72C358.52 119.22 353.52 122.72 339.52 123.22C325.52 123.72 314.02 115.5 314.02 112C314.02 107.076 328.03 114.082 334.02 113.72C342.603 113.201 349.422 100.366 339.52 91.2198C330.396 82.7929 317.5 91.2198 315.02 102C313.962 106.597 307.653 108.7 307.02 100C306 86 331.974 77.2098 329.52 75.7198C315.52 67.2198 306.52 57.2198 307.02 53.2198C307.42 50.0198 310.019 50.2197 314.02 53.2198C318.02 56.2198 319.52 60.7198 336.52 69.2198C358.3 80.1102 360.02 81.7198 363.52 84.7198Z" fill="#FEE8DC" />
            <path d="M355.5 78.5C349.98 73.7802 347.52 59.7199 346.52 51.7199C345.948 47.1457 342.758 45.7199 340.758 49.7199C339.158 52.9199 341.666 64.1667 342.5 68C340 66 334.02 53.2198 331.02 48.2198C328.02 43.2199 324.226 44.6966 324.52 48.2199C325.02 54.2199 329.52 61.8865 332.02 66.2198L355.5 78.5Z" fill="#FEE8DC" />
            <path d="M366.02 125.72L385.02 101.22L402.02 115.22L378.52 144.72L366.02 125.72Z" fill="#FDC8AB" />
          </svg>
        </motion.div>
      </div>
    </section>;
}