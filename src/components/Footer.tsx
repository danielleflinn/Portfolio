import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="w-full py-8 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-[#F45F2A] font-bold text-xl">
              Danielle Flinn
            </span>
            <p className="text-gray-600 text-sm mt-1">
              Senior Product Designer
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <nav className="flex space-x-6 mb-4 md:mb-0 md:mr-8">
              <Link to="/" className="text-gray-600 hover:text-[#F45F2A] text-sm">
                My work
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-[#F45F2A] text-sm">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mb-4 md:mb-0 md:mr-8">
              <a href="mailto:julia.chen@example.com" className="text-gray-600 hover:text-[#F45F2A] transition-colors" aria-label="Email">
                <MailIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F45F2A] transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F45F2A] transition-colors" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
            </div>
            <div className="text-gray-500 text-sm flex items-center">
              <span>© {currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}