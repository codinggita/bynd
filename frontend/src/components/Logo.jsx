import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '', light = false }) => {
  const textColor = light ? 'text-white' : 'text-brand-deep';
  
  return (
    <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
      {/* "Beyond" Concept: An arrow physically breaking out of its boundaries */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 32 32" className="overflow-visible relative z-10">
          
          {/* Boundary ring with a top-right gap */}
          <path 
            d="M 23.07 8.93 A 10 10 0 1 0 26 16" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            className={light ? 'text-white/30' : 'text-brand-deep/30'} 
          />

          {/* Central Origin Node (The Silo Core) */}
          <circle cx="16" cy="16" r="2" fill="currentColor" className={light ? 'text-white' : 'text-brand-deep'} />
          
          {/* Trailing Warp Effect (Faded streak behind the main arrow) */}
          <motion.g
            stroke="#00E5FF" 
            strokeWidth="3" 
            strokeLinecap="round" 
            initial={{ x: -16, y: 16, opacity: 0 }}
            animate={{ 
              x: [-16, 0, 24], 
              y: [16, 0, -24], 
              opacity: [0, 0.4, 0] 
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeIn", times: [0, 0.3, 1], delay: 0.1 }}
          >
            <path d="M 12 20 L 22 10" />
          </motion.g>

          {/* Primary Animated Arrow Shooting Beyond the gap */}
          <motion.g
            stroke="#00E5FF" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0px 0px 6px rgba(0, 229, 255, 0.6))' }}
            initial={{ x: -16, y: 16, opacity: 0 }}
            animate={{ 
              x: [-16, 0, 24], 
              y: [16, 0, -24], 
              opacity: [0, 1, 0] 
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeIn", times: [0, 0.3, 1] }}
          >
            {/* Arrow Stem */}
            <path d="M 10 22 L 24 8" />
            {/* Arrow Head */}
            <path d="M 16 8 L 24 8 L 24 16" />
          </motion.g>
        </svg>
      </div>

      {/* Modern Typography */}
      <span className={`font-display text-3xl font-bold tracking-tight ${textColor} transition-colors -ml-1`}>
        BYND
      </span>
    </div>
  );
};

export default Logo;
