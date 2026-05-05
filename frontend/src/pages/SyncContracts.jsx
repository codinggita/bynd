import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSignature, 
  ShieldCheck, 
  Clock, 
  ArrowUpRight, 
  Download, 
  Trash2, 
  Plus, 
  ChevronRight,
  Globe,
  Database,
  Lock,
  Zap,
  Cpu,
  RefreshCcw,
  ArrowRightLeft
} from 'lucide-react';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';

const defaultContracts = [
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

import { getSyncContracts, createSyncContract } from '../services/api';

const SyncContracts = () => {
  const [hoveredContract, setHoveredContract] = useState(null);
  const [signing, setSigning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contracts, setContracts] = useState([]);

  const fetchContracts = async () => {
    setLoading(true);
    try {
      const res = await getSyncContracts();
      setContracts(res.data.data);
    } catch (err) {
      toast.error('Failed to retrieve protocol ledger');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  const handleSignContract = async () => {
    setSigning(true);
    try {
      const newContract = {
        name: `Sovereign Protocol #${contracts.length + 1}`,
        sourceNode: 'Edge-Nexus-01',
        targetNode: 'BYND-Core-Primary',
        status: 'Active',
        frequency: 'Real-time'
      };
      
      const res = await createSyncContract(newContract);
      setContracts(prev => [res.data.data, ...prev]);
      
      toast.success('Protocol Signature Verified: Atomic Handshake Established', {
        icon: '🛡️',
        style: { borderRadius: '20px', background: '#030712', color: '#fff', border: '1px solid rgba(18,231,255,0.2)' }
      });
    } catch (err) {
      toast.error('Identity Verification Failed: Protocol Rejected');
    } finally {
      setSigning(false);
    }
  };

  const handleDeleteContract = (id) => {
    setContracts(prev => prev.filter(c => c._id !== id));
    toast.success('Protocol terminated and purged from ledger');
  };

  const handleDownload = (name) => {
    toast.success(`Ledger "${name}" exported successfully`, {
      icon: '📄',
    });
  };

  return (
    <div className="space-y-8 relative pb-20">
      <SEO 
        title="Protocol Sync Contracts" 
        description="Review and sign sovereign data sync contracts with external nodes." 
      />

      {/* Page Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tight uppercase italic text-white">Sync <span className="text-[#12E7FF]">Contracts Ledger</span></h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Atomic Governance Protocol v2.1</p>
        </div>

        <div className="flex items-center gap-4">
           <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
              <ShieldCheck size={16} className="text-green-400" />
              <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{contracts.length} Active Protocols</span>
           </div>
           <button 
             onClick={handleSignContract}
             disabled={signing}
             className="bg-[#12E7FF] text-[#030712] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:shadow-[0_0_20px_#12E7FF] transition-all disabled:opacity-50 flex items-center gap-2"
           >
             {signing ? <RefreshCcw size={14} className="animate-spin" /> : <Plus size={14} />}
             {signing ? 'Verifying...' : 'Sign New Protocol'}
           </button>
        </div>
      </div>

      {/* Main Ledger Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full py-40 text-center">
            <div className="w-12 h-12 border-4 border-[#12E7FF]/20 border-t-[#12E7FF] rounded-full animate-spin mx-auto mb-6" />
            <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-500">Decrypting Sync Ledger...</p>
          </div>
        ) : contracts.length === 0 ? (
          <div className="col-span-full py-40 text-center">
             <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileSignature size={32} className="text-gray-700" />
             </div>
             <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-500">No Active Sync Protocols Found</p>
          </div>
        ) : (
          <AnimatePresence>
            {contracts.map((contract, i) => (
              <motion.div
                key={contract._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredContract(i)}
              onMouseLeave={() => setHoveredContract(null)}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[40px] p-8 flex flex-col hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#12E7FF]/5 blur-[60px] group-hover:bg-[#12E7FF]/10 transition-all" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[#12E7FF]">
                   <Cpu size={24} />
                </div>
                <div className="flex flex-col items-end">
                   <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${contract.status === 'Signed' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
                      {contract.status}
                   </span>
                   <span className="text-[10px] font-black text-gray-600 mt-1 uppercase tracking-widest">{contract._id?.slice(-8).toUpperCase()}</span>
                </div>
              </div>

              <h3 className="text-xl font-black tracking-tight mb-2 text-white group-hover:text-[#12E7FF] transition-colors">{contract.name}</h3>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">{contract.governance}</p>

              <div className="space-y-6 flex-1 mb-10">
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="text-center flex-1">
                       <p className="text-[8px] text-gray-600 font-black uppercase mb-1">Source Node</p>
                       <p className="text-[10px] font-black text-white">{contract.sourceNode}</p>
                    </div>
                    <ArrowRightLeft size={14} className="text-gray-700" />
                    <div className="text-center flex-1">
                       <p className="text-[8px] text-gray-600 font-black uppercase mb-1">Target Node</p>
                       <p className="text-[10px] font-black text-white">{contract.targetNode}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                       <p className="text-[8px] text-gray-600 font-black uppercase mb-1">Parity</p>
                       <p className="text-sm font-black text-white">{contract.parityScore || 99.8}%</p>
                    </div>
                   <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                      <p className="text-[8px] text-gray-600 font-black uppercase mb-1">Security</p>
                      <p className="text-xs font-black text-white truncate max-w-[80px]">AES-256</p>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <button 
                  onClick={() => handleDownload(contract.name)}
                  className="flex-1 py-3 bg-white/5 border border-white/5 hover:border-white/20 text-gray-400 hover:text-white rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Export</span>
                </button>
                 <button 
                   onClick={() => handleDeleteContract(contract._id)}
                   className="p-3 bg-red-500/10 border border-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all"
                 >
                   <Trash2 size={14} />
                 </button>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

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
