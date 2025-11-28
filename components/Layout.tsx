import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingAgent from './FloatingAgent';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white font-sans selection:bg-primary selection:text-white relative">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 right-0 h-1 bg-gradient-to-l from-primary to-blue-500 z-[100]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingAgent />
    </div>
  );
};

export default Layout;