import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing or using the BYND platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. These terms apply to all users, including organizations and individual administrators.'
    },
    {
      title: '2. Service Description',
      content: 'BYND provides a bidirectional data synchronization platform that enables businesses to maintain data parity across multiple systems. Our services include real-time sync, conflict resolution, field mapping, audit logging, and integration management. Service availability is subject to your subscription tier.'
    },
    {
      title: '3. Account Responsibilities',
      content: 'You are responsible for maintaining the confidentiality of your account credentials, including API keys and access tokens. You agree to immediately notify BYND of any unauthorized use of your account. You are responsible for all activities that occur under your account and connected integration nodes.'
    },
    {
      title: '4. Acceptable Use',
      content: 'You agree not to use BYND to process, store, or transmit any data that violates applicable laws or regulations. You may not attempt to reverse-engineer, decompile, or extract source code from the platform. Automated access is permitted only through our documented API endpoints.'
    },
    {
      title: '5. Data Ownership',
      content: 'You retain full ownership of all data synchronized through the BYND platform. We do not claim any intellectual property rights over your business data. BYND only processes your data as instructed by your sync configurations and does not use it for purposes beyond service delivery.'
    },
    {
      title: '6. Service Level Agreement',
      content: 'BYND commits to 99.9% uptime for Enterprise tier subscribers. Scheduled maintenance windows will be communicated at least 48 hours in advance. In the event of downtime exceeding our SLA, affected customers may be eligible for service credits as outlined in their subscription agreement.'
    },
    {
      title: '7. Limitation of Liability',
      content: 'BYND shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our platform. Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim. This limitation applies regardless of the legal theory upon which the claim is based.'
    },
    {
      title: '8. Termination',
      content: 'Either party may terminate the agreement at any time. Upon termination, your access to the platform will be revoked, and your data will be available for export for 30 days. After this period, all data will be permanently deleted from our systems.'
    },
    {
      title: '9. Governing Law',
      content: 'These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through binding arbitration, unless otherwise agreed upon by both parties.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#12E7FF]/30">
      <SEO title="Terms of Service" description="Read the BYND platform terms and conditions for data synchronization services." />

      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(#12E7FF 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />

      <nav className="relative z-50 max-w-4xl mx-auto px-8 py-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
        </Link>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-8 pb-32">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-[#12E7FF]/10 border border-[#12E7FF]/20 rounded-2xl flex items-center justify-center">
              <FileText size={28} className="text-[#12E7FF]" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight">Terms of Service</h1>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Last updated: April 2025</p>
            </div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Please read these terms carefully before using the BYND data synchronization platform. By using our services, you agree to these terms.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
              <h2 className="text-xl font-black tracking-tight mb-4 text-[#12E7FF]">{section.title}</h2>
              <p className="text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
