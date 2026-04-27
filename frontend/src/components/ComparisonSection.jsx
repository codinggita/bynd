import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCsv, ArrowsClockwise, 
  HandPointing, Cpu, 
  Clock, Eye, 
  Warning, ShieldCheck,
  CaretRight,
  Database, Tag, Package,
  TrendUp, ChatCircleText, ChartBar
} from '@phosphor-icons/react';

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState("Financial Operations");

  const tabs = [
    { id: "Financial Operations", icon: <Database size={18} /> },
    { id: "Sales Data", icon: <ChatCircleText size={18} /> },
    { id: "Inventory", icon: <Package size={18} /> }
  ];

  const dataByTab = {
    "Financial Operations": [
      {
        traditional: { title: "Manual CSV Exports", desc: "Prone to stale data and human error.", icon: <FileCsv weight="duotone" /> },
        bynd: { title: "Continuous Stream Sync", desc: "Real-time updates delivered instantly.", icon: <ArrowsClockwise weight="duotone" /> }
      },
      {
        traditional: { title: "Rigid Field Mapping", desc: "Months of manual configuration.", icon: <HandPointing weight="duotone" /> },
        bynd: { title: "AI-Powered Auto-Mapping", desc: "Intelligent schema detection in seconds.", icon: <Cpu weight="duotone" /> }
      },
      {
        traditional: { title: "Hidden Sync Silos", desc: "Zero visibility into data failures.", icon: <Clock weight="duotone" /> },
        bynd: { title: "Full Pipeline Visibility", desc: "End-to-end monitoring and clarity.", icon: <Eye weight="duotone" /> }
      },
      {
        traditional: { title: "Fragile Connections", desc: "API changes break everything easily.", icon: <Warning weight="duotone" /> },
        bynd: { title: "Resilient Conflict Shield", desc: "Auto-recovering version control.", icon: <ShieldCheck weight="duotone" /> }
      }
    ],
    "Sales Data": [
      {
        traditional: { title: "Delayed CRM Updates", desc: "Leads lose interest while data migrates.", icon: <Clock weight="duotone" /> },
        bynd: { title: "Instant Lead Sync", desc: "Connect with prospects the second they arrive.", icon: <TrendUp weight="duotone" /> }
      },
      {
        traditional: { title: "Duplicate Entry War", desc: "Sales teams wrestling with ghost records.", icon: <Warning weight="duotone" /> },
        bynd: { title: "Unique Record ID Shield", desc: "Zero duplicates across any connected app.", icon: <Tag weight="duotone" /> }
      },
      {
        traditional: { title: "Fragmented Profiles", desc: "Incomplete view of customer journeys.", icon: <HandPointing weight="duotone" /> },
        bynd: { title: "360° Unified Identity", desc: "Consolidated customer data in real-time.", icon: <ChartBar weight="duotone" /> }
      },
      {
        traditional: { title: "Stale Pipeline Stats", desc: "Reports lagging behind actual deals.", icon: <FileCsv weight="duotone" /> },
        bynd: { title: "Live Revenue Stream", desc: "Every dollar tracked as it moves.", icon: <ArrowsClockwise weight="duotone" /> }
      }
    ],
    "Inventory": [
      {
        traditional: { title: "Ghost Stock Issues", desc: "Selling items that are no longer in stock.", icon: <Warning weight="duotone" /> },
        bynd: { title: "Absolute Sync Triggers", desc: "Inventory counts are locked and accurate.", icon: <Package weight="duotone" /> }
      },
      {
        traditional: { title: "Warehouse Lag", desc: "Hours between sale and system update.", icon: <Clock weight="duotone" /> },
        bynd: { title: "Nano-Second Updates", desc: "Stock levels reflect every single click.", icon: <ArrowsClockwise weight="duotone" /> }
      },
      {
        traditional: { title: "Manual Overrides", desc: "Employees patching errors by hand.", icon: <HandPointing weight="duotone" /> },
        bynd: { title: "Auth-State Logic", desc: "Systematic rules prevent manual drift.", icon: <ShieldCheck weight="duotone" /> }
      },
      {
        traditional: { title: "Siloed Supply Chain", desc: "Vendors can't see your demand curves.", icon: <FileCsv weight="duotone" /> },
        bynd: { title: "Open Mapping Bridges", desc: "Connect vendor APIs directly to your flow.", icon: <Cpu weight="duotone" /> }
      }
    ]
  };

  const comparisonData = dataByTab[activeTab];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-6"
          >
            <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-[0.2em]">Efficiency Protocol</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-[#0A1929] mb-6 tracking-tight"
          >
            Traditional vs <span className="text-[#00E5FF]">BYND</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed"
          >
            Stop settling for manual exports. BYND brings engineering-grade precision to your business data sync.
          </motion.p>
        </div>

        {/* Categories Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white border border-[#E2E8F0] p-1.5 rounded-[22px] flex shadow-sm">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-[16px] text-sm font-bold transition-all flex items-center gap-2 relative ${activeTab === tab.id ? 'text-[#0A1929]' : 'text-[#475569] hover:text-[#0A1929] hover:bg-[#F8FAFC]'}`}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-[#00E5FF] rounded-[16px] shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Card Container */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative grid grid-cols-1 md:grid-cols-2 rounded-[40px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(10,25,41,0.15)] border border-[#E2E8F0]"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="contents" // Use contents to keep the grid structure
            >
              {/* Left Side: Traditional Path */}
              <div className="bg-[#0A1929] p-10 md:p-14 text-white relative h-full">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-white pointer-events-none">
                  <Warning size={200} weight="duotone" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-12 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#EF4444] rounded-full"></span>
                    <span className="opacity-60 uppercase tracking-widest text-xs">Traditional Workflow</span>
                  </h3>

                  <div className="space-y-10">
                    {comparisonData.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex gap-6 items-center group"
                      >
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
                          <div className="text-white/40 text-2xl">
                             {React.cloneElement(item.traditional.icon, { size: 28 })}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white/90 mb-1">{item.traditional.title}</h4>
                          <p className="text-white/40 text-sm leading-relaxed">{item.traditional.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: BYND Protocol */}
              <div className="bg-white p-10 md:p-14 text-[#0A1929] relative h-full">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-12 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#00E5FF] rounded-full"></span>
                    <span className="text-[#00E5FF] uppercase tracking-widest text-xs">BYND Modern Protocol</span>
                  </h3>

                  <div className="space-y-10">
                    {comparisonData.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex gap-6 items-center group"
                      >
                        <div className="w-14 h-14 bg-[#00E5FF]/5 rounded-2xl flex items-center justify-center shrink-0 border border-[#00E5FF]/20 text-[#00E5FF] group-hover:bg-[#00E5FF]/10 transition-colors shadow-sm">
                           <span className="text-2xl">
                              {React.cloneElement(item.bynd.icon, { size: 28 })}
                           </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#0A1929] mb-1">{item.bynd.title}</h4>
                          <p className="text-[#475569] text-sm leading-relaxed">{item.bynd.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00E5FF]/10 filter blur-[100px] pointer-events-none rounded-full" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Center Indicator */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center pointer-events-none z-20">
            <div className="w-12 h-12 bg-[#0A1929] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
              <CaretRight weight="bold" size={24} className="text-[#00E5FF]" />
            </div>
            <div className="absolute w-[2px] h-[120%] bg-white/10 left-1/2 -translate-x-1/2 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
