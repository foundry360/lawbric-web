/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lawbric: {
          blue: '#0284c7',
          'blue-dark': '#0369a1',
        },
        gray: {
          bg: '#f5f5f5',
          'bg-soft': '#f9fafb',
          accent: '#6b7280',
          text: '#374151',
          dark: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(2, 132, 199, 0.35)' },
          '50%': { opacity: '0.98', boxShadow: '0 0 0 14px rgba(2, 132, 199, 0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
