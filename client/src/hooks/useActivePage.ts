import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const useActivePage = (title: string) => {
  const [location] = useLocation();
  
  useEffect(() => {
    // Update page title when component mounts
    document.title = `${title} | Jagroop Singh - Product Enthusiast`;
    
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [title, location]);

  return location;
};

export default useActivePage;
