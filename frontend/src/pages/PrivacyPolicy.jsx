import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly, such as when you create an account, configure sync nodes, or contact us for support. This includes your name, email address, organization name, and integration credentials. We also automatically collect usage data including sync metrics, error logs, and system performance data to improve our service.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'Your information is used to provide, maintain, and improve the BYND sync platform. This includes processing data synchronizations, resolving conflicts, generating analytics dashboards, and sending critical system notifications. We never sell your personal data to third parties.'
    },
    {
      title: '3. Data Storage & Security',
      content: 'All data is encrypted at rest using AES-256-GCM and in transit using TLS 1.3. Our infrastructure is hosted on SOC2 Type II certified cloud providers. We implement strict access controls, regular security audits, and automated threat detection to protect your synchronized business data.'
    },
    {
      title: '4. Third-Party Services',
      content: 'BYND integrates with third-party platforms (e.g., Salesforce, SAP, Excel) as directed by you. We only access data from these platforms that is necessary to perform the synchronization operations you configure. We do not share your data with any third parties beyond what is required for service delivery.'
    },
    {
      title: '5. Data Retention',
      content: 'Sync history and audit logs are retained according to your subscription tier. Upon account deletion, all personal data and sync configurations are permanently purged within 30 days. Anonymized, aggregated analytics data may be retained for service improvement purposes.'
    },
    {
      title: '6. Your Rights (GDPR & CCPA)',
      content: 'You have the right to access, correct, delete, or export your personal data at any time through your Settings dashboard. You may also request a complete data export or account deletion by contacting our support team. We respond to all data requests within 30 days.'
    },
    {
      title: '7. Cookies & Tracking',
      content: 'We use essential cookies for authentication and session management. We do not use third-party advertising cookies. Analytics cookies are used only with your consent to understand platform usage patterns and improve the user experience.'
    },
    {
      title: '8. Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any material changes via email or through a prominent notice on our platform. Your continued use of BYND after changes constitutes acceptance of the updated policy.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#12E7FF]/30">
      <SEO title="Privacy Policy" description="Learn how BYND protects and handles your business data." />

      {/* Background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(#12E7FF 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />

      {/* Nav */}
      <nav className="relative z-50 max-w-4xl mx-auto px-8 py-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
        </Link>
      </nav>

      {/* Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-8 pb-32">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-[#12E7FF]/10 border border-[#12E7FF]/20 rounded-2xl flex items-center justify-center">
              <Shield size={28} className="text-[#12E7FF]" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Last updated: April 2025</p>
            </div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            At BYND Technologies, we are committed to protecting the privacy and security of your business data. This policy explains how we collect, use, and safeguard your information.
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

        <div className="mt-16 p-8 bg-[#12E7FF]/5 border border-[#12E7FF]/20 rounded-3xl text-center">
          <p className="text-sm text-gray-400 mb-4">Questions about our privacy practices?</p>
          <Link to="/contact" className="text-[#12E7FF] font-black text-xs uppercase tracking-widest hover:underline">Contact Our Data Protection Team →</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
