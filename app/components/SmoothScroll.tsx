import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Ensure smooth scroll is applied for anchor links when the page loads
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')!.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  }, []);

  return null;
};

export default SmoothScroll;
