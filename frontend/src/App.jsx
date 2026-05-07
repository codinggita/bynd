import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import SkeletonLoader from './components/SkeletonLoader';

// Lazy Loaded Pages
const Landing = lazy(() => import('./pages/Landing'));
const Auth = lazy(() => import('./pages/Auth'));
const Pricing = lazy(() => import('./pages/Pricing'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Onboarding = lazy(() => import('./pages/Onboarding'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ConflictQueue = lazy(() => import('./pages/ConflictQueue'));
const PendingEntities = lazy(() => import('./pages/PendingEntities'));
const SyncContracts = lazy(() => import('./pages/SyncContracts'));
const FieldMapping = lazy(() => import('./pages/FieldMapping'));
const JobHistory = lazy(() => import('./pages/JobHistory'));
const Settings = lazy(() => import('./pages/Settings'));
const Logout = lazy(() => import('./pages/Logout'));
const DocsPortal = lazy(() => import('./pages/DocsPortal'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';
import { useTheme } from './hooks/useTheme';
import { useAnalytics } from './hooks/useAnalytics';

import DashboardLayout from './components/DashboardLayout';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';

function App() {
  const { themeMode } = useTheme();
  const theme = getTheme(themeMode);
  const { fetchProfile, token, user } = useAuth();
  
  useAnalytics(); // Initialize global tracking

  useEffect(() => {
    if (token && !user) {
      fetchProfile();
    }
  }, [token, user]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#030712',
            color: '#fff',
            border: '1px solid rgba(18, 231, 255, 0.2)',
            borderRadius: '16px',
            fontSize: '13px',
            fontWeight: 'bold'
          },
        }}
      />
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/onboarding" element={<Onboarding />} />
          
          <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/conflicts" element={<ConflictQueue />} />
            <Route path="/pending" element={<PendingEntities />} />
            <Route path="/contracts" element={<SyncContracts />} />
            <Route path="/mapping" element={<ProtectedRoute><FieldMapping /></ProtectedRoute>} />
            <Route path="/history" element={<ProtectedRoute><JobHistory /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          </Route>
          
          {/* SEO & Legal Routes */}
          <Route path="/features" element={<Landing />} />
          <Route path="/docs" element={<DocsPortal />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback 404 — must be LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
