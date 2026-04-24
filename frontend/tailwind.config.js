/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-bg-page': '#F8FAFC',
        'color-surface': '#FFFFFF',
        'color-text-primary': '#0F172A',
        'color-text-secondary': '#475569',
        'color-brand-deep': '#0A1929',
        'color-brand-accent': '#00E5FF',
        'color-success': '#10B981',
        'color-warning': '#F59E0B',
        'color-error': '#EF4444',
        'color-border': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        'lg': '8px',
        '2xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.06)',
        '2xl': '0 20px 60px rgba(0,0,0,0.15)',
      },
      spacing: {
        'base': '8px',
      }
    },
  },
  plugins: [],
}
