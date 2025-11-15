import React, { useState } from 'react';
import { MenuIcon, XIcon, MailIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="w-full bg-[#FFFAF5] py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-end">
          <span className="text-[#FF6B35] font-bold text-2xl">
            Danielle Flinn
          </span>
          <span className="hidden md:inline-block text-gray-500 ml-2">
            Product Designer & Chef
          </span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#recipes" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
            My work
          </a>
          <a href="#chef" className="text-gray-700 hover:text-[#FF6B35] transition-colors">
            About
          </a>
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
            <a href="mailto:julia.chen@example.com" className="text-gray-700 hover:text-[#FF6B35] transition-colors" aria-label="Email">
              <MailIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF6B35] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF6B35] transition-colors" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-[#FFFAF5] shadow-md py-4 px-6 flex flex-col space-y-4">
          <a href="#recipes" className="text-gray-700 hover:text-[#FF6B35] transition-colors" onClick={toggleMenu}>
            My work
          </a>
          <a href="#ingredients" className="text-gray-700 hover:text-[#FF6B35] transition-colors" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#chef" className="text-gray-700 hover:text-[#FF6B35] transition-colors" onClick={toggleMenu}>
            About
          </a>
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-300">
            <a href="mailto:julia.chen@example.com" className="text-gray-700 hover:text-[#FF6B35] transition-colors" aria-label="Email">
              <MailIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF6B35] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF6B35] transition-colors" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>}
    </nav>;
}