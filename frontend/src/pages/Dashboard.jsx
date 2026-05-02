import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Activity, 
  ArrowUpRight, 
  ChevronRight, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  Bell,
  Clock,
  Plus
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import SEO from '../components/SEO';
import { useAnalytics } from '../hooks/useAnalytics';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { user } = useAuth();
  const { trackEvent } = useAnalytics();
  const navigate = useNavigate();

  const stats = [
    { label: 'GLOBAL PARITY', value: '99.8%', icon: <Activity size={18} />, color: '#12E7FF' },
    { label: 'ACTIVE NODES', value: '14', icon: <Database size={18} />, color: '#10B981' },
    { label: 'SYNC LATENCY', value: '14ms', icon: <Clock size={18} />, color: '#FACC15' },
    { label: 'THROUGHPUT', value: '4.2 TB', icon: <Zap size={18} />, color: '#A78BFA' },
  ];

  return (
    <div className="space-y-8 pb-20">
      <SEO title="Sovereign Dashboard" description="Enterprise-grade data sync command center." />

      {/* Sovereign Welcome Section */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#12E7FF]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 backdrop-blur-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8">
            <Shield size={120} className="text-white/5 -rotate-12" />
          </div>
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-3 mb-6">
               <div className="px-3 py-1 bg-[#12E7FF]/10 border border-[#12E7FF]/20 rounded-full">
                  <span className="text-[10px] font-black text-[#12E7FF] uppercase tracking-[0.3em]">Protocol Alpha v4.2</span>
               </div>
               {user?.role === 'admin' && (
                  <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                     <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Sovereign Access</span>
                  </div>
               )}
            </div>
            <h1 className="text-5xl font-black tracking-tight mb-4 leading-tight">Welcome back, <br/><span className="text-[#12E7FF] italic">{user?.name || 'Architect'}</span></h1>
            <p className="text-gray-400 text-lg font-medium max-w-lg leading-relaxed">System status is optimal. All 14 global nodes are currently in parity. Your mesh network is operating at 99.8% efficiency.</p>
            
            <div className="flex items-center gap-4 mt-10">
               <button onClick={() => navigate('/contracts')} className="px-8 py-4 bg-[#12E7FF] text-[#030712] rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_#12E7FF] transition-all flex items-center gap-2">
                  <Plus size={18} />
                  New Sync Pipeline
               </button>
               <button 
                 onClick={() => {
                   trackEvent('Ledger Exported', 'Audit', 'User Dashboard', 1);
                   toast.success('Exporting system ledger: audit_0x42.pdf');
                 }} 
                 className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
               >
                  Export Ledger
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Stats & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Stats Column */}
        <div className="lg:col-span-2 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 text-gray-400 group-hover:text-white transition-colors" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                    <ArrowUpRight size={16} className="text-gray-700 group-hover:text-[#12E7FF] transition-colors" />
                  </div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                  <h3 className="text-4xl font-black tracking-tight">{stat.value}</h3>
                </motion.div>
              ))}
           </div>

           {/* Recent Activity Section */}
           <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black tracking-tight uppercase italic">Recent <span className="text-[#12E7FF]">Sync Activity</span></h3>
                <button onClick={() => navigate('/history')} className="text-[10px] font-black text-[#12E7FF] uppercase tracking-widest hover:underline">View All Ledger Logs</button>
              </div>
              
              <div className="space-y-4">
                  {[
                    { id: 'JOB-9921', node: 'Salesforce → SAP', status: 'In Progress', type: 'Bidirectional', time: '2 mins ago' },
                    { id: 'JOB-9920', node: 'Excel → Invoicing', status: 'Conflict', type: 'Unidirectional', time: '14 mins ago' },
                    { id: 'JOB-9919', node: 'Hubspot → CRM', status: 'Success', type: 'Bidirectional', time: '1 hr ago' },
                  ].map((job, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-[24px] hover:border-white/10 transition-all cursor-pointer group">
                       <div className="flex items-center gap-6">
                          <div className={`w-3 h-3 rounded-full ${job.status === 'Success' ? 'bg-green-500 shadow-[0_0_10px_#10B981]' : job.status === 'Conflict' ? 'bg-red-500 shadow-[0_0_10px_#EF4444]' : 'bg-[#12E7FF] animate-pulse shadow-[0_0_10px_#12E7FF]'}`} />
                          <div>
                             <p className="text-sm font-black tracking-tight group-hover:text-[#12E7FF] transition-colors">{job.node}</p>
                             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{job.type} Protocol • {job.id}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{job.status}</p>
                          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">{job.time}</p>
                       </div>
                    </div>
                  ))}
              </div>
           </div>
        </div>

        {/* Side Panel: System Pulse */}
        <div className="space-y-8">
           <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 h-full">
              <div className="flex items-center gap-3 mb-10">
                 <Bell size={20} className="text-amber-500" />
                 <h3 className="text-xl font-black tracking-tight uppercase">System Pulse</h3>
              </div>
              
              <div className="space-y-6">
                 {[
                   { label: 'Security Handshake', status: 'Verified', color: '#10B981' },
                   { label: 'Node Distribution', status: 'Optimal', color: '#12E7FF' },
                   { label: 'Latency Node B', status: 'Warning', color: '#FACC15' },
                 ].map((item, i) => (
                   <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</span>
                        <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded" style={{ color: item.color, backgroundColor: `${item.color}20` }}>{item.status}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-current opacity-30" style={{ width: i === 2 ? '40%' : '100%', color: item.color }} />
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-[#12E7FF]/10 to-transparent border border-[#12E7FF]/20 rounded-3xl">
                 <h4 className="text-sm font-black mb-3">Sovereign Pro</h4>
                 <p className="text-[10px] text-gray-400 font-bold leading-relaxed mb-6">Upgrade to unlock AI conflict resolution and unlimited node bridges.</p>
                 <button 
                   onClick={() => {
                     trackEvent('Upgrade Initiated', 'Pricing', 'Side Panel', 1);
                     navigate('/pricing');
                   }} 
                   className="w-full py-3 bg-[#12E7FF] text-[#030712] rounded-xl font-black text-[10px] uppercase tracking-widest hover:shadow-[0_0_20px_#12E7FF] transition-all"
                 >
                   Upgrade Protocol
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
