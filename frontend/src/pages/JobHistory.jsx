import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  History, 
  Search, 
  Filter, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Download, 
  RotateCcw, 
  ChevronRight,
  Database,
  ArrowRight,
  Clock,
  Activity,
  FileText,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import Logo from '../components/Logo';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';

const JobHistory = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState(sessionStorage.getItem('jobFilter') || 'All');

  const handleFilterChange = (f) => {
    setFilter(f);
    sessionStorage.setItem('jobFilter', f);
  };

  const stats = [
    { label: 'TOTAL EXECUTIONS', value: '14,202', icon: <History size={18} />, color: '#12E7FF' },
    { label: 'SUCCESS RATE', value: '99.8%', icon: <CheckCircle2 size={18} />, color: '#10B981' },
    { label: 'AVG DURATION', value: '1.2s', icon: <Clock size={18} />, color: '#FACC15' },
    { label: 'DATA THROUGHPUT', value: '4.2 TB', icon: <Activity size={18} />, color: '#12E7FF' },
  ];

  const jobs = [
    { id: 'JOB-9921', name: 'CRM-ERP Sync Master', status: 'Success', records: '12,000', duration: '840ms', timestamp: '2024-04-29 16:20', source: 'Salesforce', target: 'SAP S/4HANA' },
    { id: 'JOB-9920', name: 'Inventory Update', status: 'Partial', records: '4,500', duration: '1.2s', timestamp: '2024-04-29 16:15', source: 'Shopify Node', target: 'Internal DB' },
    { id: 'JOB-9919', name: 'Global Tax Refresh', status: 'Failed', records: '0', duration: '4.5s', timestamp: '2024-04-29 16:10', source: 'External API', target: 'Cloud Storage' },
    { id: 'JOB-9918', name: 'Customer Batch 04', status: 'Success', records: '890', duration: '120ms', timestamp: '2024-04-29 16:05', source: 'Excel Node', target: 'Salesforce' },
    { id: 'JOB-9917', name: 'Legacy Data Migration', status: 'Success', records: '1.2M', duration: '45m', timestamp: '2024-04-29 15:30', source: 'On-Prem DB', target: 'Azure Cloud' },
  ];

  const filteredJobs = filter === 'All' 
    ? jobs 
    : jobs.filter(j => j.status === filter);

  const handleReRun = (id) => {
    toast.success(`Job ${id} re-initialized in background protocol.`, {
      icon: '🔄',
    });
  };

  const handleExport = () => {
    const csv = ['Job ID,Name,Status,Records,Duration,Timestamp,Source,Target',
      ...jobs.map(j => `${j.id},${j.name},${j.status},${j.records},${j.duration},${j.timestamp},${j.source},${j.target}`)
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'sync_history.csv'; a.click();
    URL.revokeObjectURL(url);
    toast.success('Sync ledger exported as CSV');
  };

  return (
    <div className="space-y-8 relative pb-20">
      <SEO 
        title="Historical Sync Ledger" 
        description="Audit every data sync operation across your global enterprise nodes with BYND." 
      />

      {/* Page Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tight uppercase italic text-white">Historical <span className="text-[#12E7FF]">Sync Ledger</span></h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Immutable Audit Trail v4.0</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64 group">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#12E7FF] transition-colors" />
            <input 
              type="text" 
              placeholder="SEARCH NODE / JOB ID..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-[10px] font-bold uppercase tracking-widest text-white focus:outline-none focus:border-[#12E7FF]/50 transition-all"
            />
          </div>
          <button 
            onClick={handleExport}
            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
          >
            <Download size={16} className="text-gray-400 group-hover:text-[#12E7FF]" />
            <span className="text-[10px] font-black uppercase tracking-widest">Export Ledger</span>
          </button>
        </div>
      </div>

      {/* Stats Summary Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/[0.02] border border-white/5 p-6 rounded-[32px] hover:bg-white/[0.04] transition-all group"
          >
             <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-white/5 rounded-xl text-gray-400 group-hover:text-[#12E7FF] transition-colors">
                   {stat.icon}
                </div>
                <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">{stat.label}</p>
             </div>
             <h3 className="text-3xl font-black tracking-tighter" style={{ color: stat.color }}>{stat.value}</h3>
          </motion.div>
        ))}
      </section>

      {/* Main Ledger Table */}
      <main className="flex-1 px-10 pb-10 overflow-hidden flex flex-col relative z-40">
        <div className="bg-white/[0.01] border border-white/5 rounded-[40px] flex flex-col h-full overflow-hidden backdrop-blur-xl shadow-2xl">
           
           {/* Table Header / Filters */}
           <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                 <h2 className="text-lg font-black tracking-tight uppercase">Execution History</h2>
                 <div className="flex gap-2 ml-4">
                    {['All', 'Success', 'Failed'].map(f => (
                      <button 
                        key={f}
                        onClick={() => handleFilterChange(f)}
                        className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border
                          ${filter === f ? 'bg-[#12E7FF] text-[#030712] border-[#12E7FF]' : 'border-white/10 text-gray-500 hover:border-white/20'}`}
                      >
                        {f}
                      </button>
                    ))}
                 </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                 <Filter size={14} />
                 <span className="text-[10px] font-black uppercase tracking-widest">Toggle Column View</span>
                 <ChevronDown size={14} />
              </div>
           </div>

           {/* Scrollable Table Content */}
           <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6">
              <table className="w-full">
                <thead>
                   <tr className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-700 border-b border-white/5">
                      <th className="text-left py-6 pl-4">Job Protocol ID</th>
                      <th className="text-left py-6">Sync Path</th>
                      <th className="text-left py-6">Execution Stats</th>
                      <th className="text-left py-6">Timestamp</th>
                      <th className="text-left py-6">Status</th>
                      <th className="text-right py-6 pr-4">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                   {filteredJobs.map((job, i) => (
                     <motion.tr 
                       key={job.id}
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.05 }}
                       className="group hover:bg-white/[0.02] transition-all cursor-pointer"
                     >
                        <td className="py-6 pl-4">
                           <div className="flex flex-col">
                              <span className="text-xs font-bold text-gray-300 group-hover:text-[#12E7FF] transition-colors">{job.name}</span>
                              <span className="text-[9px] font-black font-mono text-gray-600 uppercase tracking-widest">{job.id}</span>
                           </div>
                        </td>
                        <td className="py-6">
                           <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold text-gray-500">{job.source}</span>
                              <ArrowRight size={12} className="text-gray-700" />
                              <span className="text-[10px] font-bold text-[#12E7FF]">{job.target}</span>
                           </div>
                        </td>
                        <td className="py-6">
                           <div className="flex flex-col">
                              <span className="text-xs font-bold">{job.records} Records</span>
                              <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest italic">{job.duration} Duration</span>
                           </div>
                        </td>
                        <td className="py-6">
                           <div className="flex items-center gap-2 text-gray-500">
                              <Clock size={12} />
                              <span className="text-[10px] font-bold">{job.timestamp}</span>
                           </div>
                        </td>
                        <td className="py-6">
                           <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border
                             ${job.status === 'Success' ? 'bg-green-500/10 text-green-500 border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]' 
                               : job.status === 'Failed' ? 'bg-red-500/10 text-red-500 border-red-500/20' 
                               : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                              {job.status === 'Success' ? <CheckCircle2 size={12} /> : job.status === 'Failed' ? <XCircle size={12} /> : <AlertCircle size={12} />}
                              {job.status}
                           </div>
                        </td>
                        <td className="py-6 text-right pr-4">
                           <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => handleReRun(job.id)} className="p-2 bg-white/5 hover:bg-[#12E7FF] hover:text-[#030712] rounded-lg transition-all"><RotateCcw size={14} /></button>
                              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-all"><FileText size={14} /></button>
                           </div>
                        </td>
                     </motion.tr>
                   ))}
                </tbody>
              </table>
           </div>

           {/* Table Footer / Info */}
           <div className="p-6 border-t border-white/5 bg-white/[0.01] flex justify-between items-center">
              <div className="flex items-center gap-4">
                 <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest italic">Showing {filteredJobs.length} of {jobs.length} Historical Logs</p>
              </div>
              <div className="flex gap-2">
                 <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-gray-500">Previous</button>
                 <button className="px-6 py-2 bg-[#12E7FF] text-[#030712] rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_20px_#12E7FF] transition-all">Next</button>
              </div>
           </div>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(18, 231, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(18, 231, 255, 0.3); }
      `}</style>
    </div>
  );
};

export default JobHistory;
