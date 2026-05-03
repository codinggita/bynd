import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Filter, 
  Search, 
  MoreVertical, 
  ArrowLeft,
  ChevronRight,
  Database,
  FileText,
  UserCheck,
  AlertCircle,
  Zap,
  Activity
} from 'lucide-react';
import Logo from '../components/Logo';
import toast from 'react-hot-toast';

const defaultEntities = [
  { id: 'ENT-4021', type: 'Invoice Batch', source: 'Excel Node 01', risk: 'Low', status: 'Verified', date: '2024-04-29 14:20' },
  { id: 'ENT-4022', type: 'Customer CRM Lead', source: 'Salesforce Node', risk: 'Medium', status: 'Pending', date: '2024-04-29 14:15' },
  { id: 'ENT-4023', type: 'Product Inventory', source: 'SAP ERP Node', risk: 'High', status: 'Blocked', date: '2024-04-29 14:10' },
  { id: 'ENT-4024', type: 'Global Tax Record', source: 'Custom API Node', risk: 'Low', status: 'Verified', date: '2024-04-29 14:05' },
  { id: 'ENT-4025', type: 'Vendor Contract', source: 'Excel Node 02', risk: 'Low', status: 'Verified', date: '2024-04-29 14:00' },
];

const PendingEntities = () => {
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const [entities, setEntities] = useState(() => {
    const saved = localStorage.getItem('pendingEntities');
    return saved ? JSON.parse(saved) : defaultEntities;
  });

  useEffect(() => {
    localStorage.setItem('pendingEntities', JSON.stringify(entities));
  }, [entities]);

  const handleAuthorize = (id) => {
    setEntities(prev => prev.map(e => e.id === id ? { ...e, status: 'Authorized' } : e));
    setSelectedEntity(null);
    toast.success(`Entity ${id} authorized for global sync`);
  };

  const handleReject = (id) => {
    setEntities(prev => prev.map(e => e.id === id ? { ...e, status: 'Rejected' } : e));
    setSelectedEntity(null);
    toast.success(`Entity ${id} rejected and quarantined`);
  };

  const handleAuthorizeAll = () => {
    setEntities(prev => prev.map(e => ({ ...e, status: 'Authorized' })));
    toast.success('All entities authorized for global sync');
  };

  const pendingCount = entities.filter(e => e.status === 'Pending' || e.status === 'Verified').length;
  const blockedCount = entities.filter(e => e.status === 'Blocked').length;
  const authorizedCount = entities.filter(e => e.status === 'Authorized').length;

  const filteredEntities = activeFilter === 'All' 
    ? entities 
    : activeFilter === 'Critical' 
      ? entities.filter(e => e.risk === 'High' || e.status === 'Blocked')
      : entities.filter(e => e.status === 'Verified' || e.status === 'Authorized');

  const stats = [
    { label: 'TOTAL STAGED', value: String(entities.length), icon: <Layers size={18} />, color: '#12E7FF' },
    { label: 'AWAITING APPROVAL', value: String(pendingCount), icon: <UserCheck size={18} />, color: '#FACC15' },
    { label: 'SECURITY BLOCKED', value: String(blockedCount), icon: <AlertCircle size={18} />, color: '#F87171' },
    { label: 'AUTHORIZED', value: String(authorizedCount), icon: <CheckCircle2 size={18} />, color: '#10B981' },
  ];

  return (
    <div className="space-y-8 relative pb-20">
      
      {/* Page Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tight uppercase italic text-white">Staging <span className="text-[#12E7FF]">Protocol Hub</span></h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Awaiting Global Sync Authorization</p>
        </div>

        <div className="flex items-center gap-4">
           <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
              <Clock size={16} className="text-amber-400" />
              <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{pendingCount} Entities Staged</span>
           </div>
           <button 
             onClick={handleAuthorizeAll}
             className="bg-[#12E7FF] text-[#030712] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:shadow-[0_0_20px_#12E7FF] transition-all flex items-center gap-2"
           >
             <UserCheck size={14} />
             Authorize All Nodes
           </button>
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-6 rounded-[32px] hover:bg-white/[0.04] transition-all group overflow-hidden relative"
            >
              <div className="flex justify-between items-start mb-4">
                 <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    {stat.icon}
                 </div>
                 <ArrowUpRight size={14} className="text-gray-700" />
              </div>
              <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black tracking-tighter" style={{ color: stat.color }}>{stat.value}</h3>
              <div className="absolute bottom-0 left-0 h-0.5 bg-current opacity-20" style={{ width: '100%', color: stat.color }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Queue Content */}
      <main className="flex-1 px-10 py-6 overflow-hidden flex flex-col relative z-40">
        <div className="bg-white/[0.01] border border-white/5 rounded-[40px] flex flex-col h-full overflow-hidden backdrop-blur-md shadow-2xl">
           
           {/* Filters Bar */}
           <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-6">
                 <h2 className="text-lg font-black tracking-tight">Pending Entities <span className="text-gray-700 mx-2">/</span> <span className="text-xs text-gray-500">Live Pool</span></h2>
                 <div className="flex gap-2">
                    {['All', 'Critical', 'Staged'].map(f => (
                      <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${activeFilter === f ? 'bg-[#12E7FF] text-[#030712] border-[#12E7FF]' : 'border-white/10 text-gray-500 hover:border-white/20'}`}>
                        {f}
                      </button>
                    ))}
                 </div>
              </div>
              <div className="flex items-center gap-2">
                 <Filter size={14} className="text-gray-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Toggle Advanced Filters</span>
              </div>
           </div>

           {/* Entities Table */}
           <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
              <table className="w-full">
                <thead>
                   <tr className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-700 border-b border-white/5 pb-4">
                      <th className="text-left py-4 pl-4 font-black">Entity ID</th>
                      <th className="text-left py-4 font-black">Entity Type</th>
                      <th className="text-left py-4 font-black">Node Origin</th>
                      <th className="text-left py-4 font-black">Risk Index</th>
                      <th className="text-left py-4 font-black">Protocol Status</th>
                      <th className="text-right py-4 pr-4 font-black">Action Hub</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                   {filteredEntities.map((ent, i) => (
                     <motion.tr 
                       key={ent.id}
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.05 }}
                       className="group hover:bg-white/[0.02] transition-all cursor-pointer"
                       onClick={() => setSelectedEntity(ent)}
                     >
                        <td className="py-6 pl-4">
                           <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#12E7FF] shadow-[0_0_8px_#12E7FF]" />
                              <span className="text-xs font-bold font-mono text-gray-300">{ent.id}</span>
                           </div>
                        </td>
                        <td className="py-6 font-bold text-sm">{ent.type}</td>
                        <td className="py-6">
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                              <Database size={14} />
                              {ent.source}
                           </div>
                        </td>
                        <td className="py-6">
                           <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-[9px] font-black uppercase 
                             ${ent.risk === 'Low' ? 'bg-green-500/10 text-green-500' : ent.risk === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'}`}>
                              {ent.risk} Vector
                           </div>
                        </td>
                        <td className="py-6">
                           <span className={`text-[10px] font-black uppercase tracking-widest ${ent.status === 'Verified' ? 'text-[#12E7FF]' : 'text-gray-600'}`}>
                              {ent.status}
                           </span>
                        </td>
                        <td className="py-6 text-right pr-4">
                           <button className="bg-white/5 hover:bg-[#12E7FF] hover:text-[#030712] p-2 rounded-lg transition-all duration-300 group-hover:scale-110">
                              <ChevronRight size={18} />
                           </button>
                        </td>
                     </motion.tr>
                   ))}
                </tbody>
              </table>
           </div>
        </div>
      </main>

      {/* Diagnostic Footer Bar */}
      <footer className="px-10 py-6 border-t border-white/5 flex justify-between items-center relative z-50">
         <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
               <Activity size={14} className="text-[#12E7FF] animate-pulse" />
               <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Global Parity Check: Active</span>
            </div>
            <div className="h-4 w-px bg-white/5" />
            <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Load Factor: 0.42 ops/s</span>
         </div>
         <div className="flex items-center gap-8">
            <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">Node Protocol v9.3-PRO</span>
         </div>
      </footer>

      {/* Selected Entity Drawer (Side Reveal) */}
      <AnimatePresence>
        {selectedEntity && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-full w-[450px] bg-[#030712] border-l border-white/10 z-[100] shadow-[-20px_0_100px_rgba(0,0,0,0.5)] p-12 overflow-y-auto"
          >
             <div className="flex justify-between items-start mb-12">
                <button onClick={() => setSelectedEntity(null)} className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all"><ArrowLeft size={20} /></button>
                <div className="text-right">
                   <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Entity Profile</p>
                   <h3 className="text-2xl font-black tracking-tight">{selectedEntity.id}</h3>
                </div>
             </div>

             <div className="space-y-10">
                <div className="bg-[#12E7FF]/5 border border-[#12E7FF]/20 rounded-3xl p-8 text-center">
                   <Zap size={32} className="text-[#12E7FF] mx-auto mb-4" />
                   <h4 className="font-black text-xl mb-2 italic">Awaiting Authorization</h4>
                   <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Record Parity Score: 0.992</p>
                </div>

                <div className="space-y-6">
                   <h5 className="text-[10px] font-black text-[#12E7FF] uppercase tracking-[0.4em] border-b border-[#12E7FF]/20 pb-2">Record Metadata</h5>
                   <div className="space-y-4">
                      {[
                        { label: 'Entity Type', value: selectedEntity.type },
                        { label: 'Origin Node', value: selectedEntity.source },
                        { label: 'Handshake Time', value: selectedEntity.date },
                        { label: 'Staging Path', value: '/vol/sync/staged/0x421' }
                      ].map((m, i) => (
                        <div key={i} className="flex justify-between items-center text-sm font-bold">
                           <span className="text-gray-600 uppercase text-[10px] tracking-widest">{m.label}</span>
                           <span>{m.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="space-y-4 pt-10">
                   <button onClick={() => handleAuthorize(selectedEntity.id)} className="w-full py-5 bg-[#12E7FF] text-[#030712] font-black rounded-2xl hover:shadow-[0_0_40px_#12E7FF] transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]">
                      Authorize Sync
                      <CheckCircle2 size={20} />
                   </button>
                   <button onClick={() => handleReject(selectedEntity.id)} className="w-full py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all uppercase text-xs tracking-[0.2em]">
                      Reject Record
                   </button>
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

export default PendingEntities;
