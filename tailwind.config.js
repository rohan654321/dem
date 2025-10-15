// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0e2a47',
        accent: '#e01919',
        secondary: '#cfd3d8',
        'secondary-dark': '#70777f',
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(135deg, #e01919, #ff3b3b)',
        'gradient-silver': 'linear-gradient(135deg, #cfd3d8, #70777f)',
      }
    },
  },
  plugins: [],
}