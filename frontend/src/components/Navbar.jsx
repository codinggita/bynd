import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom hover underline style
  const navLinkClass = "relative py-1 text-[15px] font-semibold text-slate-800 hover:text-[#00E5FF] transition-colors tracking-wide group";
  const underlineStyle = "absolute bottom-0 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all duration-300 group-hover:w-full";

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none">
      <nav 
        className={`max-w-7xl mx-auto h-[72px] rounded-[36px] transition-all duration-500 pointer-events-auto flex items-center pl-10 pr-10 relative ${
          scrolled 
            ? 'bg-white/[0.85] border border-slate-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),inset_0_2px_10px_rgba(255,255,255,1)] backdrop-blur-3xl' 
            : 'bg-white/50 border border-white/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),inset_0_1px_4px_rgba(255,255,255,1)] backdrop-blur-xl'
        }`}
      >
        <div className="w-full h-full flex items-center justify-between relative">
          
          {/* Left: Logo */}
          <div className="flex items-center relative z-20">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group transition-transform active:scale-95"
            >
              <Logo light={false} className="scale-110" />
            </Link>
          </div>

          {/* Center Portal: Navigation Links (Viewport Centered) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-10 whitespace-nowrap">
            <Link to="/product" className={navLinkClass}>
              Product
              <span className={underlineStyle}></span>
            </Link>
            <Link to="/pricing" className={navLinkClass}>
              Pricing
              <span className={underlineStyle}></span>
            </Link>
            <Link to="/docs" className={navLinkClass}>
              Docs
              <span className={underlineStyle}></span>
            </Link>
          </div>
          
          {/* Right: Auth Links */}
          <div className="flex items-center gap-8 relative z-20">
            <div className="hidden md:flex items-center gap-10">
              <Link to="/auth?mode=login" className="text-[15px] font-semibold text-slate-800 hover:text-[#00E5FF] transition-colors">
                Sign In
              </Link>
              <Link 
                to="/auth?mode=signup" 
                className="group relative flex items-center gap-2 bg-[#00E5FF] text-[#0A1929] px-8 py-2.5 rounded-full text-[15px] font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:pr-9 hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] active:scale-95"
              >
                {/* Background Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <span className="relative z-10">Get Started</span>
                
                {/* Animated Arrow */}
                <svg 
                  className="absolute right-4 w-4 h-4 transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Hamburger (Refined) */}
            <div className="md:hidden flex items-center">
              <button className="p-2.5 rounded-full bg-slate-100/50 text-slate-800 hover:bg-slate-200 transition-colors border border-slate-200/50">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="10" y1="12" x2="21" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </nav>
      
      {/* Global Style Injection for Keyframes */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
