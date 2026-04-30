import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Zap, 
  ShieldCheck, 
  Rocket, 
  ArrowRight, 
  Globe, 
  Activity,
  Layers,
  ChevronDown,
  Lock,
  ArrowLeft
} from 'lucide-react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFaq, setActiveFaq] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const plans = [
    {
      name: 'Starter Pulsar',
      id: 'pulsar',
      desc: 'High-frequency sync for scaling startups.',
      monthlyPrice: 59,
      annualPrice: 49,
      features: ['10 Active Integration Nodes', 'Real-time Conflict Detection', 'Bidirectional Handshake', 'Audit Log (7 Days)', 'Standard Latency'],
      icon: <Rocket size={24} />,
      color: '#94A3B8',
      cta: 'Initialize Node'
    },
    {
      name: 'Enterprise Reactor',
      id: 'reactor',
      desc: 'Unlimited throughput for the infinite data mesh.',
      monthlyPrice: 189,
      annualPrice: 149,
      popular: true,
      features: ['Unlimited Integration Nodes', 'AI-Powered Auto-Mapping', 'Custom Handshake Protocols', 'Infinite State History', 'SLA Guaranteed Uptime', 'Dedicated Success Node'],
      icon: <Zap size={24} />,
      color: '#12E7FF',
      cta: 'Authorize Deployment'
    },
    {
      name: 'Universal Supernova',
      id: 'supernova',
      desc: 'White-glove infrastructure for global commerce.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      features: ['Dedicated Proxy Tunnel', 'Quantum Parity SLA', 'On-Premise Node Deployment', 'Executive Architecture Support', 'Global Tax Logic Compliance'],
      icon: <ShieldCheck size={24} />,
      color: '#FFFFFF',
      cta: 'Contact Architect'
    }
  ];

  const faqs = [
    { q: "How does the 'Sovereign' sync protocol work?", a: "BYND uses a proprietary bidirectional node handshake that ensures record parity across all systems without relying on fragile webhooks. It's atomic, meaning data is either perfectly synced or safely rolled back." },
    { q: "What is a 'Sync Node'?", a: "A node is any single connection point (e.g., one Excel sheet, one CRM instance, one ERP database). You can chain nodes to create complex synchronization meshes." },
    { q: "Can we deploy BYND on our own infrastructure?", a: "Yes, Universal Supernova tier supports on-premise node deployment for maximum security and compliance control." }
  ];

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#12E7FF]/30 relative overflow-x-hidden pb-0"
    >
      {/* Kinetic Spotlight Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(18, 231, 255, 0.05), transparent 80%)`
        }}
      />

      {/* Grid Background */}
      <div className="fixed inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(#12E7FF 1px, transparent 1px), linear-gradient(90deg, #12E7FF 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />

      {/* Navigation */}
      <nav className="relative z-50 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center">
        <Link to="/" className="group">
          <Logo light={true} />
        </Link>
        <div className="flex items-center gap-10">
          <Link to="/auth" className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-[#12E7FF] transition-colors">Authorize</Link>
          <Link to="/auth" className="bg-white/[0.03] backdrop-blur-md border border-white/10 px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/[0.08] transition-all">Sign Up</Link>
        </div>
      </nav>

      {/* Header Section */}
      <section className="relative z-10 pt-20 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[#12E7FF]/10 border border-[#12E7FF]/20">
            <Activity size={14} className="text-[#12E7FF] animate-pulse" />
            <span className="text-[10px] font-black text-[#12E7FF] tracking-[0.4em] uppercase">Architecture Scalability</span>
          </div>
          <h1 className="text-6xl md:text-[90px] font-black tracking-[calc(-0.05em)] leading-[0.9] mb-8">
            Scale your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#12E7FF] to-white/40">Data Sovereignty</span>
          </h1>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Choose the deployment protocol that aligns with your business velocity. 
            Powered by the sentient BYND sync engine.
          </p>
        </motion.div>

        {/* Protocol Switch */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <span className={`text-xs font-black uppercase tracking-[0.2em] transition-all ${!isAnnual ? 'text-[#12E7FF]' : 'text-gray-600'}`}>Standard Epoch</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-24 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full relative p-1.5 transition-all hover:border-[#12E7FF]/40 group"
          >
            <motion.div 
              animate={{ x: isAnnual ? 52 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="w-8 h-8 bg-[#12E7FF] rounded-full shadow-[0_0_20px_#12E7FF] flex items-center justify-center"
            >
               <Layers size={14} className="text-[#030712]" />
            </motion.div>
          </button>
          <div className="flex items-center gap-4">
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-all ${isAnnual ? 'text-[#12E7FF]' : 'text-gray-600'}`}>Protocol Optima</span>
            <div className="bg-[#12E7FF]/10 text-[#12E7FF] text-[10px] font-black px-3 py-1.5 rounded-xl border border-[#12E7FF]/30 shadow-[0_0_15px_rgba(18,231,255,0.1)]">
              SAVE 28%
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grids */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
              className={`relative flex flex-col p-12 rounded-[56px] border backdrop-blur-2xl transition-all duration-700 group
                ${plan.popular 
                  ? 'bg-[#12E7FF]/[0.02] border-[#12E7FF]/40 shadow-[0_0_80px_rgba(18,231,255,0.08)]' 
                  : 'bg-white/[0.01] border-white/5 hover:border-white/20'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-10 right-10 bg-[#12E7FF] text-[#030712] text-[9px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-[0_0_20px_#12E7FF]">
                  Architect's Choice
                </div>
              )}

              <div className="mb-10">
                <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:border-[#12E7FF]/30 transition-all duration-500">
                  <div style={{ color: plan.color }}>{plan.icon}</div>
                </div>
                <h3 className="text-3xl font-black mb-3 tracking-tight">{plan.name}</h3>
                <p className="text-gray-500 text-sm font-bold leading-relaxed min-h-[48px]">{plan.desc}</p>
              </div>

              <div className="mb-12">
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black tracking-tighter">
                    {plan.monthlyPrice === 'Custom' ? 'Custom' : `$${isAnnual ? plan.annualPrice : plan.monthlyPrice}`}
                  </span>
                  {plan.monthlyPrice !== 'Custom' && (
                    <span className="text-gray-600 font-black uppercase text-xs tracking-[0.2em]">/ Epoch</span>
                  )}
                </div>
                {isAnnual && plan.monthlyPrice !== 'Custom' && (
                  <p className="text-[#12E7FF] text-[10px] font-black mt-3 tracking-widest uppercase italic">Optimized Billing Profile Enabled</p>
                )}
              </div>

              <div className="space-y-5 flex-grow mb-14">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4 group/item">
                    <div className="mt-1 w-2 h-2 rounded-full bg-current transition-all group-hover/item:scale-150" style={{ color: plan.color }} />
                    <span className="text-gray-400 text-sm font-bold group-hover/item:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/auth"
                className={`w-full py-5 rounded-[24px] font-black uppercase text-xs tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-3 group/btn
                  ${plan.popular 
                    ? 'bg-[#12E7FF] text-[#030712] hover:shadow-[0_20px_50px_rgba(18,231,255,0.4)]' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
              >
                {plan.cta}
                <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <Lock size={14} className="text-[#12E7FF]" />
                <span className="text-[10px] font-black uppercase tracking-widest">Handshake Protocol: Secured</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reimagined FAQ: Bento Panel */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
           <span className="text-xs font-black text-[#12E7FF] tracking-[0.6em] uppercase mb-4 block">Operation Parameters</span>
           <h2 className="text-5xl font-black tracking-tighter">Protocol <span className="text-gray-600">Clarity</span></h2>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              className="bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden transition-all hover:border-white/20"
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                className="w-full p-10 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">{faq.q}</span>
                <div className={`p-2 rounded-full transition-all duration-500 ${activeFaq === idx ? 'bg-[#12E7FF] text-[#030712] rotate-180' : 'bg-white/5 text-white'}`}>
                   <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-10 pb-10 text-gray-500 font-medium leading-relaxed max-w-2xl text-lg">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;
