import { useState, useEffect } from 'react';
import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/portfolioData';
import useActivePage from '@/hooks/useActivePage';
import React from "react";

const BlogPage = () => {
  useActivePage('Blog');
  
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
          <span className="inline-block pb-1 border-b-2 border-secondary">Blog</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              commentCount={post.commentCount}
              image={post.image}
              path={post.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
