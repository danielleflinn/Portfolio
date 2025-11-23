import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon, MailIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  const handleMyWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Store intent to scroll to my-work
      sessionStorage.setItem('scrollToMyWork', 'true');
      navigate('/');
      // Use multiple requestAnimationFrame calls to ensure DOM is ready
      const scrollToMyWork = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const element = document.getElementById('my-work');
            if (element) {
              const navbar = document.querySelector('nav');
              const navbarHeight = navbar ? navbar.offsetHeight : 73;
              const elementTop = element.offsetTop;
              const offsetPosition = elementTop - navbarHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
              sessionStorage.removeItem('scrollToMyWork');
            } else {
              // Element not ready yet, try again
              setTimeout(scrollToMyWork, 50);
            }
          });
        });
      };
      // Start scrolling after navigation has had time to process
      setTimeout(scrollToMyWork, 200);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById('my-work');
      if (element) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 73;
        const elementTop = element.offsetTop;
        const offsetPosition = elementTop - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };
  return <nav className="w-full bg-[#FFFAF5] py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-end">
          <Link to="/" className="text-[#F4632F] font-bold text-2xl" onClick={(e) => handleLinkClick(e, '/')}>
            Danielle Flinn
          </Link>
          <span className="hidden md:inline-block text-gray-500 ml-2">
            Senior Product Designer
          </span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-[#F4632F] transition-colors" onClick={handleMyWorkClick}>
            My Work
          </a>
          <Link to="/about" className="text-gray-700 hover:text-[#F4632F] transition-colors" onClick={(e) => handleLinkClick(e, '/about')}>
            About
          </Link>
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
            <a href="mailto:contact@dflinn.com" className="text-gray-700 hover:text-[#F4632F] transition-colors" aria-label="Email">
              <MailIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/danielle-flinn" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F4632F] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com/danielleflinn" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F4632F] transition-colors" aria-label="GitHub">
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
          <a href="#" className="text-gray-700 hover:text-[#F4632F] transition-colors" onClick={handleMyWorkClick}>
            My work
          </a>
          <Link to="/about" className="text-gray-700 hover:text-[#F4632F] transition-colors" onClick={(e) => handleLinkClick(e, '/about')}>
            About
          </Link>
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-300">
            <a href="mailto:julia.chen@example.com" className="text-gray-700 hover:text-[#F4632F] transition-colors" aria-label="Email">
              <MailIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F4632F] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F4632F] transition-colors" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>}
    </nav>;
}