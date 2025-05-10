import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "@/pages/not-found";

function App() {
  const [location, setLocation] = useLocation();
  
  // Set default route to /about if we're at the root
  useEffect(() => {
    if (location === "/") {
      setLocation("/about");
    }
  }, [location, setLocation]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar with profile information */}
              <div className="lg:w-1/4">
                <Sidebar />
              </div>
              
              {/* Main content area */}
              <div className="lg:w-3/4">
                <Navigation />
                
                <div className="page-content">
                  <Switch>
                    <Route path="/about" component={AboutPage} />
                    <Route path="/resume" component={ResumePage} />
                    <Route path="/portfolio" component={PortfolioPage} />
                    <Route path="/blog" component={BlogPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-12 py-6 bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Jagroop Singh. All rights reserved.</p>
            </div>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
