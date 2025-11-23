import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function ScrollToTop() {
  const {
    pathname,
    hash
  } = useLocation();
  useEffect(() => {
    // Check if we should scroll to my-work section
    const shouldScrollToMyWork = sessionStorage.getItem('scrollToMyWork');
    
    if (shouldScrollToMyWork) {
      // Don't scroll to top, let the navigation handler do the scrolling
      return;
    }
    
    if (hash) {
      // If there's a hash, scroll to that element
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 73;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;
        requestAnimationFrame(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        });
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}