import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * BYND Sovereign Analytics Hook
 * Tracks page views and events in dev console (ready for G-tag production)
 */
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname + location.search;
    console.log(`[BYND-ANALYTICS] Page View: ${page}`);
    // if (window.gtag) window.gtag('config', 'G-XXXXXXXXXX', { page_path: page });
  }, [location]);

  const trackEvent = (action, category, label, value) => {
    console.log(`[BYND-ANALYTICS] Event: ${category} > ${action} (${label})`);
    /*
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
    */
  };

  return { trackEvent };
};
