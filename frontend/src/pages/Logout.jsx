import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';

import { useAuth } from '../hooks/useAuth';

const Logout = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  useEffect(() => {
    // Perform logout logic via Redux
    const terminate = () => {
      handleLogout();
      
      // Delay redirection to show the cinematic termination
      setTimeout(() => {
        navigate('/auth');
      }, 2500);
    };

    terminate();
  }, [navigate]);

  return (
    <div className="h-screen w-screen bg-[#030712] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <SEO title="Terminating Connection" description="Safely closing your sovereign data sync session." />

      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#12E7FF]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center space-y-8">
        {/* Animated Icon Container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-[#12E7FF]/20 rounded-full blur-xl animate-pulse" />
          <div className="relative bg-[#030712] border border-[#12E7FF]/20 w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(18,231,255,0.1)]">
            <ShieldAlert size={40} className="text-[#12E7FF]" />
          </div>
          
          {/* Circular Loader Orbit */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-10px] border-t-2 border-r-2 border-[#12E7FF]/40 rounded-full"
          />
        </motion.div>

        <div className="space-y-3">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-black text-white tracking-tighter uppercase"
          >
            Terminating Connection
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-gray-500 font-bold text-xs tracking-widest uppercase"
          >
            <Loader2 size={14} className="animate-spin" />
            Safely closing sovereign data nodes...
          </motion.div>
        </div>

        {/* Progress Bar Concept */}
        <div className="w-64 h-1 bg-white/5 rounded-full mx-auto overflow-hidden relative">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="h-full bg-[#12E7FF] shadow-[0_0_10px_#12E7FF]"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]"
        >
          Encryption keys flushed | Cache cleared
        </motion.p>
      </div>

      {/* Decorative Technical Elements */}
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-gray-800 space-y-1">
        <p>&gt; DISCONNECT_SEQ_START</p>
        <p>&gt; FLUSHING_MEMORY_BUFFERS...</p>
        <p>&gt; SIG_TERM_EMITTED</p>
      </div>
    </div>
  );
};

export default Logout;
