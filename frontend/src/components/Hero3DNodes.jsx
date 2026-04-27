import React from 'react';
import { motion } from 'framer-motion';
import { FileXls, Users, Receipt } from '@phosphor-icons/react';
import Spline from '@splinetool/react-spline';
import Logo from './Logo';

const Hero3DNodes = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background WebGL Spline layer - Keeps pristine view */}
      <div className="absolute inset-0 z-0">
        <div className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
      </div>

      {/* Structured Structured Network - 500x500 Expanded Canvas for Breathing Space */}
      <div className="relative z-20 w-[500px] h-[500px] pointer-events-none">
        
        {/* Central Hub (BYND Engine) exactly at (250, 250) */}
        <div 
          className="absolute flex items-center justify-center rounded-3xl z-30"
          style={{ left: '250px', top: '250px', transform: 'translate(-50%, -50%)' }}
        >
          <div className="bg-color-brand-deep/95 backdrop-blur-md border border-color-brand-accent shadow-[0_0_25px_rgba(0,229,255,0.4)] px-6 py-4 rounded-xl flex items-center gap-2">
            <Logo light={true} className="scale-75 origin-center" />
          </div>
        </div>

        {/* Node 1: EXCEL (Top Left) at (80, 100) */}
        <motion.div 
          className="absolute w-[120px] pb-3 bg-color-brand-deep/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl flex flex-col items-center justify-center gap-1 overflow-hidden z-20"
          style={{ left: '40px', top: '40px', transform: 'translate(-50%, -50%)' }}
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-1 bg-[#217346]" />
          <div className="w-8 h-8 mt-2 rounded-full bg-[#217346]/20 flex items-center justify-center">
             <FileXls size={18} weight="fill" className="text-[#217346]" />
          </div>
          <span className="text-[10px] font-bold text-white tracking-widest mt-1">EXCEL</span>
        </motion.div>

        {/* Node 2: INVOICE (Top Right) at (420, 100) -> 500 - 80 = 420 for exact equal margin */}
        <motion.div 
          className="absolute w-[120px] pb-3 bg-color-brand-deep/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl flex flex-col items-center justify-center gap-1 overflow-hidden z-20"
          style={{ left: '340px', top: '40px', transform: 'translate(-50%, -50%)' }}
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-full h-1 bg-indigo-500" />
          <div className="w-8 h-8 mt-2 rounded-full bg-indigo-500/20 flex items-center justify-center">
             <Receipt size={18} weight="fill" className="text-indigo-400" />
          </div>
          <span className="text-[10px] font-bold text-white tracking-widest mt-1">INVOICE</span>
        </motion.div>

        {/* Node 3: CRM (Bottom Center) at (250, 400) */}
        <motion.div 
          className="absolute w-[120px] pb-3 bg-color-brand-deep/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl flex flex-col items-center justify-center gap-1 overflow-hidden z-20"
          style={{ left: '200px', top: '360px', transform: 'translate(-50%, -50%)' }}
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-full h-1 bg-[#f26c24]" />
          <div className="w-8 h-8 mt-2 rounded-full bg-[#f26c24]/20 flex items-center justify-center">
             <Users size={18} weight="fill" className="text-[#f26c24]" />
          </div>
          <span className="text-[10px] font-bold text-white tracking-widest mt-1">CRM</span>
        </motion.div>

        {/* Master SVG SVG Pipelines - Carefully plotted so arrows never overlap node cards */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
          
          <defs>
            {/* Auto-start-reverse ensures the start marker flips 180 degrees backwards seamlessly. Slim professional arrow */}
            <marker id="bidirectional-arrow" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto-start-reverse">
              <polygon points="1 2, 6 4, 1 6" fill="#00E5FF" />
            </marker>
          </defs>

          {/* Path 1: Excel to CORE. 
              Excel center (80,100), bounds [20-140, 50-150]. Buffer point: (145, 155)
              BYND center (250,250), bounds [180-320, 220-280]. Buffer point: (185, 210) 
          */}
           <path 
            d="M 145 155 L 185 210" 
            stroke="#00E5FF" 
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#bidirectional-arrow)"
            markerStart="url(#bidirectional-arrow)"
            style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,229,255,0.4))' }}
          />

          {/* Path 2: Invoice to CORE. 
              Invoice center (420,100), bounds [360-480, 50-150]. Buffer point: (355, 155)
              BYND bounds [180-320, 220-280]. Buffer point: (315, 210) 
          */}
          <path 
            d="M 355 155 L 315 210" 
            stroke="#00E5FF" 
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#bidirectional-arrow)"
            markerStart="url(#bidirectional-arrow)"
            style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,229,255,0.4))' }}
          />

          {/* Path 3: CRM to CORE. 
              CRM center (250,400), bounds [190-310, 350-450]. Buffer point: (250, 345)
              BYND bounds [180-320, 220-280]. Buffer point: (250, 285) 
          */}
          <path 
            d="M 250 345 L 250 285" 
            stroke="#00E5FF" 
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#bidirectional-arrow)"
            markerStart="url(#bidirectional-arrow)"
            style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,229,255,0.4))' }}
          />
        </svg>

      </div>
    </div>
  );
}

export default Hero3DNodes;
