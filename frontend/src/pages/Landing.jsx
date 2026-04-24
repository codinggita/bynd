import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileSpreadsheet, Users, CurrencyDollar, CheckCircle } from '@phosphor-icons/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lenis from 'lenis';

const Landing = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-bg-page selection:bg-brand-accent/30">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 overflow-hidden">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl lg:text-7xl text-brand-deep leading-[1.1] mb-6">
                Go Beyond Manual <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-accent">
                  Data Entry.
                </span>
              </h1>
              <p className="text-xl text-text-secondary mb-10 max-w-xl">
                The no-code bidirectional sync engine for Excel, CRM, and Invoicing. Keep your data in sync across your entire business stack automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow max-w-md">
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="w-full px-6 py-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  />
                </div>
                <button className="bg-brand-deep text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-sm whitespace-nowrap">
                  Get Started Free <ArrowRight size={20} />
                </button>
              </div>
              
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-border overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-text-secondary">
                  <span className="font-bold text-brand-deep">500+</span> SMBs already syncing
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto h-[500px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
            >
              {/* Spline Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowsLeftRight size={48} className="text-brand-accent animate-pulse" weight="fill" />
                  </div>
                  <p className="text-text-secondary font-medium">[ Spline 3D Scene Loading... ]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integration Icons Bar */}
        <section className="py-12 border-y border-border bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-text-secondary mb-8">
              Seamlessly Connect Your Entire Stack
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
              <div className="flex items-center gap-2"><FileSpreadsheet size={32} /> <span className="font-bold">Excel</span></div>
              <div className="flex items-center gap-2"><Users size={32} /> <span className="font-bold">HubSpot</span></div>
              <div className="flex items-center gap-2"><CurrencyDollar size={32} /> <span className="font-bold">QuickBooks</span></div>
              <div className="flex items-center gap-2"><FileSpreadsheet size={32} /> <span className="font-bold">Sheets</span></div>
              <div className="flex items-center gap-2"><Users size={32} /> <span className="font-bold">Salesforce</span></div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-24 px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-display text-brand-deep mb-4">Powerful Features, Zero Code.</h2>
              <p className="text-text-secondary">BYND gives you everything you need to manage complex data workflows without writing a single line of code.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Bidirectional Sync",
                  desc: "Changes in Excel update your CRM, and vice versa. Instantly.",
                  icon: <ArrowsLeftRight size={32} className="text-brand-accent" />
                },
                {
                  title: "AI Field Mapping",
                  desc: "Our AI automatically matches your spreadsheet columns to CRM fields.",
                  icon: <CheckCircle size={32} className="text-brand-accent" />
                },
                {
                  title: "Conflict Engine",
                  desc: "Smart resolution when data differs between systems. You're always in control.",
                  icon: <Users size={32} className="text-brand-accent" />
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all group">
                  <div className="mb-6 w-14 h-14 bg-bg-page rounded-lg flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-deep mb-3">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
