import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Link2, Unlink, ArrowRight, Save, Lock } from 'lucide-react';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';

const mockSourceFields = [
  { id: 'sf1', name: 'First Name', type: 'String' },
  { id: 'sf2', name: 'Last Name', type: 'String' },
  { id: 'sf3', name: 'Email Address', type: 'Email' },
  { id: 'sf4', name: 'Phone Number', type: 'Phone' },
  { id: 'sf5', name: 'Company', type: 'String' },
];

const mockTargetFields = [
  { id: 'tf1', name: 'first_name', type: 'Text' },
  { id: 'tf2', name: 'last_name', type: 'Text' },
  { id: 'tf3', name: 'email_address', type: 'Email' },
  { id: 'tf4', name: 'mobile_phone', type: 'Phone' },
  { id: 'tf5', name: 'account_name', type: 'Text' },
  { id: 'tf6', name: 'lead_score', type: 'Number' },
];

const initialMappings = [
  { sourceId: 'sf1', targetId: 'tf1' },
  { sourceId: 'sf2', targetId: 'tf2' },
  { sourceId: 'sf3', targetId: 'tf3' },
];

const FieldMapping = () => {
  const [mappings, setMappings] = useState(initialMappings);
  const [saving, setSaving] = useState(false);

  const handleMap = (sourceId, targetId) => {
    // Check if target is already mapped
    if (mappings.find(m => m.targetId === targetId)) {
      toast.error('Target field already mapped!');
      return;
    }
    setMappings([...mappings.filter(m => m.sourceId !== sourceId), { sourceId, targetId }]);
  };

  const handleUnmap = (sourceId) => {
    setMappings(mappings.filter(m => m.sourceId !== sourceId));
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success('Field mappings securely saved to the ledger!', { icon: '🛡️' });
    }, 1500);
  };

  return (
    <div className="space-y-8 relative pb-20">
      <SEO title="Visual Field Mapping" description="Map source fields to target fields seamlessly." />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tight uppercase italic text-white">Field <span className="text-[#12E7FF]">Mapping Engine</span></h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Quantum Encrypted Sync Protocol</p>
        </div>

        <button 
          onClick={handleSave}
          disabled={saving}
          className="bg-[#12E7FF] text-[#030712] px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:shadow-[0_0_20px_#12E7FF] transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <Save size={14} />
          {saving ? 'Encrypting...' : 'Save Configuration'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/[0.02] border border-white/5 p-8 rounded-[40px] shadow-2xl relative">
        {/* Source Fields */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#12E7FF]">
              <Database size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-widest text-white">Source System</h2>
              <p className="text-[10px] text-gray-500 font-bold uppercase">Excel / CSV (Node A)</p>
            </div>
          </div>

          <div className="space-y-3">
            {mockSourceFields.map(source => {
              const mapping = mappings.find(m => m.sourceId === source.id);
              const isMapped = !!mapping;

              return (
                <motion.div 
                  key={source.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-4 rounded-2xl border transition-all flex justify-between items-center ${isMapped ? 'bg-[#12E7FF]/10 border-[#12E7FF]/30' : 'bg-white/5 border-white/10'}`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-white">{source.name}</span>
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{source.type}</span>
                  </div>

                  {isMapped ? (
                    <button onClick={() => handleUnmap(source.id)} className="text-red-400 hover:text-red-300 p-2">
                      <Unlink size={14} />
                    </button>
                  ) : (
                    <ArrowRight size={14} className="text-gray-600" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Target Fields */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#12E7FF]/10 rounded-xl border border-[#12E7FF]/20 text-[#12E7FF]">
              <Lock size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-widest text-white">Target System</h2>
              <p className="text-[10px] text-gray-500 font-bold uppercase">Salesforce (Node B)</p>
            </div>
          </div>

          <div className="space-y-3">
            {mockTargetFields.map(target => {
              const mappedSourceId = mappings.find(m => m.targetId === target.id)?.sourceId;
              const mappedSource = mockSourceFields.find(s => s.id === mappedSourceId);

              return (
                <motion.div 
                  key={target.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-4 rounded-2xl border transition-all flex flex-col gap-2 ${mappedSource ? 'bg-[#12E7FF]/5 border-[#12E7FF]/20' : 'bg-white/5 border-white/10 border-dashed'}`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-white">{target.name}</span>
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{target.type}</span>
                    </div>
                    {mappedSource ? (
                      <Link2 size={14} className="text-[#12E7FF]" />
                    ) : (
                      <select 
                        className="bg-[#030712] border border-white/10 text-white text-[10px] uppercase font-bold tracking-widest rounded-lg px-2 py-1 outline-none"
                        onChange={(e) => {
                          if (e.target.value) handleMap(e.target.value, target.id);
                        }}
                        value=""
                      >
                        <option value="">Map Field...</option>
                        {mockSourceFields.filter(s => !mappings.find(m => m.sourceId === s.id)).map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                    )}
                  </div>
                  
                  {mappedSource && (
                    <div className="text-[9px] font-bold text-[#12E7FF] bg-[#12E7FF]/10 px-2 py-1 rounded inline-block w-fit mt-1">
                      Mapped to: {mappedSource.name}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FieldMapping;
