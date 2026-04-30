import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldAlert, 
  Terminal, 
  RefreshCcw,
  Cpu,
  Unplug
} from 'lucide-react';

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-[#030712] text-white font-sans selection:bg-[#12E7FF]/30 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      
      {/* Background Anomalies */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#12E7FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(#12E7FF 1px, transparent 1px), linear-gradient(90deg, #12E7FF 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center justify-center">
        
        {/* Kinetic Icon */}
        <motion.div
          animate={{ 
            rotate: [0, -10, 10, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 md:w-20 md:h-20 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(239,68,68,0.1)]"
        >
          <Unplug size={32} className="text-red-400" />
        </motion.div>

        {/* 404 Text with Glitch Aura */}
        <div className="relative mb-2">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[100px] md:text-[140px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10"
          >
            404
          </motion.h1>
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 text-[100px] md:text-[140px] font-black tracking-tighter leading-none text-[#12E7FF]/20 translate-x-1"
          >
            404
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-2">
             <ShieldAlert size={12} className="text-red-400" />
             <span className="text-[9px] font-black text-red-400 tracking-[0.2em] uppercase">Node Severed</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Route Not Found</h2>
          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-sm mx-auto">
            The requested data coordinate does not exist within the BYND synchronization ecosystem.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 pt-6">
            <Link 
              to="/" 
              className="w-full md:w-auto px-8 py-3 bg-[#12E7FF] text-[#030712] font-black rounded-xl hover:shadow-[0_0_30px_rgba(18,231,255,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95 text-xs uppercase tracking-widest"
            >
              <ArrowLeft size={16} />
              SAFETY HUB
            </Link>
            <button 
              onClick={() => window.location.reload()}
              className="w-full md:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
            >
              <RefreshCcw size={16} />
              RETRY
            </button>
          </div>
        </motion.div>

        {/* Terminal Diagnostic */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-4 bg-black/40 backdrop-blur-xl border border-white/5 rounded-xl text-left font-mono w-full max-w-[280px] mx-auto"
        >
          <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
            <Terminal size={12} className="text-gray-500" />
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-sans font-bold">Diagnostics</span>
          </div>
          <div className="space-y-1 text-[10px]">
            <p className="text-red-400/80">ERROR: NODE_MISSING</p>
            <p className="text-gray-500 text-[9px]">ID: BYND-404-XYZ</p>
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#12E7FF] inline-block align-middle ml-1"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Watermark */}
      <div className="absolute bottom-6 flex items-center gap-2 opacity-10">
         <Cpu size={14} className="text-gray-500" />
         <span className="text-[10px] font-black tracking-widest uppercase">BYND Autonomous Sync</span>
      </div>

    </div>
  );
};

export default NotFound;
