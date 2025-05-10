import { useLocation, Link } from 'wouter';
import { useEffect } from 'react';
import React from "react";
 
const Navigation = () => {
  const [location] = useLocation();
  
  // This fixes the warning about nested <a> tags
  const NavLink = ({ href, isActive, children }: { href: string, isActive: boolean, children: React.ReactNode }) => (
    <Link href={href}>
      <span className={`nav-link text-gray-800 hover:text-primary transition-colors cursor-pointer ${isActive ? 'active' : ''}`}>
        {children}
      </span>
    </Link>
  );
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
        <NavLink href="/about" isActive={location === '/about'}>
          About
        </NavLink>
        <NavLink href="/resume" isActive={location === '/resume'}>
          Resume
        </NavLink>
        <NavLink href="/portfolio" isActive={location === '/portfolio'}>
          Portfolio
        </NavLink>
        <NavLink href="/blog" isActive={location === '/blog'}>
          Blog
        </NavLink>
        <NavLink href="/contact" isActive={location === '/contact'}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
