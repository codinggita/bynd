import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-brand-deep text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 inline-block">
              <Logo light={true} />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              The next-generation bidirectional sync engine for your business data.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-sm text-text-secondary hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-text-secondary hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/docs" className="text-sm text-text-secondary hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/auth" className="text-sm text-text-secondary hover:text-white transition-colors">Sign In</Link></li>
              <li><Link to="/onboarding" className="text-sm text-text-secondary hover:text-white transition-colors">Get Started</Link></li>
              <li><Link to="/about" className="text-sm text-text-secondary hover:text-white transition-colors">About BYND</Link></li>
              <li><Link to="/contact" className="text-sm text-text-secondary hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-text-secondary hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-text-secondary hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} BYND Technologies. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-xs text-text-secondary">Built for global SMBs</span>
            <span className="text-xs text-text-secondary">SOC2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
