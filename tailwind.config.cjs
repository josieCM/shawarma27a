/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        primary: '#FF6B00',
        secondary: '#1E1E1E',
        cream: '#FDFBF7',
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6B00',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      boxShadow: {
        'neu-sm': '6px 6px 12px #e5e3df, -6px -6px 12px #ffffff',
        'neu-md': '10px 10px 20px #e5e3df, -10px -10px 20px #ffffff',
        'neu-lg': '20px 20px 60px #e5e3df, -20px -20px 60px #ffffff',
        'neu-inset': 'inset 6px 6px 12px #e5e3df, inset -6px -6px 12px #ffffff',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};