import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Add event listeners to all clickable elements
    const clickables = document.querySelectorAll('a, button, input, select, textarea');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [window.location.href]); // Re-bind on route change roughly

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null; // Don't render on touch devices
  }

  return (
    <>
      <style>
        {`
          body { cursor: none; }
          a, button, input, select, textarea { cursor: none; }
        `}
      </style>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {/* Main Dot */}
        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-100 ease-out
            ${isHovering ? 'w-4 h-4' : 'w-2 h-2'}
          `}
        />
        
        {/* Glowing Ring */}
        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary transition-all duration-300 ease-out
            ${isHovering ? 'w-12 h-12 opacity-80 border-2' : 'w-8 h-8 opacity-40'}
            ${!isVisible ? 'opacity-0' : ''}
          `}
          style={{
             boxShadow: isHovering ? '0 0 20px rgba(139,92,246,0.6)' : 'none'
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;