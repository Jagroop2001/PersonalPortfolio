import { useState, useEffect } from 'react';
import PortfolioItem from '@/components/PortfolioItem';
import { portfolioItems } from '@/data/portfolioData';
import useActivePage from '@/hooks/useActivePage';
import React from "react";

const categories = ['All', 'Web Design', 'Mobile Apps', 'UI/UX', 'Branding'];

const PortfolioPage = () => {
  useActivePage('Portfolio');
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  // Fade in animation effect
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(1), 50);
    return () => clearTimeout(timeout);
  }, []);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div style={{ opacity, transition: 'opacity 300ms ease-in-out' }}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="inline-block pb-1 border-b-2 border-secondary">Portfolio</span>
        </h2>
        
        {/* Portfolio Categories */}
        {/* <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button 
              key={category}
              className={`px-4 py-2 rounded transition-colors ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-50 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div> */}
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
