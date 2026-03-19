/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3A',         // azul profundo
        secondary: '#0F172A',       // slate oscuro
        card: '#1E293B',            // cards
        accent: '#3B82F6',          // azul de acento
        textSecondary: '#94A3B8',   // texto secundario
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
