import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, FileXls, Users, CurrencyDollar, CheckCircle, ArrowsLeftRight,
  Database, Link, PlayCircle, Funnel, ShieldCheck, Globe, 
  ClockCounterClockwise, MapTrifold, ListMagnifyingGlass, Check, CaretDown, Plus, Minus,
  PlugsConnected, TreeStructure, ArrowsClockwise, Cloud, Buildings, Hexagon,
  SquaresFour, HardDrives, ShareNetwork, WindowsLogo, Sun, Hash,
  ShoppingCart, CreditCard, Headset, Bug, EnvelopeSimple, Snowflake, Lightning, Target
} from '@phosphor-icons/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CanvasDots from '../components/CanvasDots';
import Hero3DNodes from '../components/Hero3DNodes';
import ComparisonSection from '../components/ComparisonSection';
import ImageComparison from '../components/ImageComparison';
import Lenis from 'lenis';

const Landing = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleGlobalMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const features = [
    { title: "Bidirectional Sync", desc: "Keeping CRM and ERP in perfect harmony.", icon: <ArrowsLeftRight size={32} /> },
    { title: "Conflict Shield", desc: "Detecting and resolving version conflicts automatically.", icon: <ShieldCheck size={32} /> },
    { title: "Global Tax Logic", desc: "Translating regional tax codes across systems.", icon: <Globe size={32} /> },
    { title: "Instant Rollback", desc: "Reverting to any previous state with a single click.", icon: <ClockCounterClockwise size={32} /> },
    { title: "Custom Mapping", desc: "Matching fields to unique business requirements.", icon: <MapTrifold size={32} /> },
    { title: "Audit Logs", desc: "Detailed tracking of every payload and sync status.", icon: <ListMagnifyingGlass size={32} /> }
  ];

  const faqs = [
    { question: "How long does integration take?", answer: "Most out-of-the-box integrations take less than 15 minutes to configure. Custom mappings may take slightly longer depending on complexity." },
    { question: "Do you support custom field mapping?", answer: "Yes, our AI-powered mapper intelligently suggests connections, but you have full granular control and can map to unique, deeply nested custom fields." },
    { question: "How does Conflict Shield handle sync conflicts?", answer: "Conflict Shield detects differing timestamps across systems and uses your predefined resolution rules (e.g. ERP wins, CRM wins) to resolve safely." },
    { question: "Are there record sync limits?", answer: "On the Starter plan there are limits, but the Pro and Enterprise plans offer unlimited record sync, allowing your data workflow to scale infinitely." }
  ];

  return (
    <div className="min-h-screen bg-color-bg-page selection:bg-color-brand-accent/30 font-sans text-color-text-primary">
      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        {/* Absolute Background Canvas */}
        <CanvasDots />

        {/* 1. Hero Section */}
        <section className="relative pt-[120px] pb-20 px-6 min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column - 60% */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Beta Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-color-brand-accent/10 border border-color-brand-accent/20 mb-8">
                <div className="w-2 h-2 rounded-full bg-color-brand-accent animate-pulse" />
                <span className="text-xs font-semibold text-color-brand-accent uppercase tracking-wider">Now in public beta</span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-[64px] text-color-text-primary leading-[1.1] mb-6">
                Stop wrestling with <br className="hidden md:block" />
                <span className="text-color-brand-deep">spreadsheets.</span>
              </h1>
              
              <p className="text-xl text-color-text-secondary mb-10 max-w-[460px] leading-relaxed">
                BYND syncs your Excel, CRM & invoicing tools in real time. No code, no copy-paste, just accurate data, always.
              </p>
              
              <div className="flex flex-col w-full max-w-md gap-3 mb-10">
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); window.location.href = '/auth'; }}>
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="flex-grow px-5 py-4 rounded-lg border border-color-border bg-color-surface text-color-text-primary placeholder-color-text-secondary focus:outline-none focus:ring-2 focus:ring-color-brand-accent/50 transition-all font-medium"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-color-brand-accent text-color-brand-deep px-6 py-4 rounded-lg font-bold hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:-translate-y-0.5 transition-all whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    Start free trial <ArrowRight size={18} weight="bold" />
                  </button>
                </form>
                <div className="text-xs text-color-text-secondary font-medium ml-1">
                  Free 14-day trial &middot; No credit card
                </div>
              </div>

              {/* Trusted Logos */}
              <div className="mt-8 pt-8 border-t border-color-border/60 w-full">
                <p className="text-xs font-semibold text-color-text-secondary uppercase tracking-widest mb-6">
                  Trusted by finance teams at
                </p>
                <div className="flex flex-wrap items-center gap-8 font-display font-bold text-xl">
                  {[
                    { name: 'AcmeCorp', icon: <Buildings weight="duotone" className="shrink-0" />, color: '#EF4444' }, // Red
                    { name: 'Globex', icon: <Globe weight="duotone" className="shrink-0" />, color: '#3B82F6' }, // Blue
                    { name: 'Soffient', icon: <Hexagon weight="duotone" className="shrink-0" />, color: '#8B5CF6' }, // Purple
                    { name: 'Initech', icon: <TreeStructure weight="duotone" className="shrink-0" />, color: '#F59E0B' } // Orange
                  ].map((company, index) => (
                    <motion.span 
                      key={company.name}
                      style={{ color: company.color }}
                      whileHover={{ 
                        scale: 1.1, 
                        textShadow: `0px 10px 25px ${company.color}88` 
                      }}
                      transition={{ duration: 0.15 }} // Quick snappy animation
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      {company.icon}
                      {company.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - 40% (3D Sync Node Interface) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full aspect-square md:aspect-auto md:h-[600px] hidden md:flex items-center justify-center bg-color-brand-deep/95 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
               <Hero3DNodes />
            </motion.div>
          </div>
        </section>

        {/* 2. Logo Marquee - Exotic Dual-Layer Hub */}
        <section className="py-32 border-y border-white/5 bg-[#030712] overflow-hidden relative group/marquee-sec">
          {/* Exotic Mesh Underlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#00E5FF 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-20">
            <div className="mb-24 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4"
              >
                <div className="px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center gap-2">
                   <div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" />
                   <span className="text-[#00E5FF] font-black text-[10px] uppercase tracking-[0.3em]">Grid Status: Operational</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
                  150+ <span className="text-white/40">Trusted Data Partners</span>
                </h3>
              </motion.div>
            </div>
            
            <div className="space-y-12 relative">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes marqueeL { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
                @keyframes marqueeR { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
                .marquee-l { animation: marqueeL 60s linear infinite; }
                .marquee-r { animation: marqueeR 80s linear infinite; }
                .group\\/marquee-sec:hover .marquee-l, 
                .group\\/marquee-sec:hover .marquee-r { animation-play-state: paused; }
              `}} />

              {/* Row 1: Primary Handshake Nodes */}
              <div className="w-full relative flex overflow-hidden mask-fade-x">
                <div className="flex items-center gap-8 min-w-max pr-8 marquee-l">
                  {[
                    { name: 'Salesforce', icon: <Cloud weight="fill" />, color: '#00A1E0' },
                    { name: 'NetSuite', icon: <SquaresFour weight="fill" />, color: '#2A4B8F' },
                    { name: 'SAP', icon: <Database weight="fill" />, color: '#008FD3' },
                    { name: 'Oracle', icon: <HardDrives weight="fill" />, color: '#F80000' },
                    { name: 'HubSpot', icon: <ShareNetwork weight="fill" />, color: '#FF7A59' },
                    { name: 'Dynamics', icon: <WindowsLogo weight="fill" />, color: '#0078D4' },
                    { name: 'Workday', icon: <Sun weight="fill" />, color: '#007CB0' },
                    { name: 'Slack', icon: <Hash weight="fill" />, color: '#E01E5A' }
                  ].concat([
                    { name: 'Salesforce', icon: <Cloud weight="fill" />, color: '#00A1E0' },
                    { name: 'NetSuite', icon: <SquaresFour weight="fill" />, color: '#2A4B8F' },
                    { name: 'SAP', icon: <Database weight="fill" />, color: '#008FD3' },
                    { name: 'Oracle', icon: <HardDrives weight="fill" />, color: '#F80000' },
                    { name: 'HubSpot', icon: <ShareNetwork weight="fill" />, color: '#FF7A59' },
                    { name: 'Dynamics', icon: <WindowsLogo weight="fill" />, color: '#0078D4' },
                    { name: 'Workday', icon: <Sun weight="fill" />, color: '#007CB0' },
                    { name: 'Slack', icon: <Hash weight="fill" />, color: '#E01E5A' }
                  ]).map((partner, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="group/card relative flex items-center gap-6 bg-white/5 border border-white/10 px-10 py-6 rounded-[32px] transition-all duration-500 cursor-pointer backdrop-blur-xl hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/5"
                    >
                      {/* Atmospheric Brand Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-20 transition-opacity blur-2xl rounded-full" style={{ background: partner.color }} />
                      
                      <div className="text-3xl transition-transform duration-500 group-hover/card:scale-110" style={{ color: partner.color }}>
                        {partner.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-white tracking-tight leading-none mb-1">
                          {partner.name}
                        </span>
                        {/* Real-time Ticker */}
                        <div className="flex items-center gap-1.5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                           <div className="w-1 h-1 bg-green-500 rounded-full animate-ping" />
                           <span className="text-[9px] font-black uppercase text-[#00E5FF] tracking-tighter">Live Sync: 14.8kb/s</span>
                        </div>
                        <span className="text-[10px] uppercase font-black text-white/20 tracking-widest group-hover/card:hidden">Protocol Active</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Row 2: Secondary Mesh Nodes (Drift Direction) */}
              <div className="w-full relative flex overflow-hidden mask-fade-x opacity-40">
                <div className="flex items-center gap-8 min-w-max pr-8 marquee-r">
                  {[
                    { name: 'Shopify', icon: <ShoppingCart weight="fill" />, color: '#95BF47' },
                    { name: 'Stripe', icon: <CreditCard weight="fill" />, color: '#635BFF' },
                    { name: 'Zendesk', icon: <Headset weight="fill" />, color: '#03363D' },
                    { name: 'Jira', icon: <Bug weight="fill" />, color: '#0052CC' },
                    { name: 'Marketo', icon: <EnvelopeSimple weight="fill" />, color: '#5C4897' },
                    { name: 'Snowflake', icon: <Snowflake weight="fill" />, color: '#29B5E8' },
                    { name: 'BigQuery', icon: <Lightning weight="fill" />, color: '#4285F4' },
                    { name: 'Zoro', icon: <Target weight="fill" />, color: '#EFC41A' }
                  ].concat([
                    { name: 'Shopify', icon: <ShoppingCart weight="fill" />, color: '#95BF47' },
                    { name: 'Stripe', icon: <CreditCard weight="fill" />, color: '#635BFF' },
                    { name: 'Zendesk', icon: <Headset weight="fill" />, color: '#03363D' },
                    { name: 'Jira', icon: <Bug weight="fill" />, color: '#0052CC' },
                    { name: 'Marketo', icon: <EnvelopeSimple weight="fill" />, color: '#5C4897' },
                    { name: 'Snowflake', icon: <Snowflake weight="fill" />, color: '#29B5E8' },
                    { name: 'BigQuery', icon: <Lightning weight="fill" />, color: '#4285F4' },
                    { name: 'Zoro', icon: <Target weight="fill" />, color: '#EFC41A' }
                  ]).map((partner, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 bg-white/5 border border-white/5 px-8 py-4 rounded-2xl grayscale opacity-50"
                    >
                      <div className="text-xl" style={{ color: partner.color }}>{partner.icon}</div>
                      <span className="font-bold text-white/30 text-sm whitespace-nowrap">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
        </section>

        {/* 3. The Path to Synchrony (Harder Thought - Cinematic Pipeline) */}
        <section className="py-40 px-6 bg-[#030712] relative overflow-hidden group/steps">
          {/* Diagnostic Grid Underlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-40">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                   <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#00E5FF]" />
                   <span className="text-[#00E5FF] font-black text-xs uppercase tracking-[0.6em]">The Deployment Loop</span>
                   <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#00E5FF]" />
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-none mb-8">
                  Three Phases of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#0A1929]">Atomic Synchrony</span>
                </h2>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              
              {/* The Liquid Connector (Desktop Only) */}
              <div className="hidden md:block absolute top-[120px] left-[15%] right-[15%] h-[2px] bg-white/5 z-0">
                 <motion.div 
                   className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] via-white to-[#00E5FF] shadow-[0_0_20px_#00E5FF]"
                   animate={{ x: ['-100%', '100%'] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 />
              </div>

              {/* Step 1: Autonomous Discovery */}
              <motion.div 
                whileHover={{ y: -20 }}
                className="flex flex-col items-center group relative z-10"
              >
                <div className="w-24 h-24 bg-[#0A1929] border border-[#00E5FF]/30 rounded-3xl mb-12 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,229,255,0.1)] group-hover:border-[#00E5FF] group-hover:shadow-[0_0_60px_rgba(0,229,255,0.4)] transition-all duration-500">
                   <div className="absolute -top-4 -left-4 text-6xl font-black text-white/5 group-hover:text-[#00E5FF]/20 transition-colors">01</div>
                   <PlugsConnected size={48} className="text-[#00E5FF] relative z-10 group-hover:scale-110 transition-transform" weight="bold" />
                   {/* Orbiting Ring */}
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-[-8px] border border-dashed border-[#00E5FF]/20 rounded-full" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight text-center">Autonomous <br/>Discovery</h3>
                <p className="text-slate-400 text-lg leading-relaxed text-center font-medium max-w-[280px]">
                  Instant protocol handshake across your entire stack. Zero manual API keys required.
                </p>
                <div className="mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="h-1 w-20 bg-[#00E5FF] rounded-full shadow-[0_0_15px_#00E5FF]" />
                </div>
              </motion.div>

              {/* Step 2: Geometric Refraction */}
              <motion.div 
                whileHover={{ y: -20 }}
                className="flex flex-col items-center group relative z-10"
              >
                <div className="w-24 h-24 bg-[#0A1929] border border-white/10 rounded-3xl mb-12 flex items-center justify-center relative shadow-[0_0_50px_rgba(255,255,255,0.05)] group-hover:border-white group-hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-500">
                   <div className="absolute -top-4 -left-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">02</div>
                   <TreeStructure size={48} className="text-white relative z-10 group-hover:scale-110 transition-transform" weight="bold" />
                   {/* Pulse Ring */}
                   <motion.div animate={{ scale: [1, 1.4], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-white rounded-3xl" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight text-center">Geometric <br/>Refraction</h3>
                <p className="text-slate-400 text-lg leading-relaxed text-center font-medium max-w-[280px]">
                  Interactive field matching with algorithmic conflict prediction. Define once, deploy everywhere.
                </p>
                <div className="mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="h-1 w-20 bg-white rounded-full shadow-[0_0_15px_white]" />
                </div>
              </motion.div>

              {/* Step 3: Global Synchrony */}
              <motion.div 
                whileHover={{ y: -20 }}
                className="flex flex-col items-center group relative z-10"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#00E5FF] to-[#0A1929] rounded-3xl mb-12 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,229,255,0.2)] group-hover:scale-110 transition-all duration-500">
                   <div className="absolute -top-4 -left-4 text-6xl font-black text-[#0A1929]/20">03</div>
                   <ArrowsClockwise size={48} className="text-white relative z-10 group-hover:rotate-180 transition-transform duration-1000" weight="bold" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight text-center">Global <br/>Synchrony</h3>
                <p className="text-slate-400 text-lg leading-relaxed text-center font-medium max-w-[280px]">
                  Sub-atomic record parity in real-time. The SENTIENT mesh takes control of your commerce flow.
                </p>
                <div className="mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="h-1 w-20 bg-[#00E5FF] rounded-full shadow-[0_0_15px_#00E5FF]" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 4. Comparison Section */}
        <ComparisonSection />
        <ImageComparison />

        {/* 5. Enterprise Features (Exotic Tier - "Think Even Harder" Hyper-Bento) */}
        <section 
          className="py-40 px-6 bg-[#030712] relative overflow-hidden group/section"
          onMouseMove={handleGlobalMouseMove}
          style={{
            '--mouse-x': `${mousePos.x}px`,
            '--mouse-y': `${mousePos.y}px`
          }}
        >
          {/* Exotic Grain Layer */}
          <div className="absolute inset-0 grain pointer-events-none z-0" />
          
          {/* Dynamic Background: Mouse-Reactive Spotlight */}
          <div className="absolute inset-0 spotlight-bg pointer-events-none transition-opacity duration-700 opacity-0 group-hover/section:opacity-100 z-1" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header: Cinematic Reveal */}
            <div className="text-center mb-40">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                   <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00E5FF]/50" />
                   <span className="text-[#00E5FF] font-black text-xs uppercase tracking-[0.5em]">Synchronous Sovereignty</span>
                   <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#00E5FF]/50" />
                </div>
                <h2 className="text-6xl md:text-[100px] font-display font-bold text-white mb-12 tracking-tighter leading-[0.85]">
                  Engineered for <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">The Infinite.</span>
                </h2>
                <p className="text-slate-500 text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                  Beyond standard sync. We’ve built a sentient data mesh that scales with the velocity of global commerce.
                </p>
              </motion.div>
            </div>

            {/* Hyper-Bento Grid with Extreme Kinetic Fidelity */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-auto md:h-[1200px] perspective-[2000px]">
              
              {/* PRIMARY: The Hyper-Sync Core (7x5) */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-7 md:row-span-5 bg-[#0A1929]/40 border border-white/10 rounded-[60px] p-16 relative overflow-hidden backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.4)] group/card flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-20 flex flex-col h-full">
                  <div className="flex items-center gap-6 mb-12">
                     <div className="w-20 h-20 bg-white text-[#0A1929] rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.3)] group-hover/card:scale-110 transition-transform duration-500">
                        <ArrowsLeftRight size={44} weight="bold" />
                     </div>
                     <div>
                       <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">Liquid Pipeline</h3>
                       <p className="text-[#00E5FF] text-sm font-black uppercase tracking-[0.2em]">Sub-atomic Bidirectional Sync</p>
                     </div>
                  </div>

                  <p className="text-slate-300 text-2xl leading-relaxed max-w-md mb-16 font-medium">
                    Our proprietary "Liquid" protocol moves data records like light through a fiber—zero friction, zero latency, total parity.
                  </p>

                  {/* Visual: The Sentient Mesh v2 */}
                  <div className="mt-auto h-96 w-full bg-black/60 rounded-[45px] border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 opacity-20">
                       <div className="absolute h-full w-full bg-[radial-gradient(#00E5FF_1.5px,transparent:1.5px)] [background-size:24px_24px]" />
                    </div>
                    
                    <div className="flex items-center gap-16 relative z-10 w-full px-12">
                      <motion.div animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="w-36 h-36 border-2 border-dashed border-[#00E5FF]/40 rounded-full flex items-center justify-center bg-[#00E5FF]/5">
                        <Database size={56} className="text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]" />
                      </motion.div>
                      
                      <div className="flex-1 flex flex-col gap-5">
                         {[1,2,3].map(i => (
                           <div key={i} className="h-1.5 w-full bg-white/5 rounded-full relative overflow-hidden">
                              <motion.div 
                                animate={{ left: ['-100%', '200%'] }} 
                                transition={{ 
                                  duration: 2.5, 
                                  repeat: Infinity, 
                                  delay: i * 0.4,
                                  ease: "easeInOut" 
                                }} 
                                className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_30px_#00E5FF]" 
                              />
                           </div>
                         ))}
                      </div>

                      <motion.div animate={{ rotate: -360, scale: [1, 1.1, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="w-36 h-36 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center bg-white/5">
                        <Cloud size={56} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SECONDARY: Conflict Shield (5x6) */}
              <motion.div 
                whileHover={{ rotateX: 3, rotateY: -3, scale: 1.01 }}
                className="md:col-span-5 md:row-span-6 bg-[#00E5FF] rounded-[60px] p-16 flex flex-col relative overflow-hidden group/shield"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                <div className="relative z-20 h-full flex flex-col">
                  <div className="w-20 h-20 bg-[#0A1929] text-[#00E5FF] rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover/shield:scale-110 transition-transform">
                    <ShieldCheck size={44} weight="fill" />
                  </div>
                  <h3 className="text-5xl font-black text-[#0A1929] mb-8 leading-tight">Conflict <br/>Refraction.</h3>
                  <p className="text-[#0A1929]/80 text-xl font-bold leading-relaxed mb-12">
                    Advanced timestamps are no longer enough. We use heuristic refraction to predict and prevent data collisions.
                  </p>

                  {/* Visual: Holographic Wavefront */}
                  <div className="mt-auto relative h-72 bg-[#0A1929] rounded-[40px] overflow-hidden border-4 border-white/20">
                     <div className="absolute inset-0 flex items-center justify-center">
                        {[1,2,3,4,5].map(i => (
                          <motion.div 
                            key={i}
                            animate={{ 
                              scale: [1, 2], 
                              opacity: [0.6, 0],
                              borderWidth: [4, 0] 
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
                            className="absolute w-40 h-40 border border-[#00E5FF] rounded-full"
                          />
                        ))}
                        <div className="relative z-10 w-12 h-12 bg-[#00E5FF] rounded-full shadow-[0_0_50px_#00E5FF] flex items-center justify-center">
                           <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>

              {/* TERTIARY: Packet Monitor (5x5) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-5 md:row-span-5 bg-white/5 border border-white/10 rounded-[60px] p-12 backdrop-blur-md flex flex-col group/terminal relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05),transparent)] pointer-events-none" />
                <div className="flex items-center gap-5 mb-10">
                   <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center border border-white/10 shadow-inner group-hover/terminal:border-[#00E5FF]/50 transition-colors">
                      <ListMagnifyingGlass size={32} weight="bold" />
                   </div>
                   <h4 className="text-2xl font-bold text-white tracking-tight leading-none">Atomic Observability</h4>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed mb-12">Total visibility into every packet, delta, and state change across your entire ecosystem.</p>
                
                {/* Visual: Enhanced CRT Packet Feed */}
                <div className="mt-auto h-full bg-[#050505] rounded-[35px] border border-white/10 p-8 font-mono text-xs text-[#00E5FF]/80 relative overflow-hidden group-hover/terminal:border-[#00E5FF]/40 transition-all shadow-2xl">
                   <div className="scanline" />
                   <div className="absolute inset-0 bg-[radial-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_100%),linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] [background-size:100%_2px,3px_100%] pointer-events-none" />
                   
                   <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10 relative z-10">
                      <span className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"/> LIVE_STREAM</span>
                      <span className="text-white/30 italic tracking-tighter">NODE_ID: 83A_THINK_HARDER</span>
                   </div>
                   
                   <div className="space-y-6 relative z-10">
                      <div className="flex gap-5 items-center">
                         <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="h-full bg-[#00E5FF] w-1/3 shadow-[0_0_15px_#00E5FF]" />
                         </div>
                         <span className="text-white font-bold tracking-widest">128.4ms</span>
                      </div>
                      
                      <div className="flex gap-5 items-center opacity-70">
                         <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div animate={{ x: ['200%', '-100%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} className="h-full bg-white/40 w-1/4" />
                         </div>
                         <span className="text-white/60 font-bold uppercase text-[10px]">ACK_SYNC</span>
                      </div>

                      <div className="space-y-3 pt-6 border-t border-white/5">
                         <div className="flex items-center gap-2">
                           <span className="text-[#00E5FF]/40">{'>'}</span>
                           <p className="text-[10px] text-white/50 truncate tracking-tight">0x83A... <span className="text-[#00E5FF]">CALC_HASH_SUCCESS</span></p>
                         </div>
                         <div className="flex items-center gap-2">
                           <span className="text-[#00E5FF]/40">{'>'}</span>
                           <p className="text-[10px] text-white/50 truncate tracking-tight">0x9FF... <span className="text-white/30">MIRROR_NODE_PROXIED</span></p>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* QUATERNARY: Global Presence & Rollback (Dynamic Matrix) */}
              <div className="md:col-span-7 md:row-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                 {/* Globe Card */}
                 <motion.div whileHover={{ scale: 1.05, y: -5 }} className="bg-white border border-slate-200 rounded-[48px] p-10 flex flex-col justify-between group">
                    <div className="w-16 h-16 bg-[#0A1929] text-[#00E5FF] rounded-2xl flex items-center justify-center mb-8">
                       <Globe size={36} weight="duotone" className="group-hover:rotate-45 transition-transform" />
                    </div>
                    <div>
                       <h4 className="text-3xl font-bold text-[#0A1929] mb-4 tracking-tighter">Global Tax Logic</h4>
                       <p className="text-slate-500 font-medium">Regional compliance baked into the core protocol.</p>
                    </div>
                 </motion.div>

                 {/* Rollback Card */}
                 <motion.div whileHover={{ scale: 1.05, y: -5 }} className="bg-white/5 border border-white/10 rounded-[48px] p-10 flex flex-col justify-between group backdrop-blur-sm">
                    <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20">
                       <ClockCounterClockwise size={36} weight="bold" />
                    </div>
                    <div>
                       <h4 className="text-3xl font-bold text-white mb-4 tracking-tighter">Instant Rollback</h4>
                       <p className="text-slate-500 font-medium whitespace-nowrap overflow-hidden">Undo errors with sub-second atomic reversions.</p>
                    </div>
                 </motion.div>

                 {/* Mapping Card (Bottom Wide) */}
                 <motion.div whileHover={{ x: 15 }} className="md:col-span-2 bg-white/5 border border-white/10 rounded-[48px] p-10 flex items-center gap-10 group backdrop-blur-md">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#00E5FF] to-[#0A1929] rounded-[32px] flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')] opacity-10" />
                       <MapTrifold size={48} weight="bold" className="relative z-10" />
                    </div>
                    <div className="flex-1">
                       <h4 className="text-4xl font-black text-white mb-2 leading-none">Universal Field Harmony</h4>
                       <p className="text-slate-400 text-lg font-medium">Intuitive 1:1 mapping for the most complex business architectures.</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#00E5FF] group-hover:text-[#0A1929] transition-all">
                       <ArrowRight size={24} weight="bold" />
                    </div>
                 </motion.div>

              </div>

            </div>
          </div>
        </section>

        {/* 6. Network Pulse & Social Validation */}
        <section className="py-32 px-6 bg-[#030712] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#00E5FF 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
              {[
                { label: 'CONNECTED ORGS', value: '3.2K+', desc: 'High-availability nodes active' },
                { label: 'DAILY SYNC VOLUME', value: '14M+', desc: 'Bilateral records processed' },
                { label: 'SYSTEM UPTIME SLA', value: '99.99%', desc: 'Atomic parity guaranteed' },
                { label: 'MANUAL CODE SAVED', value: '∞', desc: 'True sentient automation' }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                   <div className="text-[#00E5FF] font-black text-[10px] uppercase tracking-widest mb-4 opacity-60">{stat.label}</div>
                   <div className="text-5xl font-display font-bold text-white mb-2 tracking-tighter group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                   <div className="text-slate-500 text-sm font-medium">{stat.desc}</div>
                   <div className="absolute -bottom-2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {[
                 {
                   quote: "BYND eliminated our data translation friction. We process $40M in cross-border commerce with zero manual conflict correction.",
                   author: "Dominic Vane",
                   role: "Head of Infrastructure, GlobalFlow"
                 },
                 {
                   quote: "The visual mapping logic is the most advanced I've seen in the iPaaS space. It's not just a tool; it's a sentient data engineer.",
                   author: "Evelyn Thorne",
                   role: "VP Engineering, ArcaSync"
                 }
               ].map((t, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 p-12 rounded-[48px] backdrop-blur-md relative overflow-hidden group"
                 >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00E5FF]/10 to-transparent opacity-50" />
                    <p className="text-2xl font-medium text-slate-300 mb-10 leading-relaxed relative z-10 italic">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-gradient-to-br from-[#00E5FF] to-[#0A1929] rounded-full shadow-[0_0_15px_#00E5FF50]" />
                       <div>
                          <p className="font-bold text-white text-lg">{t.author}</p>
                          <p className="text-[#00E5FF] text-xs font-black uppercase tracking-widest">{t.role}</p>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. Plan Architecture - Exotic Tier Pricing */}
        <section className="py-40 px-6 bg-[#030712] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <span className="text-[#00E5FF] font-black text-xs uppercase tracking-[0.6em] mb-4 block">Scalability Engine</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter">Plan <span className="text-white/40">Architecture</span></h2>
              
              {/* Specialized Billing Toggle */}
              <div className="flex items-center justify-center gap-6 mt-12">
                <span className={`text-sm font-black uppercase tracking-widest transition-opacity ${!annualBilling ? 'text-[#00E5FF]' : 'text-slate-600'}`}>Standard</span>
                <button 
                  onClick={() => setAnnualBilling(!annualBilling)}
                  className="w-20 h-10 bg-white/5 border border-white/20 rounded-full relative p-1.5 transition-all hover:border-[#00E5FF]/50"
                >
                  <motion.div 
                    className="w-6 h-6 bg-[#00E5FF] rounded-full shadow-[0_0_15px_#00E5FF]"
                    animate={{ x: annualBilling ? 40 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </button>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-black uppercase tracking-widest transition-opacity ${annualBilling ? 'text-[#00E5FF]' : 'text-slate-600'}`}>Protocol Optima</span>
                  <span className="bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] font-black px-2 py-1 rounded border border-[#00E5FF]/20">SAVE 28%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Starter Pulsar', 
                  price: annualBilling ? '490' : '59', 
                  desc: 'High-frequency sync for scaling startups.',
                  features: ['10 Active Integration Nodes', 'Real-time Conflict Detection', 'Bidirectional Handshake', 'Audit Log (7 Days)'],
                  color: '#94A3B8'
                },
                { 
                  name: 'Enterprise Reactor', 
                  price: annualBilling ? '1,490' : '189', 
                  desc: 'Unlimited throughput for the infinite data mesh.',
                  features: ['Unlimited Integration Nodes', 'AI-Powered Auto-Mapping', 'Custom Handshake Protocols', 'Infinite State History'],
                  color: '#00E5FF',
                  popular: true
                },
                { 
                  name: 'Universal Supernova', 
                  price: 'Custom', 
                  desc: 'White-glove infrastructure for global commerce.',
                  features: ['Dedicated Proxy Tunnel', 'Quantum Parity SLA', 'On-Premise Node Deployment', 'Executive Architecture Support'],
                  color: '#FFFFFF'
                }
              ].map((plan, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -15, rotateX: 2, rotateY: 2 }}
                  className={`relative bg-[#0A1929]/40 border ${plan.popular ? 'border-[#00E5FF]/40 bg-[#00E5FF]/5' : 'border-white/10'} p-12 rounded-[56px] backdrop-blur-xl flex flex-col group overflow-hidden`}
                >
                   {plan.popular && (
                     <div className="absolute top-8 right-8 bg-[#00E5FF] text-[#0A1929] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Architect's Choice</div>
                   )}
                   
                   <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                   <p className="text-slate-500 font-medium mb-10 h-10 leading-snug">{plan.desc}</p>
                   
                   <div className="flex items-baseline gap-2 mb-12">
                     <span className="text-6xl font-display font-black text-white tracking-tighter">{plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}</span>
                     {plan.price !== 'Custom' && <span className="text-slate-600 font-black uppercase text-xs tracking-widest">/ Epoch</span>}
                   </div>

                   <button className={`w-full py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] mb-12 transition-all ${plan.popular ? 'bg-[#00E5FF] text-[#0A1929] shadow-[0_20px_40px_#00E5FF40] hover:scale-[1.02]' : 'bg-white/5 text-white border border-white/20 hover:bg-white/10'}`}>
                      Initialize Node
                   </button>

                   <ul className="space-y-6 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex gap-4 items-center group/item">
                           <div className={`w-1.5 h-1.5 rounded-full bg-current transition-all group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_currentColor]`} style={{ color: plan.color }} />
                           <span className="text-slate-400 text-sm font-medium group-hover/item:text-white transition-colors">{f}</span>
                        </li>
                      ))}
                   </ul>

                   <div className="mt-12 pt-8 border-t border-white/5 opacity-50 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-2 text-[9px] font-black uppercase text-slate-500 tracking-tighter">
                         <ShieldCheck size={14} className="text-[#00E5FF]" />
                         Handshake Protocol Verified
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Protocol Clarity - High Fidelity FAQ */}
        <section className="py-40 px-6 bg-[#030712] relative overflow-hidden border-t border-white/10">
          <div className="max-w-[800px] mx-auto relative z-10">
            <div className="text-center mb-24">
               <span className="text-[#00E5FF] font-black text-xs uppercase tracking-[0.6em] mb-4 block">Operation Parameters</span>
               <h2 className="text-5xl font-display font-bold text-white tracking-tighter leading-none mb-12">Protocol <span className="text-white/40">Clarity</span></h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00E5FF]/40 transition-colors">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full text-left p-8 flex justify-between items-center group"
                  >
                    <span className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">{faq.question}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} className="text-[#00E5FF] ml-4 bg-[#00E5FF]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <CaretDown size={20} weight="bold" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8"
                      >
                        <p className="pb-8 text-slate-400 font-medium border-t border-white/5 pt-8">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Absolute Parity - Final CTA */}
        <section className="py-40 px-6 bg-[#030712] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/10 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-12 tracking-tighter leading-none">Ready for Absolute <span className="text-[#00E5FF]">Parity?</span></h2>
              <p className="text-2xl text-slate-400 font-medium mb-16 leading-relaxed">Join 3,200+ organizations building on the SENTIENT data mesh.</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                 <button className="px-12 py-6 bg-[#00E5FF] text-[#0A1929] rounded-[32px] font-black uppercase text-sm tracking-[0.3em] shadow-[0_30px_60px_#00E5FF40] hover:scale-105 transition-transform">
                    Initialize Deployment
                 </button>
                 <button className="px-12 py-6 bg-white/5 border border-white/20 text-white rounded-[32px] font-black uppercase text-sm tracking-[0.3em] hover:bg-white/10 transition-all">
                    Request Architecture Audit
                 </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
