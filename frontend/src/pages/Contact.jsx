import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Message sent! Our team will respond within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'support@bynd.tech', desc: 'For general inquiries' },
    { icon: <MessageSquare size={20} />, label: 'Enterprise Sales', value: 'enterprise@bynd.tech', desc: 'For custom deployments' },
    { icon: <Clock size={20} />, label: 'Response Time', value: '< 24 hours', desc: 'Average first response' },
    { icon: <MapPin size={20} />, label: 'Headquarters', value: 'Global Remote', desc: 'Distributed team worldwide' }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#12E7FF]/30">
      <SEO title="Contact Us" description="Get in touch with the BYND team for support, sales, or partnership inquiries." />

      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(#12E7FF 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />

      <nav className="relative z-50 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
        </Link>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pb-32">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <span className="text-[#12E7FF] font-black text-xs uppercase tracking-[0.6em] mb-6 block">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Let's Build <span className="text-[#12E7FF]">Together</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you need support, want to explore enterprise solutions, or have a partnership idea — we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 hover:border-[#12E7FF]/20 transition-all"
                >
                  <div className="w-10 h-10 bg-[#12E7FF]/10 border border-[#12E7FF]/20 rounded-xl flex items-center justify-center mb-4 text-[#12E7FF]">
                    {info.icon}
                  </div>
                  <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-sm font-bold mb-1">{info.value}</p>
                  <p className="text-[10px] text-gray-500">{info.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#12E7FF]/5 to-transparent border border-[#12E7FF]/20 rounded-3xl p-8">
              <h3 className="text-lg font-black tracking-tight mb-3">Enterprise Architecture Audit</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Looking for a custom deployment? Our solutions architects will audit your data infrastructure and design a bespoke sync strategy.
              </p>
              <Link to="/pricing" className="text-[#12E7FF] font-black text-xs uppercase tracking-widest hover:underline">
                View Enterprise Plans →
              </Link>
            </div>
          </div>

          {/* Right — Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 backdrop-blur-xl"
          >
            <h3 className="text-xl font-black tracking-tight mb-8">Send us a message</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 block">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#12E7FF] transition-all outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 block">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#12E7FF] transition-all outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 block">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#12E7FF] transition-all outline-none"
                >
                  <option value="" className="bg-[#030712]">Select a topic</option>
                  <option value="support" className="bg-[#030712]">Technical Support</option>
                  <option value="sales" className="bg-[#030712]">Enterprise Sales</option>
                  <option value="partnership" className="bg-[#030712]">Partnership</option>
                  <option value="other" className="bg-[#030712]">Other</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 block">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#12E7FF] transition-all outline-none resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full mt-8 py-5 bg-[#12E7FF] text-[#030712] rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(18,231,255,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {sending ? 'Sending...' : (<><Send size={18} /> Send Message</>)}
            </button>
          </motion.form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
