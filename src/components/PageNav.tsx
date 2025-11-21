import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface PageNavProps {
  sections: Array<{ id: string; label: string }>;
}

export function PageNav({ sections }: PageNavProps) {
  const [activeSection, setActiveSection] = useState('');
  const [topOffset, setTopOffset] = useState(73);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  useEffect(() => {
    // Calculate navbar height on mount
    const navbar = document.querySelector('nav');
    if (navbar) {
      setTopOffset(navbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Find active section based on scroll position
      // Account for navbar (sticky) + PageNav height
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 73;
      const pageNavHeight = 60; // Height of PageNav
      const offset = navbarHeight + pageNavHeight + 20; // Extra padding
      const scrollPosition = window.scrollY + offset;
      
      // Check if we're at the top (Overview section)
      const overviewElement = document.getElementById('overview');
      if (overviewElement && window.scrollY < overviewElement.offsetHeight + 100) {
        setActiveSection('overview');
        return;
      }
      
      // Check sections from bottom to top to find the first one we've scrolled past
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 73;
      const pageNavHeight = 60; // Height of PageNav when fixed
      const offset = navbarHeight + pageNavHeight + 20; // Extra padding
      
      // For overview, scroll to top with just navbar offset
      if (id === 'overview') {
        window.scrollTo({
          top: navbarHeight,
          behavior: 'smooth'
        });
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu after selection
      setIsMobileExpanded(false);
    }
  };

  const getActiveSectionLabel = () => {
    if (activeSection === 'overview' || !activeSection) {
      return 'Overview';
    }
    const active = sections.find(s => s.id === activeSection);
    return active ? active.label : sections[0]?.label || 'Overview';
  };

  return (
    <nav
      className="flex flex-row justify-between items-center w-full bg-white border-b border-gray-200 transition-all duration-300 mb-12 fixed z-40 shadow-sm"
      style={{ top: `${topOffset}px` }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
        {/* Mobile view - collapsed */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            className="w-full flex items-center justify-between py-4 text-sm font-medium text-gray-800"
          >
            <span className={activeSection === 'overview' || !activeSection ? 'text-[#C3471D]' : 'text-gray-600'}>
              {getActiveSectionLabel()}
            </span>
            <ChevronDown 
              className={`transition-transform ${isMobileExpanded ? 'rotate-180' : ''}`}
              size={20}
            />
          </button>
          
          {/* Mobile expanded view */}
          {isMobileExpanded && (
            <div className="flex flex-col pb-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left py-2 text-sm font-medium transition-colors border-l-4 pl-4 ${
                    activeSection === section.id || (section.id === 'overview' && !activeSection)
                      ? 'text-[#C3471D] border-[#C3471D]'
                      : 'text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-300'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Desktop view - horizontal */}
        <div className="hidden md:flex justify-evenly pt-5 pb-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex-1 whitespace-nowrap text-sm font-medium transition-colors pb-2 border-b-2 ${
                activeSection === section.id || (section.id === 'overview' && !activeSection)
                  ? 'text-[#C3471D] border-[#C3471D]'
                  : 'text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

