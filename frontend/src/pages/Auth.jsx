import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  Users, 
  Globe,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

// Brand Color
const ACCENT_COLOR = '#12E7FF';

// SaaS Level Validation Schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid corporate email address')
    .required('Authorization email is required'),
  password: Yup.string()
    .min(8, 'Security Requirement: Minimum 8 characters')
    .required('Access key/password is required'),
});

const signupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Name should only contain alphabets')
    .required('Official identity name is required'),
  email: Yup.string()
    .email('A valid professional email is mandatory')
    .required('Sync node email is required'),
  password: Yup.string()
    .min(8, 'High Security: Minimum 8 characters required')
    .matches(/[a-z]/, 'Must include at least one lowercase character')
    .matches(/[A-Z]/, 'Must include at least one uppercase character')
    .matches(/[0-9]/, 'Must include at least one numeric digit')
    .matches(/[@$!%*?&]/, 'Must include at least one special character (@$!%*?&)')
    .required('Secure access key is mandatory'),
  referralCode: Yup.string()
    .transform((value) => (value === '' ? undefined : value))
    .min(4, 'Invalid format: Code too short')
    .optional(),
});

import InputField from '../components/InputField';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';
import { login, register } from '../services/api';
import { useAnalytics } from '../hooks/useAnalytics';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';

// Password Security Requirements
const PWD_REQUIREMENTS = [
  { label: 'Minimum 8 characters', regex: /.{8,}/ },
  { label: 'At least one uppercase letter', regex: /[A-Z]/ },
  { label: 'At least one numeric digit', regex: /[0-9]/ },
  { label: 'At least one special character', regex: /[@$!%*?&]/ },
];

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { trackEvent } = useAnalytics();
  const [searchParams] = useSearchParams();

  // Show expired session toast if redirected from interceptor
  React.useEffect(() => {
    if (searchParams.get('session') === 'expired') {
      toast.error('Your session has expired. Please sign in again.', { duration: 5000 });
    }
    if (searchParams.get('mode') === 'signup') {
      setIsLogin(false);
    }
  }, [searchParams]);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
  };

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      const payload = {
        name: values.fullName,
        email: values.email,
        password: values.password,
        organization: 'Enterprise Node',
        partnerCode: values.referralCode
      };
      
      const res = await register(payload);
      trackEvent('Account Created', 'Authentication', 'Signup Success', 1);
      dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
      toast.success(`Welcome to BYND, ${res.data.user.name}!`);
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Node Initialization Failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await login(values);
      trackEvent('Identity Authorized', 'Authentication', 'Login Success', 1);
      dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
      toast.success('Sovereign Access Granted');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Authentication Vector Failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#030712] flex items-center justify-center p-4 font-sans selection:bg-[#12E7FF]/30 relative overflow-hidden">
      <SEO 
        title="Secure Node Authorization" 
        description="Access your sovereign data engine. Sign in or initialize your node to start bidirectional synchronization across your enterprise stack."
        noindex={true}
      />
      
      {/* Dynamic Background Blur Effects */}
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-[#12E7FF]/10 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[40%] h-[40%] bg-[#12E7FF]/5 rounded-full blur-[120px]" />

      {/* Back to Home Button - Top Left */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-gray-400 hover:text-[#12E7FF] bg-white/[0.03] backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 transition-all hover:bg-white/[0.08] group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-semibold tracking-wide">Back to Home</span>
      </Link>

      <div className="w-full max-w-[1000px] h-[600px] flex rounded-[40px] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.9)] border border-white/10 relative bg-white/[0.01] backdrop-blur-lg">
        
        {/* Sliding Side Panel (Glassmorph) */}
        <motion.div 
          animate={{ x: isLogin ? '0%' : '100%' }}
          transition={{ type: 'spring', stiffness: 90, damping: 25 }}
          className="absolute top-0 left-0 w-1/2 h-full z-20 hidden md:flex flex-col items-center justify-center p-12 text-center"
        >
          {/* Panel Overlay with Brand Gradient */}
          <div className="absolute inset-0 bg-[#12E7FF] backdrop-blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10 pointer-events-none" />
          
          <div className="relative z-30 px-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              key={isLogin ? 'panel-login' : 'panel-signup'}
              className="space-y-6"
            >
              <div className="bg-[#030712] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto shadow-2xl mb-2">
                <ShieldCheck size={28} className="text-[#12E7FF]" />
              </div>
              <h2 className="text-4xl font-black text-[#030712] leading-[1.1] tracking-tight">
                {!isLogin ? 'Already Syncing?' : 'New to BYND?'}
              </h2>
              <p className="text-[#030712]/60 text-base font-bold leading-relaxed max-w-[320px] mx-auto">
                {!isLogin 
                  ? 'Re-establish your bidirectional data nodes and manage global sync assets.' 
                  : 'Initialize your sovereign data engine and eliminate manual entry overhead.'}
              </p>
              <button
                onClick={toggleAuth}
                className="mt-6 px-12 py-3.5 bg-[#030712] text-[#12E7FF] font-black rounded-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 uppercase tracking-widest text-[10px] active:scale-95 border-b-4 border-black/20"
              >
                {!isLogin ? 'Authorize' : 'Join Now'}
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex w-full flex-col md:flex-row relative">
          
          {/* Sign Up Section */}
          <div className={`w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center transition-all duration-700 delay-100 ${isLogin ? 'md:opacity-0 md:translate-x-12 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
            <div className="max-w-[360px] mx-auto w-full">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                   <span className="text-[9px] font-black text-[#12E7FF] tracking-[0.3em] uppercase">Sovereign Onboarding</span>
                </div>
                <h1 className="text-3xl font-black text-white mb-2 tracking-tighter">Initiate Node</h1>
                <p className="text-gray-500 font-bold text-xs">Establish your profile within the BYND ecosystem.</p>
              </div>

              <Formik
                initialValues={{ fullName: '', email: '', password: '', referralCode: '' }}
                validationSchema={signupSchema}
                onSubmit={handleSignup}
              >
                {({ errors, touched, isSubmitting, values }) => (
                  <Form className="space-y-4">
                    <InputField 
                      name="fullName" type="text" placeholder="Identity: John Doe" icon={User}
                      errors={errors} touched={touched}
                    />
                    <InputField 
                      name="email" type="email" placeholder="Node: john@enterprise.com" icon={Mail}
                      errors={errors} touched={touched}
                    />
                    <InputField 
                      name="password" type="password" placeholder="Access: Security Key" icon={Lock}
                      errors={errors} touched={touched}
                      showPassword={showPassword} setShowPassword={setShowPassword}
                      requirements={PWD_REQUIREMENTS}
                      value={values.password}
                    />
                    <InputField 
                      name="referralCode" type="text" placeholder="Partner Code (Optional)" icon={Users}
                      errors={errors} touched={touched}
                    />

                    <div className="pt-4 space-y-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#12E7FF] text-[#030712] font-black rounded-xl hover:shadow-[0_0_30px_rgba(18,231,255,0.3)] transition-all duration-500 flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-50 text-xs"
                      >
                        INITIALIZE SYNC
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="relative py-1 flex items-center justify-center">
                        <div className="w-full border-t border-white/5 absolute"></div>
                        <span className="relative bg-[#030712] px-4 text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase">Enterprise Auth</span>
                      </div>

                      <button
                        type="button"
                        className="w-full py-3 bg-white/[0.02] border border-white/10 text-white font-black rounded-xl hover:bg-white/[0.08] flex items-center justify-center gap-3 transition-all duration-300 text-xs"
                      >
                        <Globe size={16} className="text-[#12E7FF]" />
                        Sync with Google
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              
              <p className="mt-8 text-center text-[10px] text-gray-600 md:hidden font-black uppercase tracking-widest">
                Existing Node? <button onClick={toggleAuth} className="text-[#12E7FF]">Authorize</button>
              </p>
            </div>
          </div>

          {/* Login Section */}
          <div className={`w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center transition-all duration-700 delay-100 ${!isLogin ? 'md:opacity-0 md:-translate-x-12 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
            <div className="max-w-[360px] mx-auto w-full">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                   <span className="text-[9px] font-black text-[#12E7FF] tracking-[0.3em] uppercase">Sovereign Access</span>
                </div>
                <h1 className="text-3xl font-black text-white mb-2 tracking-tighter">Re-Auth</h1>
                <p className="text-gray-500 font-bold text-xs">Validate your secure bidirectional channels.</p>
              </div>

              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={handleLogin}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form className="space-y-5">
                    <InputField 
                      name="email" type="email" placeholder="Node: john@enterprise.com" icon={Mail}
                      errors={errors} touched={touched}
                    />
                    <div className="space-y-2">
                      <InputField 
                        name="password" type="password" placeholder="Sovereign Access Key" icon={Lock}
                        errors={errors} touched={touched}
                        showPassword={showPassword} setShowPassword={setShowPassword}
                      />
                      <div className="flex justify-end pr-1">
                        <Link to="/forgot-password" size="sm" className="text-[9px] font-black text-[#12E7FF]/50 hover:text-[#12E7FF] transition-colors tracking-widest uppercase italic">
                          Lost Credentials?
                        </Link>
                      </div>
                    </div>

                    <div className="pt-8 space-y-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#12E7FF] text-[#030712] font-black rounded-xl hover:shadow-[0_0_30px_rgba(18,231,255,0.3)] transition-all duration-500 flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-50 text-xs"
                      >
                        ESTABLISH CONNECTION
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="relative py-1 flex items-center justify-center">
                        <div className="w-full border-t border-white/5 absolute"></div>
                        <span className="relative bg-[#030712] px-4 text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase">Enterprise Auth</span>
                      </div>

                      <button
                        type="button"
                        className="w-full py-3 bg-white/[0.02] border border-white/10 text-white font-black rounded-xl hover:bg-white/[0.08] flex items-center justify-center gap-3 transition-all duration-300 text-xs"
                      >
                        <Globe size={16} className="text-[#12E7FF]" />
                        Sync with Google
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <p className="mt-8 text-center text-[10px] text-gray-600 md:hidden font-black uppercase tracking-widest">
                New Engine? <button onClick={toggleAuth} className="text-[#12E7FF]">Initialize</button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;
