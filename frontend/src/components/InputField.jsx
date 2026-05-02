import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Field } from 'formik';
import { Check, X, Info } from 'lucide-react';

const InputField = ({ 
  name, 
  type, 
  placeholder, 
  icon: Icon, 
  errors, 
  touched, 
  showPassword, 
  setShowPassword,
  requirements,
  value
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isPasswordField = name === 'password';
  const hasError = errors[name] && touched[name];

  return (
    <div className="space-y-1 relative">
      <label htmlFor={name} className="sr-only">{placeholder || name}</label>
      <div className="relative group">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-10 
          ${hasError ? 'text-red-400' : isFocused ? 'text-[#12E7FF] scale-110' : 'text-gray-500'}`}>
          <Icon size={18} />
        </div>
        
        <Field
          id={name}
          name={name}
          type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-white/[0.03] backdrop-blur-md text-white pl-11 pr-11 py-3.5 rounded-xl border transition-all duration-500 outline-none placeholder:text-gray-600 text-sm font-medium
            ${hasError 
              ? 'border-red-500/40 focus:border-red-500 bg-red-500/5 shadow-[0_0_15px_rgba(239,68,68,0.1)]' 
              : isFocused 
                ? 'border-[#12E7FF] bg-white/[0.06] shadow-[0_0_20px_rgba(18,231,255,0.15)]' 
                : 'border-white/10 hover:border-white/20'
            }`}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#12E7FF] transition-colors z-10 p-1"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {/* Requirements Popup - Industry Level UX */}
      <AnimatePresence>
        {isFocused && requirements && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute left-0 right-0 top-full mt-2 p-4 bg-[#0A0F1D] border border-white/10 rounded-2xl z-50 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
              <Info size={14} className="text-[#12E7FF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Security Protocol</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {requirements.map((req, idx) => {
                const isMet = req.regex.test(value || '');
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${isMet ? 'bg-green-500/20' : 'bg-white/5'}`}>
                      {isMet ? <Check size={10} className="text-green-500" /> : <X size={10} className="text-gray-600" />}
                    </div>
                    <span className={`text-[10px] font-bold tracking-tight transition-colors ${isMet ? 'text-green-500/80' : 'text-gray-500'}`}>
                      {req.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasError && !isFocused && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-1.5 pl-3 pt-1"
          >
            <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
            <p className="text-[9px] text-red-400 font-bold tracking-wider uppercase italic">
              {errors[name]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Internal icons since this will replace the inline component
import { Eye, EyeOff } from 'lucide-react';

export default InputField;
