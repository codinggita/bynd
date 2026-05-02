import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical System Failure:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 font-sans">
          {/* Animated Background Aura */}
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#12E7FF]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white/[0.03] border border-white/10 rounded-[40px] p-10 text-center backdrop-blur-xl relative z-10 shadow-2xl"
          >
            <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <AlertTriangle size={40} className="text-red-500" />
            </div>
            
            <h1 className="text-3xl font-black tracking-tighter mb-4">Protocol Breach</h1>
            <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">
              The sentient sync engine encountered an unhandled anomaly. Connection to the sovereign data mesh has been throttled for security.
            </p>

            <div className="space-y-4">
              <button 
                onClick={() => window.location.reload()}
                className="w-full py-4 bg-[#12E7FF] text-[#030712] rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(18,231,255,0.4)] transition-all flex items-center justify-center gap-3"
              >
                <RotateCcw size={18} />
                Re-initialize Core
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <Home size={18} />
                Return to Surface
              </button>
            </div>

            <p className="mt-8 text-[10px] text-gray-700 font-black uppercase tracking-[0.3em]">
              Error Log: {this.state.error?.message || 'Unknown Handshake Failure'}
            </p>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
