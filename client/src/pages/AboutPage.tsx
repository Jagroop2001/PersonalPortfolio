import { useState, useEffect } from 'react';
import { FaLightbulb, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ClientLogo from '@/components/ClientLogo';
import useActivePage from '@/hooks/useActivePage';

const AboutPage = () => {
  useActivePage('About');
  
  // Fade in animation effect
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(1), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ opacity, transition: 'opacity 300ms ease-in-out' }}>
      {/* About Me Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          <span className="inline-block pb-1 border-b-2 border-secondary">About Me</span>
        </h2>
        <p className="text-gray-600 mb-4">
          I'm a Technical Product Manager and Product Enthusiast from India, with over 4 years of experience in product management, software development, and AI. I enjoy turning complex problems into successful, user-focused products that drive business growth.
        </p>
        <p className="text-gray-600">
          My work involves leading cross-functional teams to build innovative products from concept to launch. I focus on creating products that are not only functional and user-friendly but also profitable and scalable. I've launched multiple MVPs end-to-end, generating significant revenue and user adoption. Through a combination of technical expertise and product strategy, I help bring ideas to life in the most efficient and impactful way.
        </p>
      </div>
      
      {/* What I'm Doing Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="inline-block pb-1 border-b-2 border-secondary">What I'm Doing</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            title="Product Strategy" 
            description="Developing comprehensive product strategies aligned with business goals, market needs, and user expectations." 
            icon={<FaLightbulb />} 
          />
          
          <ServiceCard 
            title="Data-Driven Decision Making" 
            description="Leveraging analytics and user insights to make informed product decisions and optimize for growth and engagement." 
            icon={<FaChartLine />} 
          />
          
          <ServiceCard 
            title="Cross-Functional Leadership" 
            description="Leading cross-functional teams of developers, designers, and stakeholders to deliver successful products." 
            icon={<FaUsers />} 
          />
          
          <ServiceCard 
            title="MVP Development & Launch" 
            description="Taking products from concept to market through efficient MVP development, validation, and rapid iteration." 
            icon={<FaRocket />} 
          />
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="inline-block pb-1 border-b-2 border-secondary">Testimonials</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard 
            name="Daniel Lewis" 
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
            text="Jagroop was professional and fast." 
          />
          
          <TestimonialCard 
            name="Jessica Miller" 
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
            text="If your looking for a product manager with full stack developer qualities, look no further he is amazing at what he does"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
