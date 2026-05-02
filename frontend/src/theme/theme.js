import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#12E7FF',
    },
    secondary: {
      main: '#0A1929',
    },
    background: {
      default: mode === 'dark' ? '#030712' : '#F8FAFC',
      paper: mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
    },
    text: {
      primary: mode === 'dark' ? '#FFFFFF' : '#0F172A',
      secondary: mode === 'dark' ? '#94A3B8' : '#475569',
    },
  },
  typography: {
    fontFamily: '"Inter", "sans-serif"',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 900 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(12px)',
        },
      },
    },
  },
});
