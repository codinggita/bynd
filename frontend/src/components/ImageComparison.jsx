import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, WarningCircle, CheckCircle, ArrowsCounterClockwise } from '@phosphor-icons/react';

const ImageComparison = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section className="py-32 px-6 bg-[#0A1929] overflow-hidden relative">
      {/* Background architectural grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-transparent to-[#0A1929] z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Theoretical Context */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-8">
                <Target size={14} className="text-[#00E5FF]" />
                <span className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-[0.3em]">Protocol Visualization</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-[1.1]">
                X-Ray of <br />
                <span className="text-[#00E5FF]">Optimization</span>
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <WarningCircle size={20} className="text-[#EF4444]" />
                    <h3 className="font-bold text-sm uppercase tracking-widest text-white/40">The Entropy</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">Traditional systems rely on fragmented logic, leading to high-latency data loops and structural fragility.</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-[#00E5FF]/5 border border-[#00E5FF]/20 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle size={20} className="text-[#00E5FF]" />
                    <h3 className="font-bold text-sm uppercase tracking-widest text-[#00E5FF]">The Order</h3>
                  </div>
                  <p className="text-sm text-[#00E5FF]/60 leading-relaxed">BYND collapses complexity into a single, high-speed geometric protocol that scales infinitely.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Interactive Portal */}
          <div className="lg:col-span-8 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] cursor-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              ref={containerRef}
            >
              {/* Layer 1: Chaos (Base) */}
              <div className="absolute inset-0 bg-[#0A1929]">
                <img 
                  src="/chaos_wireframe.png" 
                  alt="Infrastructure Chaos"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>

              {/* Layer 2: Order ( पोर्टल/Lens Reveal) */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                style={{ 
                  clipPath: `circle(120px at ${mousePos.x}% ${mousePos.y}%)`,
                  transition: 'clip-path 0.1s ease-out'
                }}
              >
                <div className="absolute inset-0 bg-[#0A1929]">
                  <img 
                    src="/order_wireframe.png" 
                    alt="Infrastructure Order"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle texture inside lens */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                </div>
              </div>

              {/* Custom Cursor / Lens Border */}
              <div 
                className="absolute z-30 pointer-events-none"
                style={{ 
                  left: `${mousePos.x}%`, 
                  top: `${mousePos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'left 0.1s ease-out, top 0.1s ease-out'
                }}
              >
                <div className="w-[242px] h-[242px] rounded-full border-2 border-[#00E5FF] flex items-center justify-center relative shadow-[0_0_40px_rgba(0,229,255,0.3)]">
                   {/* Scanning crosshair */}
                   <div className="absolute w-8 h-[2px] bg-[#00E5FF] left-0"></div>
                   <div className="absolute w-8 h-[2px] bg-[#00E5FF] right-0"></div>
                   <div className="absolute w-[2px] h-8 bg-[#00E5FF] top-0"></div>
                   <div className="absolute w-[2px] h-8 bg-[#00E5FF] bottom-0"></div>
                   
                   <AnimatePresence>
                     {isHovering && (
                       <motion.div 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         className="absolute -bottom-10 whitespace-nowrap"
                       >
                         <span className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-[0.4em] bg-[#0A1929]/80 px-2 py-1 rounded backdrop-blur-md">BYND Resolution active</span>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              </div>

              {/* Legend Badges */}
              <div className="absolute inset-0 p-8 pointer-events-none z-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div className="flex gap-2">
                      <div className="w-4 h-4 bg-[#EF4444] rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Entropy State: 98%</span>
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Architecture V2.1</div>
                      <div className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest">Protocol: Active</div>
                   </div>
                </div>
                <div className="flex justify-between items-end">
                   <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Legacy Stack: Siloed</div>
                   <div className="flex items-center gap-3">
                      <ArrowsCounterClockwise size={16} className="text-[#00E5FF] animate-spin-slow" />
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Real-time Optimization</span>
                   </div>
                </div>
              </div>
            </motion.div>
            
            {/* Ambient Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00E5FF]/10 filter blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#EF4444]/5 filter blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default ImageComparison;
