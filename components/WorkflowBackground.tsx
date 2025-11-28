import React from 'react';

const WorkflowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-40">
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b3b3b" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b3b3b" stopOpacity="0.2" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Grid Pattern */}
        <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />

        {/* Workflow Nodes & Connections Group - Scaled and Centered */}
        <g transform="translate(100, 100) scale(1.2)">
            
            {/* Connection Paths */}
            {/* Path 1: Trigger -> Process */}
            <path d="M 150 150 C 250 150, 250 250, 350 250" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            {/* Path 2: Trigger -> AI */}
            <path d="M 150 150 C 250 150, 250 50, 350 50" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            {/* Path 3: Process -> DB */}
            <path d="M 450 250 C 550 250, 550 250, 650 250" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
             {/* Path 4: AI -> Telegram */}
            <path d="M 450 50 C 550 50, 550 150, 650 150" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />

            {/* Moving Data Packets (Animations) */}
            <circle r="4" fill="#fff" filter="url(#glow)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 150 150 C 250 150, 250 250, 350 250" />
            </circle>
            <circle r="4" fill="#a855f7" filter="url(#glow)">
                <animateMotion dur="4s" begin="0.5s" repeatCount="indefinite" path="M 150 150 C 250 150, 250 50, 350 50" />
            </circle>
             <circle r="4" fill="#22c55e" filter="url(#glow)">
                <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 450 250 C 550 250, 550 250, 650 250" />
            </circle>
             <circle r="4" fill="#3b82f6" filter="url(#glow)">
                <animateMotion dur="4s" begin="2.5s" repeatCount="indefinite" path="M 450 50 C 550 50, 550 150, 650 150" />
            </circle>

            {/* Nodes (Rectangles) */}
            
            {/* Trigger Node */}
            <g transform="translate(50, 110)">
                <rect width="100" height="80" rx="10" fill="#1e1e24" stroke="#eab308" strokeWidth="2" />
                <circle cx="50" cy="30" r="15" fill="#eab308" opacity="0.2" />
                <rect x="35" y="55" width="30" height="4" rx="2" fill="#555" />
            </g>

            {/* AI Node */}
            <g transform="translate(350, 10)">
                <rect width="100" height="80" rx="10" fill="#1e1e24" stroke="#a855f7" strokeWidth="2" />
                <circle cx="50" cy="30" r="15" fill="#a855f7" opacity="0.2" />
                <rect x="25" y="55" width="50" height="4" rx="2" fill="#555" />
            </g>

            {/* Logic Node */}
            <g transform="translate(350, 210)">
                <rect width="100" height="80" rx="10" fill="#1e1e24" stroke="#3b82f6" strokeWidth="2" />
                <rect x="40" y="20" width="20" height="20" fill="#3b82f6" opacity="0.5" />
                <rect x="35" y="55" width="30" height="4" rx="2" fill="#555" />
            </g>

            {/* DB Node */}
            <g transform="translate(650, 210)">
                <rect width="100" height="80" rx="10" fill="#1e1e24" stroke="#22c55e" strokeWidth="2" />
                <path d="M30 30 L70 30 L70 50 L30 50 Z" fill="none" stroke="#22c55e" />
                <rect x="35" y="60" width="30" height="4" rx="2" fill="#555" />
            </g>

            {/* Telegram Node */}
            <g transform="translate(650, 110)">
                <rect width="100" height="80" rx="10" fill="#1e1e24" stroke="#0ea5e9" strokeWidth="2" />
                <circle cx="50" cy="40" r="15" fill="#0ea5e9" opacity="0.2" />
            </g>

        </g>
      </svg>
    </div>
  );
};

export default WorkflowBackground;