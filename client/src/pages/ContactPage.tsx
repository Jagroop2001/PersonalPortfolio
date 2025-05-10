import { useState, useEffect } from 'react';
import useActivePage from '@/hooks/useActivePage';

const ContactPage = () => {
  useActivePage('Contact');
  
  // Fade in animation effect
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(1), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ opacity, transition: 'opacity 300ms ease-in-out' }}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="inline-block pb-1 border-b-2 border-secondary">Schedule a Meeting</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-6 text-center">
              I'm available for discussions about product strategy, technical project management, 
              or potential collaboration opportunities. Please use my Calendly to schedule a 30-minute call at a time that works for you.
            </p>
            
            <div className="flex justify-center mb-8">
              <a 
                href="https://calendly.com/jagroop-product/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 mr-3" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                Schedule a 30-Minute Call
              </a>
            </div>
            
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://calendly.com/jagroop-product/30min?embed_domain=portfolio&embed_type=Inline" 
                width="100%" 
                height="700" 
                frameBorder="0" 
                title="Calendly Scheduling Page"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
