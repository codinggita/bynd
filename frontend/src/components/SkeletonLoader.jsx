import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = () => {
  return (
    <div className="h-screen w-screen bg-[#030712] flex flex-col items-center justify-center p-12 overflow-hidden relative">
      {/* Background Aura */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#12E7FF]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-7xl grid grid-cols-12 gap-8 h-full">
        {/* Sidebar Skeleton */}
        <div className="col-span-2 hidden md:block border-r border-white/5 space-y-6 pt-12">
          <div className="w-32 h-8 bg-white/5 rounded-xl animate-pulse" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-full h-10 bg-white/[0.03] rounded-xl animate-pulse" />
            ))}
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="col-span-12 md:col-span-10 space-y-12 pt-12">
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <div className="w-64 h-10 bg-white/5 rounded-2xl animate-pulse" />
              <div className="w-40 h-4 bg-white/[0.02] rounded-full animate-pulse" />
            </div>
            <div className="w-12 h-12 bg-white/5 rounded-full animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-32 bg-white/[0.02] border border-white/5 rounded-[32px] animate-pulse" />
            ))}
          </div>

          <div className="w-full h-64 bg-white/[0.01] border border-white/5 rounded-[40px] animate-pulse" />
        </div>
      </div>

      {/* Floating Centered Loader */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
          className="w-16 h-16 border-2 border-[#12E7FF]/20 border-t-[#12E7FF] rounded-full shadow-[0_0_40px_rgba(18,231,255,0.1)]"
        />
      </div>
    </div>
  );
};

export default SkeletonLoader;
