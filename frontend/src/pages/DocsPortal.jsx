import React, { useState, useEffect, useMemo } from 'react';
import { 
  MagnifyingGlass, 
  CaretRight, 
  CaretDown, 
  BookOpen, 
  RocketLaunch, 
  AppWindow, 
  Plug, 
  ArrowsLeftRight, 
  ShieldCheck, 
  ListMagnifyingGlass, 
  Warning, 
  Globe, 
  CreditCard, 
  LockKey, 
  Question,
  Terminal,
  ArrowRight,
  CheckCircle,
  ClockCounterClockwise,
  ListDashes,
  MicrosoftExcelLogo,
  GoogleLogo,
  Briefcase,
  Buildings,
  Receipt,
  FileText,
  ChartBar,
  Shield,
  CurrencyCircleDollar,
  Cloud,
  Database
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import './DocsPortal.css';
import SEO from '../components/SEO';
import Lenis from 'lenis';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const DocsPortal = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('welcome');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(['getting-started', 'core-concepts', 'connecting-apps']);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const toggleCategory = (id) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const navItems = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <RocketLaunch />,
      items: [
        { id: 'welcome', title: 'Welcome to BYND' },
        { id: 'quick-start', title: 'Quick Start Guide' },
      ]
    },
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      icon: <BookOpen />,
      items: [
        { id: 'bidirectional-sync', title: 'Bidirectional Sync' },
        { id: 'conflict-shield', title: 'Conflict Shield' },
        { id: 'pending-entities', title: 'Pending Entities' },
      ]
    },
    {
      id: 'connecting-apps',
      title: 'Connecting Apps',
      icon: <Plug />,
      items: [
        { id: 'supported-apps', title: 'Supported Applications' },
        { id: 'connect-excel', title: 'Connect Excel (OneDrive)' },
        { id: 'connect-google', title: 'Connect Google Sheets' },
        { id: 'connect-hubspot', title: 'Connect HubSpot' },
        { id: 'connect-salesforce', title: 'Connect Salesforce' },
        { id: 'connect-quickbooks', title: 'Connect QuickBooks' },
        { id: 'connect-xero', title: 'Connect Xero' },
      ]
    },
    {
      id: 'setting-up-syncs',
      title: 'Setting Up Syncs',
      icon: <ArrowsLeftRight />,
      items: [
        { id: 'sync-contract', title: 'Create a Sync Contract' },
        { id: 'field-mapping', title: 'Field Mapping (AI & Manual)' },
        { id: 'sync-direction', title: 'Choosing Sync Direction' },
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Issues',
      icon: <ChartBar />,
      items: [
        { id: 'sync-status', title: 'Monitoring Sync Status' },
        { id: 'conflict-resolution', title: 'Conflict Resolution' },
        { id: 'handling-pending', title: 'Handling Pending Entities' },
        { id: 'sync-logs', title: 'Sync Logs & Job History' },
        { id: 'troubleshooting', title: 'Troubleshooting Common Errors' },
      ]
    },
    {
      id: 'compliance',
      title: 'Global Compliance',
      icon: <Shield />,
      items: [
        { id: 'data-residency', title: 'Data Residency' },
        { id: 'invoice-compliance', title: 'Invoice Compliance Profiles' },
      ]
    },
    {
      id: 'account',
      title: 'Account & Billing',
      icon: <CurrencyCircleDollar />,
      items: [
        { id: 'plans-pricing', title: 'Plans & Pricing' },
        { id: 'manage-workspace', title: 'Managing Your Workspace' },
      ]
    },
    {
      id: 'developers',
      title: 'API & Webhooks',
      icon: <Terminal />,
      items: [
        { id: 'api-webhooks', title: 'API & Webhooks' },
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: <LockKey />,
      items: [
        { id: 'security-privacy', title: 'Security & Privacy' },
      ]
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: <Question />,
      items: [
        { id: 'faq-general', title: 'General Questions' },
      ]
    }
  ];

  const filteredNavItems = useMemo(() => {
    if (!searchQuery) return navItems;
    return navItems.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(cat => cat.items.length > 0);
  }, [searchQuery]);

  const AnimatedHomeButton = ({ className = "", style = {} }) => (
    <motion.button 
      onClick={() => navigate('/')}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={`docs-btn ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '12px 24px',
        borderRadius: '12px',
        border: '1px solid rgba(0,229,255,0.2)',
        background: 'var(--color-brand-deep)',
        color: 'white',
        fontWeight: '800',
        cursor: 'pointer',
        ...style
      }}
    >
      <motion.div
        variants={{
          hover: { rotate: 360 }
        }}
        initial={{ rotate: 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ display: 'flex', position: 'relative', zIndex: 2 }}
      >
        <ArrowRight size={20} weight="bold" />
      </motion.div>
      
      <span style={{ position: 'relative', zIndex: 2, textTransform: 'uppercase', letterSpacing: '1px' }}>
        Back to Home
      </span>

      {/* Sequential Color Fill */}
      <motion.div
        variants={{
          hover: { x: 0 }
        }}
        initial={{ x: '-100%' }}
        transition={{ duration: 0.4, delay: 0.2, ease: "circOut" }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'var(--color-brand-accent)',
          zIndex: 1
        }}
      />

      {/* Active Layer for Navy Text */}
      <motion.div
        variants={{
          hover: { opacity: 1 }
        }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          color: 'var(--color-brand-deep)',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        <ArrowRight size={20} weight="bold" />
        <span style={{ fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>Back to Home</span>
      </motion.div>
    </motion.button>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'supported-apps':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Supported Applications</h1>
            <p className="docs-p">BYND connects with a wide range of business applications. Each integration is optimized for bidirectional parity.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {[
                { name: 'Excel OneDrive', icon: <MicrosoftExcelLogo size={32} color="#217346" />, status: 'Available' },
                { name: 'Google Sheets', icon: <GoogleLogo size={32} color="#34A853" />, status: 'Available' },
                { name: 'HubSpot', icon: <Briefcase size={32} color="#FF7A59" />, status: 'Available' },
                { name: 'Salesforce', icon: <Cloud size={32} color="#00A1E0" />, status: 'Available' },
                { name: 'QuickBooks', icon: <Receipt size={32} color="#2CA01C" />, status: 'Available' },
                { name: 'Xero', icon: <Buildings size={32} color="#13B5EA" />, status: 'Available' },
                { name: 'Zoho CRM', icon: <AppWindow size={32} color="#EF4444" />, status: 'Beta' },
                { name: 'Snowflake', icon: <Database size={32} color="#29B5E8" />, status: 'Coming Soon' }
              ].map(app => (
                <div key={app.name} className="docs-card" style={{ padding: '24px', border: '1px solid var(--color-border)', borderRadius: '12px', textAlign: 'center', backgroundColor: 'var(--color-surface)' }}>
                  <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{app.icon}</div>
                  <div style={{ fontWeight: '700', marginBottom: '8px' }}>{app.name}</div>
                  <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', padding: '4px 8px', borderRadius: '4px', backgroundColor: app.status === 'Available' ? 'rgba(16, 185, 129, 0.1)' : app.status === 'Beta' ? 'rgba(245, 158, 11, 0.1)' : '#F1F5F9', color: app.status === 'Available' ? 'var(--color-success)' : app.status === 'Beta' ? 'var(--color-warning)' : 'var(--color-text-secondary)' }}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </article>
        );

      case 'conflict-resolution':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Conflict Resolution</h1>
            <p className="docs-p">Conflicts occur when two systems edit the same record simultaneously. BYND's Conflict Shield detects these collisions and provides a clear path to resolution.</p>
            <div className="docs-image-container">
               {/* Using dashboard image as placeholder for conflict UI since generation failed */}
              <img src="/src/assets/docs/dashboard_screenshot_1777566053664.png" alt="Conflict Resolution UI" className="docs-image" style={{ opacity: 0.5, filter: 'grayscale(1)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-deep)', fontWeight: 'bold' }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '2px solid var(--color-brand-accent)' }}>
                   Conflict Resolution UI Mockup
                </div>
              </div>
              <div className="docs-image-caption">The Conflict Resolution panel: Split-view comparison with AI recommendations.</div>
            </div>
            <h2 className="docs-h2">The Resolution Process</h2>
            <ol className="docs-list">
              <li><strong>Detection:</strong> BYND identifies a record mismatch and pauses the sync for that specific item.</li>
              <li><strong>Analysis:</strong> Our AI compares the changes and suggests the most likely correct value (e.g., "Keep HubSpot value, 92% confidence").</li>
              <li><strong>Action:</strong> You can choose to accept the suggestion, manually pick a side, or merge fields individually.</li>
            </ol>
            <div className="docs-callout docs-callout-tip">
              <div className="docs-callout-icon"><ShieldCheck weight="fill" /></div>
              <div>
                <strong>Bulk Resolution:</strong> You can resolve multiple similar conflicts at once by selecting them and choosing a global rule (e.g., "Always keep CRM value for phone numbers").
              </div>
            </div>
          </article>
        );

      case 'field-mapping':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Field Mapping (AI & Manual)</h1>
            <p className="docs-p">Field mapping defines which data points in System A correspond to System B. BYND makes this effortless with intelligent suggestions.</p>
            <div className="docs-image-container" style={{ backgroundColor: '#0A1929', padding: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ width: '120px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', border: '1px solid rgba(0,229,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px' }}>DEAL_VALUE</div>
                 <div style={{ flex: 1, height: '2px', background: 'var(--color-brand-accent)', margin: '0 20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-accent)', color: 'var(--color-brand-deep)', fontSize: '8px', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>98% MATCH</div>
                 </div>
                 <div style={{ width: '120px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', border: '1px solid rgba(0,229,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px' }}>AMOUNT</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', opacity: 0.5 }}>
                 <div style={{ width: '120px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px dashed white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px' }}>CLIENT_NAME</div>
                 <div style={{ flex: 1, height: '2px', background: 'white', margin: '0 20px', borderStyle: 'dashed' }}></div>
                 <div style={{ width: '120px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px dashed white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px' }}>ACCOUNT_NAME</div>
              </div>
            </div>
            <div className="docs-image-caption">Visual Mapping Interface: Solid lines represent AI-approved mappings.</div>
            <h2 className="docs-h2">Mapping Types</h2>
            <ul className="docs-list">
              <li><strong>AI-Assisted:</strong> Automatically detects similar field names and types.</li>
              <li><strong>Manual Override:</strong> Drag and drop any field to create a custom connection.</li>
              <li><strong>Transformation:</strong> Apply simple logic (e.g., concatenate First + Last Name) during sync.</li>
            </ul>
          </article>
        );

      case 'data-residency':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Data Residency</h1>
            <p className="docs-p">BYND allows you to pin your data to specific geographic regions to meet strict local regulations like GDPR or APPI.</p>
            <div className="docs-image-container" style={{ padding: '24px' }}>
              <div style={{ padding: '20px', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '16px' }}>Data Residency Setting</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                   <div style={{ width: '16px', height: '16px', border: '2px solid var(--color-brand-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '8px', height: '8px', background: 'var(--color-brand-accent)', borderRadius: '50%' }} />
                   </div>
                   <span style={{ fontSize: '14px' }}>Lock to region</span>
                </div>
                <div style={{ padding: '10px 12px', background: 'white', border: '1px solid var(--color-border)', borderRadius: '6px', fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span>Asia-Tokyo (ap-northeast-1)</span>
                   <CaretDown size={14} />
                </div>
              </div>
            </div>
            <div className="docs-image-caption">Settings {'->'} Data Residency: Ensuring data at rest stays within your chosen jurisdiction.</div>
            <h2 className="docs-h2">Supported Regions</h2>
            <ul className="docs-list">
              <li><strong>EU-Frankfurt:</strong> Ideal for GDPR compliance.</li>
              <li><strong>Asia-Tokyo:</strong> Optimized for Japanese APPI standards.</li>
              <li><strong>UK-London:</strong> Tailored for UK data protection rules.</li>
              <li><strong>North America:</strong> Default high-performance nodes.</li>
            </ul>
          </article>
        );

      case 'api-webhooks':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">API & Webhooks</h1>
            <p className="docs-p">For developers, BYND provides a robust REST API and real-time webhooks to integrate sync logic into your own custom applications.</p>
            <h2 className="docs-h2">Authentication</h2>
            <p className="docs-p">All API requests must include your API key in the `Authorization` header.</p>
            <div className="docs-code">
              <span className="docs-code-line"><span className="docs-code-keyword">curl</span> -X GET https://api.bynd.io/v1/syncs \</span>
              <span className="docs-code-line">  -H <span className="docs-code-string">"Authorization: Bearer YOUR_API_KEY"</span></span>
            </div>
            <h2 className="docs-h2">Endpoints</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ padding: '12px' }}>Method</th>
                  <th style={{ padding: '12px' }}>Endpoint</th>
                  <th style={{ padding: '12px' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold', color: 'var(--color-success)' }}>GET</td>
                  <td style={{ padding: '12px' }}>/syncs</td>
                  <td style={{ padding: '12px' }}>Retrieve all sync contracts.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold', color: 'var(--color-brand-accent)' }}>POST</td>
                  <td style={{ padding: '12px' }}>/syncs</td>
                  <td style={{ padding: '12px' }}>Create a new sync contract.</td>
                </tr>
              </tbody>
            </table>
          </article>
        );

      case 'plans-pricing':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Plans & Pricing</h1>
            <p className="docs-p">BYND offers flexible pricing plans designed to scale with your business growth, from small startups to global enterprises.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
              {[
                { name: 'Starter Pulsar', price: '$59', features: ['10 Sync Nodes', '7-Day History', 'Email Support'] },
                { name: 'Enterprise Reactor', price: '$189', features: ['Unlimited Nodes', 'Infinite History', 'Priority Support', 'AI Mapping'], highlight: true },
                { name: 'Universal Supernova', price: 'Custom', features: ['On-Prem Nodes', 'SLA Guarantee', '24/7 Dedicated Support'] }
              ].map(plan => (
                <div key={plan.name} style={{ padding: '40px', background: 'white', borderRadius: '24px', border: plan.highlight ? '2px solid var(--color-brand-accent)' : '1px solid var(--color-border)', boxShadow: plan.highlight ? '0 20px 40px rgba(0,229,255,0.1)' : 'none' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{plan.name}</div>
                  <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--color-brand-deep)', marginBottom: '24px' }}>{plan.price}<span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 'normal' }}>/mo</span></div>
                  <ul className="docs-list" style={{ paddingLeft: 0, listStyle: 'none' }}>
                    {plan.features.map(f => <li key={f} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={18} color="var(--color-success)" /> {f}</li>)}
                  </ul>
                  <button className="docs-btn" style={{ width: '100%', marginTop: '24px', justifyContent: 'center', background: plan.highlight ? 'var(--color-brand-accent)' : 'var(--color-brand-deep)', color: plan.highlight ? 'var(--color-brand-deep)' : 'white' }}>Choose Plan</button>
                </div>
              ))}
            </div>
          </article>
        );

      case 'faq-general':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Frequently Asked Questions</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                { q: "Can I sync historical data?", a: "Yes, BYND can perform a deep historical sync of your entire record history during the initial contract setup." },
                { q: "What happens if my Excel file is offline?", a: "BYND queues all changes and synchronizes them the moment the file connection is restored, ensuring no data loss." },
                { q: "Does BYND support custom CRM fields?", a: "Absolutely. Our AI mapper detects custom fields automatically, and you can manually map them to any spreadsheet column." },
                { q: "How secure is my data?", a: "Your data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never store your record data longer than necessary for the sync operation." }
              ].map((faq, i) => (
                <div key={i} style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '12px', color: 'var(--color-brand-deep)' }}>{faq.q}</div>
                  <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </article>
        );

      case 'pending-entities':
      case 'handling-pending':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Pending Entities</h1>
            <p className="docs-p">Pending Entities are records that BYND identifies as potential duplicates but cannot merge with 100% certainty. These are held in a queue for your review.</p>
            <div className="docs-card" style={{ padding: '32px', background: '#FFFBEB', border: '1px solid #F59E0B', borderRadius: '12px', margin: '32px 0' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ fontWeight: 'bold' }}>Potential Match Detected</div>
                  <div style={{ padding: '4px 12px', background: '#F59E0B', color: 'white', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>84% CONFIDENCE</div>
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ fontSize: '13px' }}>
                     <div style={{ color: '#92400E', fontWeight: 'bold', marginBottom: '4px' }}>EXCEL RECORD</div>
                     <div>John Doe</div>
                     <div>john.d@example.com</div>
                  </div>
                  <div style={{ fontSize: '13px' }}>
                     <div style={{ color: '#92400E', fontWeight: 'bold', marginBottom: '4px' }}>HUBSPOT RECORD</div>
                     <div>Jonathan Doe</div>
                     <div>john.doe@example.com</div>
                  </div>
               </div>
               <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                  <button style={{ padding: '8px 16px', background: '#F59E0B', color: 'white', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>Merge Records</button>
                  <button style={{ padding: '8px 16px', background: 'white', color: '#92400E', border: '1px solid #F59E0B', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>Ignore</button>
               </div>
            </div>
            <div className="docs-image-caption">Pending Entity Card: Highlighting differences between potential duplicate records.</div>
            <h2 className="docs-h2">Confidence Scores</h2>
            <p className="docs-p">BYND uses fuzzy matching algorithms to calculate a confidence score for each pair of records.</p>
            <ul className="docs-list">
              <li><strong>{'>'} 95%:</strong> Automatically merged (if enabled in settings).</li>
              <li><strong>85% - 95%:</strong> Flagged for review with high recommendation to merge.</li>
              <li><strong>{'<'} 85%:</strong> Flagged for manual review.</li>
            </ul>
          </article>
        );

      case 'connect-hubspot':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Connect HubSpot</h1>
            <p className="docs-p">Integrating HubSpot with BYND allows you to synchronize Contacts, Companies, and Deals directly with your Excel or Salesforce nodes.</p>
            <div className="docs-image-container" style={{ backgroundColor: '#FF7A59', padding: '40px', display: 'flex', justifyContent: 'center' }}>
               <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <Briefcase size={48} color="#FF7A59" />
                  <div>
                     <div style={{ fontWeight: 'bold', fontSize: '18px' }}>HubSpot Integration</div>
                     <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Connected as: marketing@bynd.io</div>
                  </div>
               </div>
            </div>
            <h2 className="docs-h2">Available Objects</h2>
            <ul className="docs-list">
              <li><strong>Contacts:</strong> Full bidirectional sync of names, emails, and custom properties.</li>
              <li><strong>Deals:</strong> Sync deal stages, amounts, and close dates.</li>
              <li><strong>Companies:</strong> Keep your firmographic data consistent across systems.</li>
            </ul>
          </article>
        );

      case 'sync-contract':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Create a Sync Contract</h1>
            <p className="docs-p">A Sync Contract is the core logic that defines how two applications talk to each other. It includes mapping, direction, and frequency.</p>
            <div className="docs-image-container">
              <img src="/src/assets/docs/sync_comparison_1777566016971.png" alt="Sync Contract" className="docs-image" />
            </div>
            <h2 className="docs-h2">Configuration Steps</h2>
            <ol className="docs-list">
              <li>Select your <strong>Source</strong> (e.g. HubSpot) and <strong>Destination</strong> (e.g. Excel).</li>
              <li>Choose the <strong>Entity</strong> type (e.g. Contacts).</li>
              <li>Define the <strong>Sync Direction</strong> (One-way or Bidirectional).</li>
              <li>Finalize <strong>Field Mappings</strong> and save.</li>
            </ol>
          </article>
        );

      case 'sync-direction':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Choosing Sync Direction</h1>
            <p className="docs-p">Control how data flows between your connected applications. You can choose between one-way and two-way synchronization.</p>
            <div className="docs-image-container">
              <img src="/src/assets/docs/sync_comparison_1777566016971.png" alt="Sync Direction" className="docs-image" />
            </div>
            <h2 className="docs-h2">Options</h2>
            <ul className="docs-list">
              <li><strong>Bidirectional (Recommended):</strong> Keeps both systems in sync. Updates in one are pushed to the other.</li>
              <li><strong>Unidirectional (One-way):</strong> Only pushes data from the Source to the Destination. Useful for read-only archiving or reporting.</li>
            </ul>
          </article>
        );

      case 'welcome':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Welcome to BYND</h1>
            <p className="docs-p">
              BYND is the industry-leading engine for real-time, high-parity data synchronization across enterprise nodes. 
              Our no-code bidirectional sync platform connects Excel, CRMs, and Invoicing tools seamlessly, ensuring your data is always accurate and up-to-date.
            </p>
            <div className="docs-callout docs-callout-tip">
              <div className="docs-callout-icon"><RocketLaunch weight="fill" /></div>
              <div>
                <strong>Key Benefits:</strong>
                <ul className="docs-list" style={{ marginTop: '8px', marginBottom: 0 }}>
                  <li>Saves 10+ hours per week on manual data entry</li>
                  <li>Eliminates human error across your entire stack</li>
                  <li>Ensures 100% global tax compliance automatically</li>
                </ul>
              </div>
            </div>
            <div className="docs-image-container">
              <img src="/src/assets/docs/docs_welcome_hero_1777565989226.png" alt="BYND Welcome Hero" className="docs-image" />
              <div className="docs-image-caption">Hero illustration: Automated data flow between Excel, CRM, and Invoicing.</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="docs-btn" onClick={() => setActiveSection('quick-start')}>
                Get Started <ArrowRight weight="bold" />
              </button>
              <button className="docs-btn" style={{ background: 'var(--color-brand-accent)', color: 'var(--color-brand-deep)' }} onClick={() => setActiveSection('supported-apps')}>
                Supported Apps <AppWindow weight="bold" />
              </button>
              <AnimatedHomeButton style={{ background: 'white', color: 'var(--color-brand-deep)', border: '1px solid var(--color-border)' }} />
            </div>
          </article>
        );

      case 'quick-start':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Quick Start Guide</h1>
            <p className="docs-p">Follow these five simple steps to get your first sync contract up and running in minutes.</p>
            <div className="docs-image-container" style={{ maxWidth: '400px', margin: '32px auto' }}>
              <img src="/src/assets/docs/quick_start_flow_1777566003929.png" alt="Quick Start Flow" className="docs-image" />
              <div className="docs-image-caption">The 5-step BYND onboarding process.</div>
            </div>
            <ol className="docs-list" style={{ listStyleType: 'decimal' }}>
              <li>
                <strong>Sign up:</strong> Create your BYND account and set up your workspace.
              </li>
              <li>
                <strong>Connect Apps:</strong> Choose at least two applications (e.g., Excel and HubSpot) to link together.
              </li>
              <li>
                <strong>Map Your Fields:</strong> Use our AI-assisted mapper to connect matching fields or define them manually.
              </li>
              <li>
                <strong>Choose Sync Direction:</strong> Decide if you want data to flow one way or bidirectionally.
              </li>
              <li>
                <strong>Start Syncing:</strong> Save your contract and watch your data flow in real-time.
              </li>
            </ol>
          </article>
        );

      case 'bidirectional-sync':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Bidirectional Sync</h1>
            <h2 className="docs-h2">The Power of Two-Way Flow</h2>
            <p className="docs-p">
              Unlike traditional one-way integrations, BYND's bidirectional sync ensures that data flows both ways between your connected apps. 
              Any change made in your CRM is instantly reflected in your Excel sheets, and vice-versa.
            </p>
            <div className="docs-image-container">
              <img src="/src/assets/docs/sync_comparison_1777566016971.png" alt="Sync Comparison" className="docs-image" />
              <div className="docs-image-caption">One-way vs. Bidirectional synchronization.</div>
            </div>
            <h3 className="docs-h3">Why choose Bidirectional?</h3>
            <ul className="docs-list">
              <li><strong>Perfect Parity:</strong> All systems stay identical without manual intervention.</li>
              <li><strong>Zero Lag:</strong> Changes are propagated instantly across nodes.</li>
              <li><strong>Truth Consensus:</strong> BYND acts as the arbiter, ensuring the latest data wins.</li>
            </ul>
          </article>
        );

      case 'connect-excel':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Connect Excel (OneDrive)</h1>
            <p className="docs-p">Linking your Excel workbooks to BYND allows you to use your familiar spreadsheet interface as a live database for your other tools.</p>
            <div className="docs-image-container">
              <img src="/src/assets/docs/onboarding_connect_sources_1777566039328.png" alt="Connect Excel" className="docs-image" />
              <div className="docs-image-caption">Click "Connect" on the Excel card to begin the authentication flow.</div>
            </div>
            <h2 className="docs-h2">Setup Instructions</h2>
            <ol className="docs-list">
              <li>Navigate to <strong>App Connections</strong> and find the Excel card.</li>
              <li>Click <strong>Connect</strong> to launch the Microsoft OAuth window.</li>
              <li>Sign in to your Microsoft account and grant BYND read/write permissions.</li>
              <li>Select the specific workbook (.xlsx) you wish to sync.</li>
            </ol>
            <div className="docs-callout docs-callout-warning">
              <div className="docs-callout-icon"><Warning weight="fill" /></div>
              <div>
                <strong>Co-authoring Note:</strong> Ensure your Excel file is stored on OneDrive or SharePoint to support real-time co-authoring and sync stability.
              </div>
            </div>
          </article>
        );

      case 'sync-status':
        return (
          <article className="docs-article">
            <h1 className="docs-h1">Monitoring Sync Status</h1>
            <p className="docs-p">Your Dashboard provides a real-time overview of your entire data mesh health and performance.</p>
            <div className="docs-image-container">
              <img src="/src/assets/docs/dashboard_screenshot_1777566053664.png" alt="BYND Dashboard" className="docs-image" />
              <div className="docs-image-caption">The BYND Dashboard showing KPI cards and recent job history.</div>
            </div>
            <h2 className="docs-h2">Key Metrics</h2>
            <ul className="docs-list">
              <li><strong>Active Syncs:</strong> The number of currently running sync contracts.</li>
              <li><strong>Rows Processed:</strong> Total volume of data records synchronized.</li>
              <li><strong>Conflicts:</strong> Pending data collisions that require resolution.</li>
              <li><strong>Health:</strong> Percentage of successful syncs without errors.</li>
            </ul>
          </article>
        );

      // Fallback for other sections (mocked for brevity in this initial render)
      default:
        return (
          <article className="docs-article">
            <h1 className="docs-h1">{navItems.flatMap(c => c.items).find(i => i.id === activeSection)?.title || 'Page Not Found'}</h1>
            <p className="docs-p">
              This section is currently being updated with high-fidelity content and images. 
              BYND is committed to providing the most detailed documentation for your data sync needs.
            </p>
            <div className="docs-image-container" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyCenter: 'center', backgroundColor: '#f1f5f9' }}>
              <div style={{ textAlign: 'center', color: '#94a3b8' }}>
                <BookOpen size={64} weight="thin" />
                <p>High-fidelity illustration coming soon</p>
              </div>
            </div>
            <div className="docs-callout docs-callout-tip">
              <div className="docs-callout-icon"><Terminal weight="fill" /></div>
              <div>
                <strong>Did you know?</strong> You can always reach out to our technical team for custom implementation advice on this specific feature.
              </div>
            </div>
          </article>
        );
    }
  };

  return (
    <div className="docs-container">
      <SEO title="Documentation | BYND" description="Official documentation for BYND bidirectional sync platform." />
      
      {/* Sticky Sidebar */}
      <aside className="docs-sidebar" data-lenis-prevent>
        <div className="docs-logo" style={{ padding: '0 12px' }}>
          <Logo className="scale-100" />
        </div>

        <div className="docs-search-container">
          <MagnifyingGlass className="docs-search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search documentation..." 
            className="docs-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <nav className="docs-nav">
          {filteredNavItems.map(category => (
            <div key={category.id} className="docs-nav-category">
              <div 
                className="docs-nav-category-title"
                onClick={() => {
                  toggleCategory(category.id);
                  if (category.items.length > 0) {
                    setActiveSection(category.items[0].id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {category.icon} {category.title}
                </span>
                {expandedCategories.includes(category.id) ? <CaretDown size={14} /> : <CaretRight size={14} />}
              </div>
              
              {expandedCategories.includes(category.id) && (
                <div className="docs-nav-list">
                  {category.items.map(item => (
                    <a 
                      key={item.id} 
                      href={`#${item.id}`}
                      className={`docs-nav-item ${activeSection === item.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
          <AnimatedHomeButton style={{ width: '100%' }} />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="docs-main">
        <header style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
          <AnimatedHomeButton style={{ background: 'transparent', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)', fontSize: '13px', padding: '8px 16px' }} />
        </header>
        {renderContent()}
        
        {/* Simple Footer inside docs */}
        <footer style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: '14px', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} BYND Technologies. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default DocsPortal;
