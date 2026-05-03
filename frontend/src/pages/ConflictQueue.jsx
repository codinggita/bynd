import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  ArrowLeftRight, 
  Check, 
  X, 
  GitMerge, 
  ChevronRight, 
  Filter, 
  Zap, 
  ArrowLeft,
  Database,
  Search,
  Clock,
  LayoutGrid,
  List,
  AlertTriangle,
  History
} from 'lucide-react';
import Logo from '../components/Logo';
import toast from 'react-hot-toast';

const defaultConflicts = [
  {
    id: 'CF-9321',
    entity: 'Customer Record',
    nodeA: { name: 'Salesforce CRM', value: 'Jonathan Doe (Verified)', timestamp: '2024-04-29 12:00:01', health: 98 },
    nodeB: { name: 'Excel Hub', value: 'John Doe', timestamp: '2024-04-29 11:59:45', health: 100 },
    field: 'Full_Name',
    severity: 'High',
    heuristic: 'Keep Node A (Most Recent)',
    status: 'pending'
  },
  {
    id: 'CF-9322',
    entity: 'Invoice #8211',
    nodeA: { name: 'SAP ERP', value: '$12,400.00', timestamp: '2024-04-29 10:30:00', health: 100 },
    nodeB: { name: 'Oracle DB', value: '$12,450.00', timestamp: '2024-04-29 10:35:00', health: 96 },
    field: 'Total_Amount',
    severity: 'Critical',
    heuristic: 'Manual Review Required',
    status: 'pending'
  }
];

const ConflictQueue = () => {
  const [viewMode, setViewMode] = useState('detail');
  const [selectedConflict, setSelectedConflict] = useState(0);

  const [conflicts, setConflicts] = useState(() => {
    const saved = localStorage.getItem('conflicts');
    return saved ? JSON.parse(saved) : defaultConflicts;
  });

  useEffect(() => {
    localStorage.setItem('conflicts', JSON.stringify(conflicts));
  }, [conflicts]);

  const handleResolve = (id, winner) => {
    setConflicts(prev => prev.map(c => 
      c.id === id ? { ...c, status: `resolved-${winner}` } : c
    ));
    toast.success(`Conflict ${id} resolved: Node ${winner.toUpperCase()} authorized`);
  };

  const handleDismiss = (id) => {
    setConflicts(prev => prev.map(c => 
      c.id === id ? { ...c, status: 'dismissed' } : c
    ));
    toast.success(`Conflict ${id} dismissed from queue`);
  };

  const pendingConflicts = conflicts.filter(c => c.status === 'pending');
  const current = pendingConflicts[selectedConflict] || pendingConflicts[0];

  return (
    <div className="space-y-8 relative pb-20">
      
      {/* Page Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tight uppercase italic text-white">Conflict <span className="text-[#12E7FF]">Resolution Protocol</span></h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">System Level Anomaly Management</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#12E7FF]/10 px-4 py-2 rounded-xl border border-[#12E7FF]/20 flex items-center gap-3">
             <ShieldAlert size={16} className="text-[#12E7FF]" />
             <span className="text-[10px] font-black text-[#12E7FF] uppercase tracking-widest">{pendingConflicts.length} Active Anomalies</span>
          </div>
          <div className="flex bg-white/5 rounded-xl p-1 border border-white/10">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-[#12E7FF] text-[#030712]' : 'text-gray-500 hover:text-white'}`}
            >
              <LayoutGrid size={16} />
            </button>
            <button 
              onClick={() => setViewMode('detail')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'detail' ? 'bg-[#12E7FF] text-[#030712]' : 'text-gray-500 hover:text-white'}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative z-40 bg-white/[0.02] border border-white/5 rounded-[32px]">
        
        {/* Left Sidebar: Conflict List */}
        <div className="w-96 border-r border-white/5 flex flex-col bg-[#030712]/30 backdrop-blur-md">
           <div className="p-6 border-b border-white/5">
              <div className="relative group">
                 <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#12E7FF] transition-colors" />
                 <input type="text" placeholder="Search by Record ID..." className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs outline-none focus:border-[#12E7FF]/30 transition-all" />
              </div>
           </div>
           <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
              {pendingConflicts.length === 0 ? (
                <div className="text-center py-20 text-gray-600">
                  <Check size={40} className="mx-auto mb-4 text-green-500" />
                  <p className="font-black uppercase tracking-widest text-sm">All Conflicts Resolved</p>
                  <p className="text-[10px] mt-2">Zero anomalies in queue</p>
                </div>
              ) : pendingConflicts.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedConflict(i)}
                  className={`w-full p-6 rounded-3xl border text-left transition-all duration-500 group
                    ${selectedConflict === i 
                      ? 'bg-[#12E7FF]/10 border-[#12E7FF]/30 shadow-[0_0_30px_rgba(18,231,255,0.05)]' 
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                    }`}
                >
                  <div className="flex justify-between items-start mb-3">
                     <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{c.id}</span>
                     <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest 
                       ${c.severity === 'Critical' ? 'bg-red-500 text-white' : 'bg-amber-500 text-[#030712]'}`}>
                       {c.severity}
                     </span>
                  </div>
                  <h3 className="font-black text-base mb-1 tracking-tight group-hover:text-[#12E7FF] transition-colors">{c.entity}</h3>
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-4">Conflict in {c.field}</p>
                  <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                     <Clock size={12} />
                     <span className="text-[9px] font-black">{c.nodeA.timestamp}</span>
                  </div>
                </button>
              ))}
           </div>
        </div>

        {/* Right Area: Diffing Engine */}
        <section className="flex-1 p-10 overflow-y-auto custom-scrollbar flex flex-col items-center">
           {!current ? (
             <div className="h-full flex flex-col items-center justify-center text-center">
               <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-3xl flex items-center justify-center mb-8">
                 <Check size={40} className="text-green-400" />
               </div>
               <h2 className="text-3xl font-black tracking-tight mb-4">Zero Anomalies</h2>
               <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">All conflicts have been resolved</p>
               <p className="text-gray-600 text-xs mb-10">System parity is at 100%. No manual intervention required.</p>
               <Link to="/dashboard" className="px-10 py-4 bg-[#12E7FF] text-[#030712] rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(18,231,255,0.4)] transition-all">
                 Return to Dashboard
               </Link>
             </div>
           ) : (
           <AnimatePresence mode="wait">
             <motion.div
               key={current.id}
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.98 }}
               className="w-full max-w-5xl space-y-10"
             >
                {/* Visual Header */}
                <div className="flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-[#12E7FF]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#12E7FF]/20">
                      <ShieldAlert size={32} className="text-[#12E7FF]" />
                   </div>
                   <h2 className="text-4xl font-black tracking-tighter mb-2 italic">Analyzing <span className="text-[#12E7FF]">Handshake Failure</span></h2>
                   <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">Entity: {current.entity} | Parity Mismatch detected in real-time</p>
                </div>

                {/* Diff Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                   {/* Connection Line */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl group">
                         <ArrowLeftRight size={24} className="text-[#12E7FF] animate-pulse" />
                      </div>
                   </div>

                   {/* Node A */}
                   <div className="bg-white/[0.02] border border-white/5 rounded-[48px] p-10 hover:bg-white/[0.04] transition-all">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="w-10 h-10 bg-[#12E7FF] rounded-xl flex items-center justify-center font-black text-[#030712]">A</div>
                         <div>
                            <h4 className="font-black text-lg">{current.nodeA.name}</h4>
                            <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Source Node Status: Stable</p>
                         </div>
                      </div>
                      <div className="space-y-6">
                         <div>
                            <p className="text-[10px] text-[#12E7FF] font-black uppercase tracking-widest mb-2 italic">Current Value</p>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 font-bold text-xl text-white">
                               {current.nodeA.value}
                            </div>
                         </div>
                         <div className="flex justify-between items-center text-[10px] text-gray-500 font-black uppercase tracking-widest pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2"><Clock size={12} /> {current.nodeA.timestamp}</div>
                            <div className="flex items-center gap-2"><Zap size={12} className="text-green-500" /> Integrity {current.nodeA.health}%</div>
                         </div>
                      </div>
                      <button onClick={() => handleResolve(current.id, 'a')} className="w-full mt-10 py-4 bg-[#12E7FF] text-[#030712] font-black rounded-2xl hover:shadow-[0_10px_40px_rgba(18,231,255,0.3)] transition-all flex items-center justify-center gap-3 group">
                         AUTHORIZE NODE A
                         <Check size={20} className="group-hover:scale-125 transition-transform" />
                      </button>
                   </div>

                   {/* Node B */}
                   <div className="bg-white/[0.02] border border-white/5 rounded-[48px] p-10 hover:bg-white/[0.04] transition-all">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-black text-white">B</div>
                         <div>
                            <h4 className="font-black text-lg">{current.nodeB.name}</h4>
                            <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Target Node Status: Syncing</p>
                         </div>
                      </div>
                      <div className="space-y-6">
                         <div>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2 italic">Mismatch Value</p>
                            <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/20 font-bold text-xl text-red-400">
                               {current.nodeB.value}
                            </div>
                         </div>
                         <div className="flex justify-between items-center text-[10px] text-gray-500 font-black uppercase tracking-widest pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2"><Clock size={12} /> {current.nodeB.timestamp}</div>
                            <div className="flex items-center gap-2"><Zap size={12} className="text-amber-500" /> Integrity {current.nodeB.health}%</div>
                         </div>
                      </div>
                      <button onClick={() => handleResolve(current.id, 'b')} className="w-full mt-10 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
                         AUTHORIZE NODE B
                         <Check size={20} className="group-hover:scale-125 transition-transform" />
                      </button>
                   </div>
                </div>

                {/* AI Heuristic Action Bar */}
                <div className="bg-[#12E7FF]/10 border border-[#12E7FF]/20 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-6 text-center md:text-left">
                      <div className="w-14 h-14 rounded-full bg-[#12E7FF] flex items-center justify-center shadow-[0_0_30px_#12E7FF]">
                         <Zap size={24} className="text-[#030712]" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#12E7FF] uppercase tracking-[0.4em] mb-1">BYND Intelligence Engine</p>
                         <h4 className="text-xl font-black tracking-tight">Suggestion: <span className="text-white italic">{current.heuristic}</span></h4>
                      </div>
                   </div>
                   <div className="flex gap-4 w-full md:w-auto">
                      <button onClick={() => handleResolve(current.id, 'a')} className="flex-1 md:flex-none px-10 py-4 bg-[#030712] text-white font-black rounded-2xl border border-white/10 hover:border-[#12E7FF] transition-all flex items-center justify-center gap-3 group">
                         <GitMerge size={20} />
                         MERGE RECORDS
                      </button>
                      <button onClick={() => handleDismiss(current.id)} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-500 hover:text-white transition-all"><X size={24} /></button>
                   </div>
                </div>

                {/* Global Resolution History */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                   <div className="bg-white/[0.01] border border-white/5 p-6 rounded-3xl flex items-center gap-4">
                      <History size={20} className="text-gray-600" />
                      <div>
                         <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Last Resolution</p>
                         <p className="text-xs font-bold">Node A (Jonathan Doe) @ 12:44 PM</p>
                      </div>
                   </div>
                   <div className="bg-white/[0.01] border border-white/5 p-6 rounded-3xl flex items-center gap-4">
                      <AlertTriangle size={20} className="text-amber-500" />
                      <div>
                         <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Global Conflict Rate</p>
                         <p className="text-xs font-bold">0.04% in last 24h</p>
                      </div>
                   </div>
                   <div className="bg-white/[0.01] border border-white/5 p-6 rounded-3xl flex items-center gap-4">
                      <GitMerge size={20} className="text-blue-500" />
                      <div>
                         <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Auto-Merge Enabled</p>
                         <p className="text-xs font-bold text-blue-400">Heuristics Protocol v4.2</p>
                      </div>
                   </div>
                </div>

             </motion.div>
           </AnimatePresence>
           )}
        </section>
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

export default ConflictQueue;
