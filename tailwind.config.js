module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00c8b4',
        'primary-light': '#33d9c8',
        'primary-dark': '#009e8e',
        accent: '#0ea5e9',
        'accent-light': '#38bdf8',
        bg: '#040d14',
        'bg-2': '#071520',
        'bg-card': '#0a1e2e',
        surface: '#e8f4f2',
        subtle: '#7fa8a0',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
