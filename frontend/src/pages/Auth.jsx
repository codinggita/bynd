import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowsLeftRight, 
  Envelope, 
  Lock, 
  Eye, 
  EyeSlash, 
  GoogleLogo 
} from '@phosphor-icons/react';
import Logo from '../components/Logo';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short').required('Required'),
});

const signupSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const Auth = () => {
  const [activeTab, setActiveTab] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Panel - Brand & Testimonial */}
      <div className="hidden lg:flex flex-col justify-between w-[450px] bg-brand-deep p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="mb-24 inline-block">
            <Logo light={true} />
          </Link>

          <div className="space-y-8">
            <div className="w-12 h-1 bg-brand-accent rounded-full" />
            <blockquote className="text-3xl font-display leading-tight italic">
              "The synchronous accuracy and structural integrity it brings to our data pipelines is nothing short of revolutionary."
            </blockquote>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-slate-800">
                <img src="https://i.pravatar.cc/100?img=12" alt="Samir Javdani" />
              </div>
              <div>
                <p className="font-bold text-lg">Samir Javdani</p>
                <p className="text-text-secondary text-sm">VP of Data Infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-12">
          <p className="text-xs text-text-secondary">
            © 2024 BYND Technologies Inc. All rights reserved.
          </p>
        </div>

        {/* Decorative background circles */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Right Panel - Auth Forms */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 bg-bg-page lg:bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[440px] bg-white lg:bg-transparent p-8 lg:p-0 rounded-2xl shadow-2xl lg:shadow-none border border-border lg:border-none"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-display font-bold text-brand-deep mb-2">
              {activeTab === 'signin' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-text-secondary">
              {activeTab === 'signin' 
                ? 'Log in to manage your data syncs.' 
                : 'Start your 14-day free trial today.'}
            </p>
          </div>

          {/* Custom Tabs */}
          <div className="flex p-1 bg-slate-100 rounded-lg mb-8">
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'signup' 
                  ? 'bg-white text-brand-deep shadow-sm' 
                  : 'text-text-secondary hover:text-brand-deep'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setActiveTab('signin')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'signin' 
                  ? 'bg-brand-deep text-white shadow-sm' 
                  : 'text-text-secondary hover:text-brand-deep'
              }`}
            >
              Sign In
            </button>
          </div>

          <button className="w-full py-3 px-4 bg-white border border-border rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-brand-deep hover:bg-slate-50 transition-colors mb-6 shadow-sm">
            <GoogleLogo size={20} weight="bold" className="text-[#4285F4]" />
            Continue with Google
          </button>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white lg:bg-white px-4 text-text-secondary font-medium">Or</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'signin' ? (
              <motion.div
                key="signin"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={loginSchema}
                  onSubmit={(values) => console.log(values)}
                >
                  {({ errors, touched }) => (
                    <Form className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-brand-deep mb-2">Work Email</label>
                        <div className="relative">
                          <Envelope size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                          <Field
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all ${
                              errors.email && touched.email ? 'border-error bg-error/5' : 'border-border'
                            }`}
                          />
                        </div>
                        {errors.email && touched.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-sm font-semibold text-brand-deep">Password</label>
                          <Link to="/forgot-password" size="sm" className="text-xs font-bold text-brand-accent hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                          <Field
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            className={`w-full pl-10 pr-10 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all ${
                              errors.password && touched.password ? 'border-error bg-error/5' : 'border-border'
                            }`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-brand-deep"
                          >
                            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                        {errors.password && touched.password && <p className="text-xs text-error mt-1">{errors.password}</p>}
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-brand-deep text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-md mt-4"
                      >
                        Log In
                      </button>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Formik
                  initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
                  validationSchema={signupSchema}
                  onSubmit={(values) => console.log(values)}
                >
                  {({ errors, touched }) => (
                    <Form className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-brand-deep mb-1">Full Name</label>
                        <Field
                          name="fullName"
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all ${
                            errors.fullName && touched.fullName ? 'border-error bg-error/5' : 'border-border'
                          }`}
                        />
                        {errors.fullName && touched.fullName && <p className="text-xs text-error mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-deep mb-1">Work Email</label>
                        <Field
                          name="email"
                          type="email"
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all ${
                            errors.email && touched.email ? 'border-error bg-error/5' : 'border-border'
                          }`}
                        />
                        {errors.email && touched.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-brand-deep mb-1">Password</label>
                          <Field
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all ${
                              errors.password && touched.password ? 'border-error bg-error/5' : 'border-border'
                            }`}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-brand-deep mb-1">Confirm</label>
                          <Field
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all ${
                              errors.confirmPassword && touched.confirmPassword ? 'border-error bg-error/5' : 'border-border'
                            }`}
                          />
                        </div>
                      </div>
                      {(errors.password && touched.password) || (errors.confirmPassword && touched.confirmPassword) ? (
                        <p className="text-xs text-error mt-1">{errors.password || errors.confirmPassword}</p>
                      ) : null}

                      <button
                        type="submit"
                        className="w-full py-3 bg-brand-deep text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-md mt-4"
                      >
                        Create Account
                      </button>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 text-center">
            <p className="text-sm text-text-secondary font-medium">
              {activeTab === 'signin' ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setActiveTab(activeTab === 'signin' ? 'signup' : 'signin')}
                className="text-brand-accent font-bold hover:underline ml-1"
              >
                {activeTab === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
