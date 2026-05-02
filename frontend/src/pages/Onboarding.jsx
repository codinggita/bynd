import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Database, 
  ArrowRight, 
  Check, 
  Settings, 
  RefreshCcw, 
  ArrowLeftRight, 
  ArrowRightCircle,
  FileSpreadsheet,
  Cloud,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';
import FileUpload from '../components/FileUpload';

const Onboarding = () => {
  const { trackEvent } = useAnalytics();
  const [step, setStep] = useState(() => {
    const saved = sessionStorage.getItem('onboardingStep');
    return saved ? parseInt(saved, 10) : 1;
  });
  const [selectedSources, setSelectedSources] = useState(() => {
    const saved = sessionStorage.getItem('onboardingSources');
    return saved ? JSON.parse(saved) : [];
  });
  const [syncDirection, setSyncDirection] = useState('bidirectional');

  // Persist step and sources on change
  useEffect(() => {
    sessionStorage.setItem('onboardingStep', step.toString());
  }, [step]);

  useEffect(() => {
    sessionStorage.setItem('onboardingSources', JSON.stringify(selectedSources));
  }, [selectedSources]);

  const sources = [
    { id: 'excel', name: 'Excel / Sheets', icon: <FileSpreadsheet className="text-green-400" /> },
    { id: 'salesforce', name: 'Salesforce CRM', icon: <Cloud className="text-blue-400" /> },
    { id: 'sap', name: 'SAP ERP', icon: <Database className="text-blue-600" /> },
    { id: 'custom', name: 'Custom API Node', icon: <Zap className="text-yellow-400" /> }
  ];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const toggleSource = (id) => {
    if (selectedSources.includes(id)) {
      setSelectedSources(selectedSources.filter(s => s !== id));
    } else if (selectedSources.length < 2) {
      setSelectedSources([...selectedSources, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#12E7FF]/30 relative overflow-hidden flex flex-col">
      
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#12E7FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#12E7FF]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Header & Progress */}
      <header className="relative z-50 px-8 py-10 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-8 h-8 bg-[#12E7FF] rounded-lg flex items-center justify-center shadow-[0_0_15px_#12E7FF]">
              <span className="text-[#030712] font-black text-xs italic">B</span>
           </div>
           <span className="text-xl font-black tracking-tighter">BYND</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md flex items-center gap-4 px-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 flex items-center gap-4">
              <div className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${step >= i ? 'bg-[#12E7FF] shadow-[0_0_10px_#12E7FF]' : 'bg-white/5'}`} />
              {i < 3 && <div className="text-[10px] font-black text-gray-700">0{i}</div>}
            </div>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-[1000px]">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: CONNECT SOURCES */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h1 className="text-5xl font-black mb-4 tracking-tighter">Establish <span className="text-[#12E7FF]">Data Handshake</span></h1>
                  <p className="text-gray-500 font-bold text-lg">Select two primary synchronization nodes to initialize your bidirectional pipeline.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {sources.map((source) => (
                    <button
                      key={source.id}
                      onClick={() => toggleSource(source.id)}
                      className={`p-8 rounded-[40px] border transition-all duration-500 flex flex-col items-center gap-6 group relative overflow-hidden
                        ${selectedSources.includes(source.id) 
                          ? 'bg-[#12E7FF]/10 border-[#12E7FF] shadow-[0_0_40px_rgba(18,231,255,0.1)]' 
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                        }`}
                    >
                      {selectedSources.includes(source.id) && (
                        <div className="absolute top-4 right-4 bg-[#12E7FF] p-1 rounded-full">
                           <Check size={12} className="text-[#030712]" />
                        </div>
                      )}
                      <div className={`p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${selectedSources.includes(source.id) ? 'border-[#12E7FF]/50' : ''}`}>
                        {React.cloneElement(source.icon, { size: 32 })}
                      </div>
                      <span className="font-bold text-sm tracking-tight">{source.name}</span>
                    </button>
                  ))}
                </div>

                {selectedSources.includes('excel') && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl mx-auto w-full pt-4"
                  >
                    <FileUpload onFileSelect={(file) => console.log('File selected:', file)} />
                  </motion.div>
                )}

                <div className="flex justify-center">
                  <button 
                    disabled={selectedSources.length < 2}
                    onClick={handleNext}
                    className="px-12 py-4.5 bg-[#12E7FF] text-[#030712] font-black rounded-2xl flex items-center gap-3 hover:shadow-[0_0_30px_rgba(18,231,255,0.4)] transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                  >
                    NEXT: FIELD MAPPING
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: FIELD MAPPING */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                className="space-y-10"
              >
                <div className="text-center">
                  <h1 className="text-5xl font-black mb-4 tracking-tighter text-[#12E7FF]">Atomic Alignment</h1>
                  <p className="text-gray-500 font-bold text-lg">Define the metadata relationship between your connected nodes.</p>
                </div>

                <div className="bg-white/[0.01] backdrop-blur-xl border border-white/10 rounded-[48px] p-8 md:p-12 overflow-hidden shadow-2xl">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 px-4">
                      <div className="text-center"><span className="text-[10px] font-black uppercase text-gray-600 tracking-widest">Source: Excel</span></div>
                      <div className="text-center"><span className="text-[10px] font-black uppercase text-[#12E7FF] tracking-[0.4em]">Handshake</span></div>
                      <div className="text-center"><span className="text-[10px] font-black uppercase text-gray-600 tracking-widest">Target: Salesforce</span></div>
                   </div>

                   <div className="space-y-3">
                      {[
                        { s: 'Customer_Name', t: 'Account_Name', type: 'string' },
                        { s: 'Invoice_Amount', t: 'Opportunity_Value', type: 'currency' },
                        { s: 'Sync_Date', t: 'Last_Modified_Date', type: 'timestamp' },
                        { s: 'Contact_Email', t: 'Person_Email', type: 'email' }
                      ].map((map, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] hover:border-[#12E7FF]/20 transition-all group">
                           <div className="flex-1 text-center font-bold text-sm tracking-tight">{map.s}</div>
                           <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-[#12E7FF]/10 flex items-center justify-center border border-[#12E7FF]/20">
                                 <RefreshCcw size={14} className="text-[#12E7FF] group-hover:rotate-180 transition-transform duration-700" />
                              </div>
                           </div>
                           <div className="flex-1 text-center font-bold text-sm tracking-tight">{map.t}</div>
                           <div className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-black text-gray-500 uppercase tracking-widest hidden md:block">{map.type}</div>
                        </div>
                      ))}
                   </div>

                   <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-3">
                      <div className="flex -space-x-3">
                         <div className="w-10 h-10 rounded-full border-2 border-[#030712] bg-[#12E7FF] flex items-center justify-center"><Check size={18} className="text-[#030712]" /></div>
                         <div className="w-10 h-10 rounded-full border-2 border-[#030712] bg-white/10 backdrop-blur flex items-center justify-center text-[10px] font-black">+42</div>
                      </div>
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Fields Auto-MAPPED via BYND Heuristics</span>
                   </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button onClick={handleBack} className="px-10 py-4.5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">PREVIOUS</button>
                  <button onClick={handleNext} className="px-12 py-4.5 bg-[#12E7FF] text-[#030712] font-black rounded-2xl flex items-center gap-3 hover:shadow-[0_0_30px_rgba(18,231,255,0.4)] transition-all group">
                    NEXT: SYNC DIRECTION
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: SYNC DIRECTION */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <h1 className="text-5xl font-black mb-4 tracking-tighter">Vector <span className="text-[#12E7FF]">Control</span></h1>
                  <p className="text-gray-500 font-bold text-lg">Determine the directional flow of your sovereign data records.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  
                  <button 
                    onClick={() => setSyncDirection('unidirectional')}
                    className={`flex-1 max-w-[340px] p-10 rounded-[48px] border transition-all duration-500 flex flex-col items-center text-center gap-6 group
                      ${syncDirection === 'unidirectional' 
                        ? 'bg-[#12E7FF]/10 border-[#12E7FF] shadow-[0_0_40px_rgba(18,231,255,0.1)]' 
                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 opacity-50 hover:opacity-100'
                      }`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                       <ArrowRightCircle size={32} className={syncDirection === 'unidirectional' ? 'text-[#12E7FF]' : 'text-gray-500'} />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2">Unidirectional</h3>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">Source A pushes to Source B. Perfect for archival logs or one-way reporting.</p>
                    </div>
                  </button>

                  <div className="flex flex-col items-center gap-2 opacity-20 hidden md:flex">
                     <div className="h-1 w-20 bg-white/20 rounded-full" />
                     <div className="h-1 w-10 bg-white/20 rounded-full" />
                  </div>

                  <button 
                    onClick={() => setSyncDirection('bidirectional')}
                    className={`flex-1 max-w-[340px] p-10 rounded-[48px] border transition-all duration-500 flex flex-col items-center text-center gap-6 group
                      ${syncDirection === 'bidirectional' 
                        ? 'bg-[#12E7FF]/10 border-[#12E7FF] shadow-[0_0_40px_rgba(18,231,255,0.1)]' 
                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 opacity-50 hover:opacity-100'
                      }`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                       <ArrowLeftRight size={32} className={syncDirection === 'bidirectional' ? 'text-[#12E7FF]' : 'text-gray-500'} />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2">Bidirectional</h3>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">Two-way parity. Changes in either source are automatically mirrored globally.</p>
                    </div>
                  </button>

                </div>

                <div className="flex flex-col items-center gap-10">
                   <div className="bg-[#12E7FF]/5 border border-[#12E7FF]/10 px-8 py-4 rounded-2xl flex items-center gap-4">
                      <ShieldCheck size={20} className="text-[#12E7FF]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#12E7FF]">Sync Engine Integrity: 100% Guaranteed</span>
                   </div>

                   <div className="flex justify-center gap-4">
                      <button onClick={handleBack} className="px-10 py-4.5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">PREVIOUS</button>
                      <Link 
                        to="/" 
                        onClick={() => trackEvent('Onboarding Finalized', 'Conversion', 'Deployment Check', 1)}
                        className="px-16 py-4.5 bg-[#12E7FF] text-[#030712] font-black rounded-2xl flex items-center gap-3 hover:shadow-[0_0_40px_rgba(18,231,255,0.6)] transition-all group scale-110 origin-center"
                      >
                        FINALIZE DEPLOYMENT
                        <Check size={22} className="group-hover:scale-125 transition-transform" />
                      </Link>
                   </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>

      {/* Footer Diagnostic */}
      <footer className="relative z-50 p-10 flex justify-between items-center border-t border-white/5">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
           <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Global Node Status: Stable</span>
        </div>
        <span className="text-[9px] font-black text-gray-700 uppercase tracking-[0.4em]">Deployment ID: BYND-ONB-9321</span>
      </footer>

    </div>
  );
};

export default Onboarding;
