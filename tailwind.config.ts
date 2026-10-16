import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: '#4338CA',
        violet: '#7C3AED',
        ink: '#111827',
        night: '#1E1B4B',
        mist: '#EEF2FF',
        whatsapp: '#25D366',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(49,46,129,.10)',
      },
    },
  },
  plugins: [],
};

export default config;
