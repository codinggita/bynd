import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
  Mail, 
  ArrowLeft, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Loader2,
  Lock
} from 'lucide-react';

const ForgotPassword = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please provide a valid professional email')
      .required('Authorized email is required for node recovery'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setStatus('loading');
    
    // Simulating API Call
    setTimeout(() => {
      // For demonstration, we'll succeed. You can change to 'error' to test.
      setStatus('success');
      setSubmitting(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 font-sans selection:bg-[#12E7FF]/30 relative overflow-hidden">
      
      {/* Background Decorative Auras */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#12E7FF]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#12E7FF]/5 rounded-full blur-[100px]" />

      {/* Top Left - Back to Auth */}
      <Link 
        to="/auth" 
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-gray-400 hover:text-[#12E7FF] transition-all group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-semibold tracking-wide uppercase">Back to Security Hub</span>
      </Link>

      <div className="w-full max-w-[480px] relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          <AnimatePresence mode="wait">
            
            {/* SUCCESS STATE */}
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-6"
              >
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} className="text-green-400" />
                </div>
                <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Recovery Sent</h2>
                <p className="text-gray-500 font-medium leading-relaxed mb-10">
                  An encrypted recovery link has been dispatched to your sync node. Please check your inbox to re-establish access.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="w-full py-4 bg-white/[0.05] border border-white/10 text-white font-bold rounded-2xl hover:bg-white/[0.08] transition-all"
                >
                  Request Another Link
                </button>
              </motion.div>
            ) : (
              /* IDLE / LOADING / ERROR STATES */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-10 text-center">
                  <div className="w-16 h-16 bg-[#12E7FF]/10 border border-[#12E7FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock size={28} className="text-[#12E7FF]" />
                  </div>
                  <h1 className="text-4xl font-black text-white mb-3 tracking-tighter">Credential Recovery</h1>
                  <p className="text-gray-500 font-medium">Re-establish your connection to the BYND data engine.</p>
                </div>

                <Formik
                  initialValues={{ email: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form className="space-y-6">
                      <div className="space-y-2">
                        <div className="relative group">
                          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-10 
                            ${errors.email && touched.email ? 'text-red-400' : 'text-gray-500 group-focus-within:text-[#12E7FF]'}`}>
                            <Mail size={19} />
                          </div>
                          <Field
                            name="email"
                            type="email"
                            placeholder="Account Sync Email"
                            className={`w-full bg-white/[0.03] backdrop-blur-md text-white pl-12 pr-6 py-4.5 rounded-2xl border transition-all duration-500 outline-none placeholder:text-gray-600
                              ${errors.email && touched.email 
                                ? 'border-red-500/40 focus:border-red-500 bg-red-500/5' 
                                : 'border-white/10 focus:border-[#12E7FF] focus:bg-white/[0.06]'
                              }`}
                          />
                        </div>
                        <AnimatePresence>
                          {errors.email && touched.email && (
                            <motion.p 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-[10px] text-red-400 pl-3 font-bold uppercase tracking-widest"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {status === 'error' && (
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3">
                          <ShieldAlert size={18} className="text-red-400" />
                          <p className="text-xs text-red-400 font-bold uppercase tracking-tight">Recovery Node Failure: Try Again</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-4.5 bg-[#12E7FF] text-[#030712] font-black rounded-2xl hover:shadow-[0_0_30px_rgba(18,231,255,0.4)] transition-all duration-500 flex items-center justify-center gap-3 group active:scale-95 disabled:opacity-50"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            VERIFYING NODE...
                          </>
                        ) : (
                          <>
                            RECOVER ACCESS
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                          </>
                        )}
                      </button>

                      <div className="text-center">
                        <Link to="/auth" className="text-xs font-bold text-gray-600 hover:text-[#12E7FF] transition-colors tracking-widest uppercase">
                          Remember your key? Log In
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Diagnostic Footer */}
        <p className="mt-12 text-center text-[10px] text-gray-700 font-black uppercase tracking-[0.4em] opacity-40">
          Sovereign Security Protocol Alpha-9
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
