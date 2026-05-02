import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = 'website', noindex = false }) => {
  const siteName = 'BYND Sovereign Data Sync';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDesc = "BYND is the industry-leading sovereign data synchronization engine for high-parity enterprise ecosystems. Real-time, bidirectional sync for CRM, ERP, and spreadsheets.";
  const metaDescription = description || defaultDesc;
  const siteUrl = url || 'https://bynd-sync.com'; // Placeholder domain
  const ogImage = image || '/og-image.png'; // Should be a absolute path in production

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="theme-color" content="#030712" />
    </Helmet>
  );
};

export default SEO;
