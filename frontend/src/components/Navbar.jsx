import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowsLeftRight } from '@phosphor-icons/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ArrowsLeftRight size={32} className="text-brand-accent" weight="fill" />
          <span className="font-display text-2xl text-brand-deep tracking-tight">BYND</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm font-medium text-text-secondary hover:text-brand-accent transition-colors">Features</Link>
          <Link to="/pricing" className="text-sm font-medium text-text-secondary hover:text-brand-accent transition-colors">Pricing</Link>
          <Link to="/docs" className="text-sm font-medium text-text-secondary hover:text-brand-accent transition-colors">Documentation</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/auth" className="text-sm font-medium text-text-primary hover:text-brand-accent transition-colors">Log in</Link>
          <Link 
            to="/auth" 
            className="bg-brand-deep text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
