import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileSignature, 
  ShieldCheck, 
  Clock, 
  ArrowUpRight, 
  Download, 
  Trash2, 
  Plus, 
  ChevronRight,
  ArrowLeft,
  Search,
  Globe,
  Database,
  Lock,
  Zap,
  Info,
  ShieldAlert,
  Cpu,
  RefreshCcw,
  Key,
  ArrowRightLeft
} from 'lucide-react';
import Logo from '../components/Logo';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';

const SyncContracts = () => {
  const [hoveredContract, setHoveredContract] = useState(null);
  const [signing, setSigning] = useState(false);

  const contracts = [
    {
      id: 'BYND-LDR-001',
      name: 'Amazon Cloud Handshake',
      governance: 'Self-Sovereign',
      nodeA: 'AWS-Virginia-01',
      nodeB: 'BYND-Core-A',
      parityScore: 99.8,
      security: 'AES-256-GCM (Quantum Ready)',
      quota: '1.2 TB / Month',
      status: 'Signed',
      risk: 'None'
    },
    {
      id: 'BYND-LDR-002',
      name: 'Salesforce Parity Bridge',
      governance: 'Shared Authority',
      nodeA: 'SFDC-Sync-Node',
      nodeB: 'BYND-Node-Beta',
      parityScore: 84.5,
      security: 'RSA-4096-ECC',
      quota: '500 GB / Month',
      status: 'Awaiting Signature',
      risk: 'Medium'
    },
    {
      id: 'BYND-LDR-003',
      name: 'Oracle Secure Ledger',
      governance: 'Blind Sync Protocol',
      nodeA: 'Oracle-DB-Local',
      nodeB: 'BYND-Storage-V2',
      parityScore: 100,
      security: 'AES-256-GCM',
      quota: 'Unlimited',
      status: 'Signed',
      risk: 'None'
    }
  ];

  const handleSignContract = () => {
    setSigning(true);
    setTimeout(() => {
      setSigning(false);
      toast.success('Protocol Signature Verified: Atomic Handshake Established', {
        icon: '🔐',
        style: {
          borderRadius: '20px',
          background: '#12E7FF',
          color: '#030712',
          fontWeight: '900',
        }
      });
    }, 2500);
  };

  return (
    <div className="h-screen w-screen bg-[#020617] text-white font-sans selection:bg-[#12E7FF]/30 relative overflow-hidden flex flex-col">
      <SEO 
        title="Atomic Handshake Ledger" 
        description="Reimagined sovereign data contracts for the high-thinking enterprise architect." 
      />

      {/* Cinematic Background: The Void */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#12E7FF]/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#12E7FF 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
      </div>

      {/* Reimagined Header */}
      <header className="px-12 py-8 border-b border-white/5 flex justify-between items-center bg-[#030712]/40 backdrop-blur-3xl relative z-50">
        <div className="flex items-center gap-10">
          <Link to="/dashboard" className="p-3 bg-white/5 rounded-2xl hover:bg-[#12E7FF]/10 text-gray-500 hover:text-[#12E7FF] transition-all group">
            <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div>
             <h1 className="text-3xl font-black tracking-tighter leading-none italic uppercase">Atomic <span className="text-[#12E7FF]">Handshake Ledger</span></h1>
             <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-[#12E7FF] rounded-full animate-pulse shadow-[0_0_10px_#12E7FF]" />
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em]">Governance Protocol Alpha-V</p>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
           <div className="hidden md:flex items-center gap-8 text-[10px] font-black text-gray-600 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Globe size={14} className="text-[#12E7FF]" /> 3 Active Sovereignties</span>
              <span className="flex items-center gap-2"><Lock size={14} className="text-green-500" /> End-to-End Vaulted</span>
           </div>
           <button 
            onClick={handleSignContract}
            className="bg-[#12E7FF] text-[#030712] px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(18,231,255,0.4)] transition-all flex items-center gap-3 active:scale-95"
           >
              <FileSignature size={18} />
              Sign New Protocol
           </button>
        </div>
      </header>

      {/* Main Ledger Grid */}
      <main className="flex-1 p-12 overflow-y-auto custom-scrollbar relative z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <AnimatePresence>
            {contracts.map((contract, i) => (
              <motion.div
                key={contract.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                onMouseEnter={() => setHoveredContract(i)}
                onMouseLeave={() => setHoveredContract(null)}
                className={`group relative h-[500px] bg-white/[0.01] border border-white/5 rounded-[60px] p-10 flex flex-col transition-all duration-700 overflow-hidden
                  ${hoveredContract === i ? 'bg-white/[0.03] border-[#12E7FF]/30 -translate-y-2' : ''}`}
              >
                {/* Visual Parity Line Animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#12E7FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Protocol Header */}
                <div className="flex justify-between items-start mb-10">
                   <div className={`w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500
                     ${contract.status === 'Signed' ? 'text-[#12E7FF] shadow-[0_0_30px_rgba(18,231,255,0.1)]' : 'text-amber-500'}`}>
                      <Cpu size={32} />
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest mb-2">Protocol ID: {contract.id}</p>
                      <div className={`inline-flex px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border
                        ${contract.status === 'Signed' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                        {contract.status}
                      </div>
                   </div>
                </div>

                {/* Contract Body */}
                <div className="flex-1 space-y-8">
                   <div>
                      <h3 className="text-3xl font-black tracking-tight mb-2 italic group-hover:text-[#12E7FF] transition-colors">{contract.name}</h3>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em]">Governance: {contract.governance}</p>
                   </div>

                   <div className="space-y-4">
                      {/* Node Connection Visualization */}
                      <div className="p-5 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between relative overflow-hidden group/node">
                         <div className="text-center flex-1">
                            <p className="text-[9px] text-gray-600 font-black uppercase mb-1">Source</p>
                            <p className="text-xs font-bold">{contract.nodeA}</p>
                         </div>
                         <div className="px-4">
                            <ArrowRightLeft size={16} className={`transition-all duration-700 ${hoveredContract === i ? 'text-[#12E7FF] rotate-180' : 'text-gray-700'}`} />
                         </div>
                         <div className="text-center flex-1">
                            <p className="text-[9px] text-gray-600 font-black uppercase mb-1">Sovereign</p>
                            <p className="text-xs font-bold">{contract.nodeB}</p>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-5 bg-white/[0.02] border border-white/5 rounded-3xl">
                            <p className="text-[9px] text-gray-600 font-black uppercase mb-1">Parity Score</p>
                            <div className="flex items-center gap-2">
                               <h4 className="text-xl font-black italic">{contract.parityScore}%</h4>
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]" />
                            </div>
                         </div>
                         <div className="p-5 bg-white/[0.02] border border-white/5 rounded-3xl">
                            <p className="text-[9px] text-gray-600 font-black uppercase mb-1">Sovereignty</p>
                            <h4 className="text-xl font-black italic text-[#12E7FF]">HIGH</h4>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Hover Reveal: Metadata Payload */}
                <div className={`mt-8 space-y-4 transition-all duration-700 ${hoveredContract === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                   <div className="p-4 bg-black/50 border border-white/5 rounded-2xl font-mono text-[10px] text-gray-500 leading-relaxed">
                      $ cat protocol_metadata.json<br/>
                      {`{ "encryption": "${contract.security}", "quota": "${contract.quota}" }`}
                   </div>
                   <div className="flex gap-4">
                      <button 
                        onClick={() => handleDownload(contract.name)}
                        className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3"
                      >
                         <Download size={16} /> DOWNLOAD LEDGER
                      </button>
                      <button className="p-4 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-2xl text-red-500 transition-all">
                         <Trash2 size={18} />
                      </button>
                   </div>
                </div>

                {/* Footer Gradient Pin */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-800 pointer-events-none group-hover:text-[#12E7FF]/20 transition-colors">
                   <Key size={40} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Reimagined: The Initialization Portal */}
          <motion.div
            className="h-[500px] border-2 border-dashed border-white/5 rounded-[60px] flex flex-col items-center justify-center gap-6 group hover:border-[#12E7FF]/20 hover:bg-[#12E7FF]/5 transition-all cursor-pointer overflow-hidden relative"
          >
             <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-gray-700 group-hover:scale-125 group-hover:text-[#12E7FF] transition-all duration-700 relative z-10">
                <RefreshCcw size={40} className="group-hover:rotate-180 transition-transform duration-1000" />
             </div>
             <div className="text-center space-y-2 relative z-10">
                <h4 className="text-sm font-black uppercase tracking-[0.4em] text-gray-600 group-hover:text-white transition-colors">Initialize Atomic Protocol</h4>
                <p className="text-[10px] text-gray-800 font-bold group-hover:text-gray-500 uppercase tracking-widest">Awaiting Secure Handshake Signal</p>
             </div>
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#12E7FF05_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </main>

      {/* Reimagined Footer: The Global Trust Layer */}
      <footer className="px-12 py-8 border-t border-white/5 bg-[#030712] flex justify-between items-center z-50 relative">
         <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
               <ShieldCheck size={20} className="text-green-500" />
               <div>
                  <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Global Parity Check</p>
                  <p className="text-[11px] font-bold">Protocol v9.3.4 SECURE</p>
               </div>
            </div>
            <div className="h-8 w-px bg-white/5 hidden md:block" />
            <div className="hidden md:flex items-center gap-4">
               <ShieldAlert size={20} className="text-[#12E7FF]" />
               <div>
                  <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Sovereignty Index</p>
                  <p className="text-[11px] font-bold">Cluster 0x421 Optimal</p>
               </div>
            </div>
         </div>
         <div className="text-right">
            <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">BYND Autonomous Trust Protocol</p>
            <p className="text-[9px] text-gray-800 font-bold uppercase tracking-widest mt-1">© 2024 Sovereign Data Sync Hub</p>
         </div>
      </footer>

      {/* Cinematic Signature Overlay */}
      <AnimatePresence>
        {signing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#030712]/95 backdrop-blur-3xl flex items-center justify-center p-10"
          >
             <div className="text-center space-y-12 max-w-lg">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-32 h-32 bg-[#12E7FF]/10 border border-[#12E7FF]/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_100px_rgba(18,231,255,0.1)]"
                >
                   <Key size={50} className="text-[#12E7FF]" />
                </motion.div>
                <div className="space-y-4">
                   <h2 className="text-4xl font-black italic tracking-tighter uppercase">Initializing <span className="text-[#12E7FF]">Atomic Handshake</span></h2>
                   <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[11px]">Establishing Cryptographic Sovereign Parity Bridge...</p>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ x: '-100%' }}
                     animate={{ x: '100%' }}
                     transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                     className="w-full h-full bg-gradient-to-r from-transparent via-[#12E7FF] to-transparent"
                   />
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(18, 231, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(18, 231, 255, 0.3); }
      `}</style>
    </div>
  );
};

export default SyncContracts;
