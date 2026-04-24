import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowsLeftRight, GithubLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="bg-brand-deep text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <ArrowsLeftRight size={32} className="text-brand-accent" weight="fill" />
              <span className="font-display text-2xl text-white tracking-tight">BYND</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              The next-generation bidirectional sync engine for your business data.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-secondary hover:text-brand-accent transition-colors">
                <GithubLogo size={24} />
              </a>
              <a href="#" className="text-text-secondary hover:text-brand-accent transition-colors">
                <TwitterLogo size={24} />
              </a>
              <a href="#" className="text-text-secondary hover:text-brand-accent transition-colors">
                <LinkedinLogo size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-sm text-text-secondary hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-text-secondary hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/integrations" className="text-sm text-text-secondary hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/security" className="text-sm text-text-secondary hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-text-secondary hover:text-white transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-sm text-text-secondary hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-sm text-text-secondary hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-text-secondary hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-text-secondary hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-text-secondary hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-sm text-text-secondary hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">
            © 2024 BYND Technologies. All rights reserved.
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
