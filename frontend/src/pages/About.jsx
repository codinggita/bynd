import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Globe, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    { icon: <Zap size={28} />, title: 'Speed First', desc: 'Sub-second sync latency across all connected nodes. Every millisecond matters for enterprise data operations.' },
    { icon: <ShieldCheck size={28} />, title: 'Data Sovereignty', desc: 'Your data belongs to you. We provide the infrastructure — you maintain complete ownership and control.' },
    { icon: <Globe size={28} />, title: 'Global Scale', desc: 'Built for businesses operating across borders, with native support for multi-region compliance and tax logic.' },
    { icon: <Users size={28} />, title: 'Human-Centric', desc: 'Complex technology, simple experience. Every feature is designed to eliminate manual data work, not create more of it.' }
  ];

  const stats = [
    { value: '3,200+', label: 'Organizations' },
    { value: '14M+', label: 'Daily Syncs' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '42ms', label: 'Avg Latency' }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#12E7FF]/30">
      <SEO title="About BYND" description="Learn about BYND's mission to eliminate data silos and build the sentient enterprise data mesh." />

      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(#12E7FF 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />

      <nav className="relative z-50 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
        </Link>
        <Link to="/auth?mode=signup" className="px-8 py-3 bg-[#12E7FF] text-[#030712] rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(18,231,255,0.3)] transition-all">
          Get Started
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pt-16 pb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#12E7FF] font-black text-xs uppercase tracking-[0.6em] mb-6 block">Our Mission</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12E7FF] to-white/60">Sentient</span> Data Mesh
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            BYND was founded on a simple belief: business data should flow freely, securely, and intelligently between every system — without human intervention. We're building the infrastructure that makes data silos extinct.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 text-center hover:border-[#12E7FF]/20 transition-all"
            >
              <h3 className="text-4xl font-black tracking-tighter text-[#12E7FF] mb-2">{stat.value}</h3>
              <p className="text-xs text-gray-500 font-black uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-32">
        <div className="text-center mb-16">
          <span className="text-[#12E7FF] font-black text-xs uppercase tracking-[0.6em] mb-4 block">Core Principles</span>
          <h2 className="text-4xl font-black tracking-tighter">What Drives Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 hover:border-[#12E7FF]/20 transition-all group"
            >
              <div className="w-14 h-14 bg-[#12E7FF]/10 border border-[#12E7FF]/20 rounded-2xl flex items-center justify-center mb-6 text-[#12E7FF] group-hover:scale-110 transition-transform">
                {val.icon}
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-3">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-32 text-center">
        <div className="bg-gradient-to-br from-[#12E7FF]/10 to-transparent border border-[#12E7FF]/20 rounded-[48px] p-16">
          <h2 className="text-4xl font-black tracking-tighter mb-6">Ready to join the data revolution?</h2>
          <p className="text-gray-400 mb-10 text-lg">Start your free deployment and experience sovereign data sync.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/auth?mode=signup" className="px-10 py-5 bg-[#12E7FF] text-[#030712] rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(18,231,255,0.3)] transition-all inline-flex items-center gap-3">
              Initialize Deployment <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
