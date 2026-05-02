import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Shield, 
  Bell, 
  Key, 
  Globe, 
  CreditCard, 
  Check, 
  ChevronRight,
  Monitor,
  ArrowLeft,
  Camera,
  Search,
  Lock,
  Zap,
  Cpu
} from 'lucide-react';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';
import { getProfile, updateProfile as updateProfileApi } from '../services/api';
import { validateFile, fileToBase64 } from '../utils/fileHandlers';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [user, setUser] = useState(null);
  const [twoFA, setTwoFA] = useState(true);
  const [notifications, setNotifications] = useState({ syncFailures: true, latency: true, auditLogs: true });
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getProfile();
        setUser(res.data.user);
      } catch (err) {
        toast.error('Session expired. Please re-authenticate.');
        navigate('/auth');
      }
    };
    fetchUser();
  }, [navigate]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const inputs = document.querySelectorAll('input[data-setting]');
      const data = {};
      inputs.forEach(input => {
        data[input.name] = input.value;
      });

      const res = await updateProfileApi(data);
      setUser(res.data.user);
      toast.success('Configuration Synchronized Successfully');
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Failed to save configuration');
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = async (file) => {
    const validation = validateFile(file);
    if (!validation.valid) {
      toast.error(validation.error);
      return;
    }

    try {
      const base64 = await fileToBase64(file);
      setProfileImage(base64);
      localStorage.setItem('profileImage', base64);
      toast.success('Identity Avatar Synchronized');
    } catch (err) {
      toast.error('Failed to process image');
    }
  };

  const tabs = [
    { id: 'profile', label: 'Identity Profile', icon: User },
    { id: 'security', label: 'Security Protocols', icon: Shield },
    { id: 'notifications', label: 'Notification Vectors', icon: Bell },
    { id: 'billing', label: 'Billing & Node Quota', icon: CreditCard },
  ];

  const SettingCard = ({ title, description, children }) => (
    <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 backdrop-blur-3xl">
      <div className="mb-10">
        <h3 className="text-2xl font-black tracking-tight mb-2 text-white italic">{title}</h3>
        <p className="text-gray-500 font-medium text-sm tracking-widest uppercase">{description}</p>
      </div>
      {children}
    </div>
  );

  const InputField = ({ label, type = 'text', value, placeholder, name }) => (
    <div className="space-y-3">
      <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] ml-1">{label}</label>
      <input
        type={type}
        name={name}
        data-setting
        defaultValue={value}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:border-[#12E7FF] focus:bg-white/[0.05] transition-all outline-none"
      />
    </div>
  );

  return (
    <div className="space-y-8 relative pb-20">
      <SEO 
        title="Command Center Settings" 
        description="Configure your sovereign node identity, security protocols, and notification vectors." 
      />

      {/* Page Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tight uppercase italic text-white">Command <span className="text-[#12E7FF]">Center Settings</span></h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Node Governance & Security v4.0</p>
        </div>

        <div className="flex items-center gap-4">
           <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Account Status: Fully Authorized</span>
           </div>
           <button 
             onClick={handleSave}
             disabled={isSaving}
             className="bg-[#12E7FF] text-[#030712] px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_#12E7FF] transition-all disabled:opacity-50 flex items-center gap-2"
           >
             {isSaving ? <Cpu className="animate-spin" size={14} /> : <Check size={14} />}
             {isSaving ? 'Syncing...' : 'Save Configuration'}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-4">
           <nav className="space-y-2">
             {tabs.map((tab) => {
               const Icon = tab.icon;
               return (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`w-full flex items-center justify-between px-6 py-5 rounded-[24px] transition-all duration-300 group ${activeTab === tab.id ? 'bg-[#12E7FF]/10 text-[#12E7FF] border border-[#12E7FF]/20 shadow-[0_0_20px_rgba(18,231,255,0.05)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent'}`}
                 >
                   <div className="flex items-center gap-4">
                     <Icon size={18} className={activeTab === tab.id ? 'text-[#12E7FF]' : 'text-gray-500'} />
                     <span className="text-sm font-bold tracking-tight">{tab.label}</span>
                   </div>
                   {activeTab === tab.id && <ChevronRight size={14} />}
                 </button>
               );
             })}
           </nav>

           <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px]">
              <div className="flex items-center gap-3 mb-4">
                 <Monitor size={14} className="text-[#12E7FF]" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Node Status</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#10B981]" />
                 <span className="text-xs font-black uppercase text-white tracking-widest">Encrypted & Online</span>
              </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
             >
                {activeTab === 'profile' && (
                  <SettingCard title="Identity Profile" description="Manage your personal information across the BYND ecosystem.">
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-10 pb-10 border-b border-white/5">
                       <div className="relative group cursor-pointer">
                          <div className="w-32 h-32 rounded-[32px] bg-gradient-to-br from-[#12E7FF]/20 to-transparent flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-[#12E7FF]/50 transition-all">
                             {profileImage ? (
                               <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                             ) : (
                               <Camera size={32} className="text-gray-600 group-hover:text-[#12E7FF] transition-colors" />
                             )}
                          </div>
                          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => handleImageUpload(e.target.files[0])} />
                       </div>
                       <div className="space-y-2 flex-1">
                          <h4 className="text-lg font-black text-white">{user?.name || 'Authorized Node'}</h4>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{user?.email}</p>
                          <div className="flex gap-2 pt-2">
                             <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black text-gray-400 border border-white/5 uppercase tracking-widest">{user?.role || 'User'} Level Access</span>
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <InputField label="Sovereign Name" name="name" value={user?.name} placeholder="Jonathan Doe" />
                       <InputField label="Public Email Node" name="email" value={user?.email} placeholder="node@bynd.com" />
                       <InputField label="Organization Mesh" name="organization" value={user?.organization} placeholder="BYND Core" />
                       <InputField label="Geographic Region" name="region" value="North America (AWS-East)" placeholder="Global" />
                    </div>
                  </SettingCard>
                )}

                {activeTab === 'security' && (
                  <SettingCard title="Security Protocols" description="Manage authentication factors and cryptographic access nodes.">
                    <div className="space-y-6">
                       <div className="p-6 bg-white/[0.03] border border-white/10 rounded-[32px] flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500"><Lock size={20} /></div>
                             <div>
                                <p className="text-sm font-black text-white">Two-Factor Authentication</p>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Add an extra layer of encryption to your node</p>
                             </div>
                          </div>
                          <button onClick={() => setTwoFA(!twoFA)} className={`w-14 h-8 rounded-full transition-all relative ${twoFA ? 'bg-[#12E7FF]' : 'bg-white/10'}`}>
                             <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${twoFA ? 'right-1' : 'left-1'}`} />
                          </button>
                       </div>
                       <button className="w-full py-5 bg-white/5 border border-white/10 rounded-[32px] text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                          <Key size={18} />
                          Rotate Access Credentials
                       </button>
                    </div>
                  </SettingCard>
                )}

                {activeTab === 'notifications' && (
                  <SettingCard title="Notification Vectors" description="Route system alerts and audit logs to your preferred endpoints.">
                    <div className="space-y-4">
                       {['Sync Failure Alerts', 'Latency Threshold Warning', 'New Device Handshake', 'Audit Ledger Export'].map((item, i) => (
                         <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between hover:bg-white/5 transition-all">
                            <span className="text-sm font-black text-gray-300">{item}</span>
                            <div className="w-6 h-6 rounded-lg border-2 border-[#12E7FF] bg-[#12E7FF]/10 flex items-center justify-center cursor-pointer">
                               <Check size={14} className="text-[#12E7FF]" />
                            </div>
                         </div>
                       ))}
                    </div>
                  </SettingCard>
                )}

                {activeTab === 'billing' && (
                  <SettingCard title="Billing & Node Quota" description="Manage your subscription and monitor global data throughput.">
                    <div className="bg-gradient-to-br from-[#12E7FF]/10 to-transparent border border-[#12E7FF]/20 rounded-[40px] p-10 flex flex-col items-center text-center">
                       <Cpu size={48} className="text-[#12E7FF] mb-6" />
                       <h4 className="text-3xl font-black italic mb-2 tracking-tight">Sovereign <span className="text-[#12E7FF]">Plus</span></h4>
                       <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">Current Allocation: 1.2 TB / Month</p>
                       <div className="w-full bg-white/5 h-2 rounded-full mb-10 overflow-hidden">
                          <div className="h-full bg-[#12E7FF] w-[64%]" />
                       </div>
                       <button onClick={() => navigate('/pricing')} className="px-10 py-4 bg-[#12E7FF] text-[#030712] rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_#12E7FF] transition-all">Manage Quota</button>
                    </div>
                  </SettingCard>
                )}
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Settings;
