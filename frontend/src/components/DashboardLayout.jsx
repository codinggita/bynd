import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  Layers, 
  FileSignature, 
  History, 
  CreditCard, 
  Compass, 
  Home, 
  Settings as SettingsIcon, 
  Zap, 
  LogOut, 
  Clock, 
  Bell, 
  HelpCircle, 
  Plus 
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useAnalytics } from '../hooks/useAnalytics';
import Logo from './Logo';
import toast from 'react-hot-toast';

const DashboardLayout = () => {
  const { user, handleLogout } = useAuth();
  const { trackEvent } = useAnalytics();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname.split('/')[1] || 'dashboard';

  const handleOptimize = () => {
    trackEvent('System Optimization', 'Performance', 'Layout Sidebar', 1);
    toast.success('Pulsar Protocol Enabled: Latency reduced by 4ms', {
      icon: '⚡',
      duration: 4000,
    });
  };

  return (
    <div className="h-screen w-screen bg-[#030712] text-white flex overflow-hidden font-sans selection:bg-[#12E7FF]/30">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#030712] border-r border-white/5 flex flex-col z-50">
        <div className="p-8 mb-4">
          <Link to="/">
            <Logo light={true} className="scale-90 origin-left hover:opacity-80 transition-opacity" />
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar pb-6">
          <p className="px-4 text-[9px] font-black text-gray-700 uppercase tracking-[0.3em] mb-4 mt-2">Core Protocol</p>
          
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
            { id: 'conflicts', label: 'Conflicts', icon: AlertTriangle, path: '/conflicts' },
            { id: 'pending', label: 'Pending', icon: Layers, path: '/pending' },
            { id: 'contracts', label: 'Contracts', icon: FileSignature, path: '/contracts' },
            { id: 'history', label: 'Job History', icon: History, path: '/history' },
          ].map((item) => (
            <Link 
              key={item.id}
              to={item.path} 
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${activeTab === item.id ? 'bg-[#12E7FF]/10 text-[#12E7FF] font-bold shadow-[0_0_15px_rgba(18,231,255,0.05)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
            >
              <item.icon size={18} />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}

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
          
          <Link to="/settings" className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-[#12E7FF]/10 text-[#12E7FF] font-bold' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}>
            <SettingsIcon size={18} />
            <span className="text-sm">Settings</span>
          </Link>
        </nav>

        <div className="p-4 space-y-4">
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
              <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#12E7FF] text-[#030712] flex items-center justify-center font-black text-xs shrink-0">
                     {user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'BY'}
                  </div>
                  <div className="flex-1 min-w-0">
                     <p className="text-xs font-black truncate">{user?.name || 'Loading Node...'}</p>
                     <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest truncate">{user?.role || 'Sovereign Node'}</p>
                  </div>
               </div>
               <LogOut 
                 size={14} 
                 className="text-gray-600 hover:text-red-400 cursor-pointer transition-colors shrink-0" 
                 onClick={() => setShowLogoutModal(true)}
               />
            </div>
        </div>
      </aside>

      {/* Main Layout Area */}
      <main className="flex-1 flex flex-col bg-[#020617] relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#12E7FF]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header Bar */}
        <header className="px-8 py-5 border-b border-white/5 flex justify-between items-center bg-[#020617]/50 backdrop-blur-xl z-40">
           <div>
              <h2 className="text-xl font-black tracking-tight capitalize">{activeTab.replace('-', ' ')}: {user?.name || 'Initializing...'}</h2>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-0.5">Sovereign Data Mesh Overview</p>
           </div>

           <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all">
                 <Clock size={14} className="text-gray-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Last 7 days</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                 <Bell size={18} className="hover:text-white cursor-pointer transition-colors" />
                 <HelpCircle size={18} className="hover:text-white cursor-pointer transition-colors" />
                 <Link to="/settings" className="w-8 h-8 rounded-full bg-[#12E7FF] text-[#030712] border border-white/10 flex items-center justify-center text-[10px] font-black uppercase hover:scale-110 transition-transform">
                     {user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'B'}
                 </Link>
                 <button onClick={() => navigate('/contracts')} className="hidden md:flex bg-[#12E7FF] text-[#030712] px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest hover:shadow-[0_0_15px_#12E7FF] transition-all items-center gap-2">
                    <Plus size={14} />
                    New Sync
                 </button>
              </div>
           </div>
        </header>

        {/* Scrollable Content */}
        <div className="p-8 flex-1 overflow-y-auto custom-scrollbar relative z-30">
          <Outlet />
        </div>
      </main>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center"
            onClick={() => setShowLogoutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0f1a] border border-white/10 rounded-3xl p-10 max-w-md w-full mx-4 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <LogOut size={28} className="text-red-400" />
                </div>
                <h3 className="text-xl font-black tracking-tight text-white mb-2">Terminate Connection?</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-8">Your sovereign session will be securely closed.</p>
                <div className="flex gap-4 w-full">
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="flex-1 py-3.5 bg-white/5 border border-white/10 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                        handleLogout();
                        navigate('/auth');
                    }}
                    className="flex-1 py-3.5 bg-red-500 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:bg-red-600 transition-all"
                  >
                    Terminate
                  </button>
                </div>
              </div>
            </motion.div>
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

export default DashboardLayout;
