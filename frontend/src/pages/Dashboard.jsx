import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Database, 
  Activity, 
  ShieldCheck, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  ArrowUpRight, 
  RefreshCw,
  MoreVertical,
  Layers,
  Zap,
  Globe,
  Plus,
  AlertTriangle,
  ChevronRight,
  HelpCircle,
  Clock,
  ArrowRightLeft,
  Cpu,
  FileSignature,
  History,
  Home,
  CreditCard,
  Compass
} from 'lucide-react';
import toast from 'react-hot-toast';
import Logo from '../components/Logo';
import SEO from '../components/SEO';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleOptimize = () => {
    toast.success('Pulsar Protocol Enabled: Latency reduced by 4ms', {
      icon: '⚡',
      duration: 4000,
    });
  };

  const stats = [
    { label: 'TOTAL SYNCED', value: '2,450', change: '12%', trend: 'up', icon: <Database size={18} />, color: '#12E7FF' },
    { label: 'OPEN CONFLICTS', value: '18', change: 'Requires Review', trend: 'down', icon: <AlertTriangle size={18} />, color: '#F87171' },
    { label: 'ACTIVE NODES', value: '5', change: 'All nodes healthy', trend: 'up', icon: <Zap size={18} />, color: '#10B981' },
    { label: 'SYSTEM HEALTH', value: '99.9%', change: 'Avg Latency 42ms', trend: 'up', icon: <Activity size={18} />, color: '#12E7FF' },
  ];

  const syncJobs = [
    { id: 'SYNC-E92312', route: { s: 'X', t: 'S' }, status: 'Syncing', records: '1,240 / 3,500', progress: 35 },
    { id: 'SYNC-E92311', route: { s: 'H', t: 'X' }, status: 'Complete', records: '892', progress: 100 },
    { id: 'SYNC-E92310', route: { s: 'I', t: 'R' }, status: 'Failed', records: '42 / 120', progress: 0 },
  ];

  const alerts = [
    { type: 'Critical', msg: 'Latency spike in CRM connector', time: '4m ago' },
    { type: 'Warning', msg: 'DLQ growth on Invoice Sync', time: '12m ago' },
  ];

  return (
    <div className="h-screen w-screen bg-[#030712] text-white flex overflow-hidden font-sans selection:bg-[#12E7FF]/30">
      <SEO 
        title="Enterprise Dashboard" 
        description="Monitor your sovereign data nodes, sync health, and active pipelines in real-time." 
      />
      
      {/* Sidebar - Inspired by Reference */}
      <aside className="w-64 bg-[#030712] border-r border-white/5 flex flex-col z-50">
        <div className="p-8 mb-4">
          <Logo light={true} className="scale-90 origin-left" />
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar pb-6">
          <p className="px-4 text-[9px] font-black text-gray-700 uppercase tracking-[0.3em] mb-4 mt-2">Core Protocol</p>
          
          <Link to="/dashboard" className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${activeTab === 'dashboard' ? 'bg-[#12E7FF]/10 text-[#12E7FF] font-bold' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}>
            <LayoutDashboard size={18} />
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link to="/conflicts" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
            <AlertTriangle size={18} />
            <span className="text-sm">Conflicts</span>
          </Link>
          <Link to="/pending" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
            <Layers size={18} />
            <span className="text-sm">Pending</span>
          </Link>
          <Link to="/contracts" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
            <FileSignature size={18} />
            <span className="text-sm">Contracts</span>
          </Link>
          <Link to="/history" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
            <History size={18} />
            <span className="text-sm">Job History</span>
          </Link>

          <p className="px-4 text-[9px] font-black text-gray-700 uppercase tracking-[0.3em] mb-4 mt-8">Organization</p>
          
          <Link to="/pricing" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
            <CreditCard size={18} />
            <span className="text-sm">Pricing & Billing</span>
          </Link>
          <Link to="/onboarding" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
            <Compass size={18} />
            <span className="text-sm">Setup Guide</span>
          </Link>
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
            <Home size={18} />
            <span className="text-sm">Exit to Home</span>
          </Link>

          <p className="px-4 text-[9px] font-black text-gray-700 uppercase tracking-[0.3em] mb-4 mt-8">System</p>
          
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all">
            <Settings size={18} />
            <span className="text-sm">Settings</span>
          </button>
        </nav>

        <div className="p-4 space-y-4">
           {/* Production Grade: Optimization Card */}
           <div className="bg-[#12E7FF]/5 border border-[#12E7FF]/10 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                 <Zap size={14} className="text-[#12E7FF]" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-[#12E7FF]">Optimization Node</span>
              </div>
              <p className="text-[10px] text-gray-500 font-bold mb-4">Enable Pulsar protocol for 4ms latency reduction.</p>
              <button 
                onClick={handleOptimize}
                className="w-full py-2.5 bg-[#12E7FF] text-[#030712] rounded-lg font-black text-[9px] uppercase tracking-[0.2em] hover:shadow-[0_0_15px_#12E7FF] transition-all"
              >
                Deploy Pulsar
              </button>
           </div>

           <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-[10px] font-black border border-white/10">SJ</div>
                 <div>
                    <p className="text-[10px] font-black">Samir Jain</p>
                    <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Admin</p>
                 </div>
              </div>
              <LogOut size={14} className="text-gray-600 hover:text-red-400 cursor-pointer transition-colors" />
           </div>
        </div>
      </aside>

      {/* Main Layout Area */}
      <main className="flex-1 flex flex-col bg-[#020617] relative overflow-hidden">
        
        {/* Animated Background Aura */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#12E7FF]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header Bar */}
        <header className="px-8 py-5 border-b border-white/5 flex justify-between items-center bg-[#020617]/50 backdrop-blur-xl z-40">
           <div>
              <h2 className="text-xl font-black tracking-tight">Good morning, Samir</h2>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-0.5">Here's your sync overview for today.</p>
           </div>

           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all">
                 <Clock size={14} className="text-gray-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Last 7 days</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                 <Bell size={18} className="hover:text-white cursor-pointer transition-colors" />
                 <HelpCircle size={18} className="hover:text-white cursor-pointer transition-colors" />
                 <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-[10px] font-black uppercase">SA</div>
                 <button className="bg-[#12E7FF] text-[#030712] px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest hover:shadow-[0_0_15px_#12E7FF] transition-all flex items-center gap-2">
                    <Plus size={14} />
                    New Sync
                 </button>
              </div>
           </div>
        </header>

        {/* Scrollable Content */}
        <div className="p-8 flex-1 overflow-y-auto custom-scrollbar relative z-30">
          
          {/* Alert Banner - Inspired by Reference */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-between group"
          >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 animate-pulse">
                   <AlertTriangle size={20} />
                </div>
                <div>
                   <p className="text-sm font-bold text-amber-500/90">Conflict Queue requires attention <span className="mx-2 text-white/20">|</span> <span className="text-white">18 open conflicts...</span></p>
                </div>
             </div>
             <button className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-amber-500 flex items-center gap-2 transition-all">
                Review now <ChevronRight size={14} />
             </button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl hover:bg-white/[0.04] hover:border-white/10 transition-all group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{stat.label}</p>
                  <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="flex items-end gap-3">
                   <h3 className="text-3xl font-black tracking-tighter">{stat.value}</h3>
                   <div className={`mb-1.5 flex items-center gap-1 text-[10px] font-black ${stat.label === 'OPEN CONFLICTS' ? 'text-red-400' : 'text-green-400'}`}>
                      {stat.change}
                   </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-current opacity-10 group-hover:opacity-30 transition-all" style={{ width: '100%', color: stat.color }} />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Sync Jobs Table */}
            <div className="lg:col-span-2 bg-white/[0.01] border border-white/5 rounded-[40px] p-8">
               <div className="flex justify-between items-center mb-10 px-2">
                  <h2 className="text-xl font-black tracking-tight">Recent Sync Jobs</h2>
                  <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#12E7FF] hover:underline flex items-center gap-2">
                    View All <ChevronRight size={14} />
                  </button>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                       <tr className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 border-b border-white/5">
                          <th className="pb-4 text-left pl-4">Job ID</th>
                          <th className="pb-4 text-left">Route</th>
                          <th className="pb-4 text-left">Status</th>
                          <th className="pb-4 text-left">Records</th>
                          <th className="pb-4 text-right pr-4">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {syncJobs.map((job, i) => (
                         <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                            <td className="py-6 pl-4 text-xs font-bold text-gray-400">{job.id}</td>
                            <td className="py-6">
                               <div className="flex items-center gap-2">
                                  <span className="w-6 h-6 rounded bg-green-500/10 text-green-500 flex items-center justify-center text-[10px] font-black">{job.route.s}</span>
                                  <ChevronRight size={10} className="text-gray-700" />
                                  <span className="w-6 h-6 rounded bg-[#12E7FF]/10 text-[#12E7FF] flex items-center justify-center text-[10px] font-black">{job.route.t}</span>
                               </div>
                            </td>
                            <td className="py-6">
                               <div className="flex flex-col gap-2 min-w-[120px]">
                                  <div className="flex items-center gap-2">
                                     <div className={`w-1.5 h-1.5 rounded-full ${job.status === 'Syncing' ? 'bg-[#12E7FF] animate-pulse' : job.status === 'Complete' ? 'bg-green-500' : 'bg-red-500'}`} />
                                     <span className={`text-[10px] font-black uppercase tracking-widest ${job.status === 'Syncing' ? 'text-[#12E7FF]' : job.status === 'Complete' ? 'text-green-500' : 'text-red-500'}`}>{job.status}</span>
                                  </div>
                                  {job.status === 'Syncing' && (
                                     <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: `${job.progress}%` }} className="h-full bg-[#12E7FF]" />
                                     </div>
                                  )}
                               </div>
                            </td>
                            <td className="py-6 text-xs font-bold text-gray-500">{job.records}</td>
                            <td className="py-6 text-right pr-4">
                               {job.status === 'Failed' ? (
                                 <button className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Retry</button>
                               ) : (
                                 <button className="text-gray-600 hover:text-white transition-colors"><MoreVertical size={18} /></button>
                               )}
                            </td>
                         </tr>
                       ))}
                    </tbody>
                  </table>
               </div>
            </div>

            {/* Active Alerts Side Panel */}
            <div className="bg-white/[0.01] border border-white/5 rounded-[40px] p-8 flex flex-col">
               <div className="flex items-center gap-3 mb-10">
                  <Bell size={20} className="text-amber-500" />
                  <h2 className="text-xl font-black tracking-tight">Active Alerts</h2>
               </div>

               <div className="flex-1 space-y-4">
                  {alerts.map((alert, i) => (
                    <div key={i} className={`p-5 rounded-2xl border transition-all ${alert.type === 'Critical' ? 'bg-red-500/5 border-red-500/10 hover:border-red-500/30' : 'bg-amber-500/5 border-amber-500/10 hover:border-amber-500/30'}`}>
                       <div className="flex items-center justify-between mb-2">
                          <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded ${alert.type === 'Critical' ? 'bg-red-500 text-white' : 'bg-amber-500 text-[#030712]'}`}>{alert.type}</span>
                          <span className="text-[9px] text-gray-600 font-bold uppercase">{alert.time}</span>
                       </div>
                       <p className="text-xs font-bold text-gray-300 leading-tight">{alert.msg}</p>
                    </div>
                  ))}
               </div>

               <button className="mt-8 w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                  View All Alerts
               </button>
            </div>

          </div>
        </div>

        {/* Footer Status Bar */}
        <footer className="px-8 py-4 border-t border-white/5 flex justify-between items-center bg-[#020617]/80 backdrop-blur-md">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">All 14 mesh nodes reporting nominal heartbeat</span>
           </div>
           <div className="flex items-center gap-6">
              <span className="text-[9px] font-bold text-gray-700 hover:text-[#12E7FF] cursor-pointer transition-colors uppercase tracking-widest">Status Page</span>
              <span className="text-[9px] font-bold text-gray-700 hover:text-[#12E7FF] cursor-pointer transition-colors uppercase tracking-widest">Privacy Policy</span>
              <span className="text-[9px] font-bold text-gray-700 hover:text-[#12E7FF] cursor-pointer transition-colors uppercase tracking-widest">Terms</span>
           </div>
        </footer>
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

export default Dashboard;
