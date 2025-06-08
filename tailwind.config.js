/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-pink': '#ff00ff',
        'neon-green': '#00ff41',
        'neon-purple': '#bf00ff',
        'cyber-dark': '#0A0A0B',
        'cyber-grid': '#1a1a2e',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'holographic': 'holographic 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%': { 
            textShadow: '2px 2px var(--neon-pink), -2px -2px var(--neon-blue)',
            transform: 'translate(0)'
          },
          '25%': { 
            textShadow: '-2px 2px var(--neon-pink), 2px -2px var(--neon-blue)',
            transform: 'translate(-2px, 2px)'
          },
          '50%': { 
            textShadow: '2px -2px var(--neon-pink), -2px 2px var(--neon-blue)',
            transform: 'translate(2px, -2px)'
          },
          '75%': { 
            textShadow: '-2px -2px var(--neon-pink), 2px 2px var(--neon-blue)',
            transform: 'translate(-2px, -2px)'
          },
          '100%': { 
            textShadow: '2px 2px var(--neon-pink), -2px -2px var(--neon-blue)',
            transform: 'translate(0)'
          },
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 20px var(--neon-blue)',
            filter: 'brightness(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px var(--neon-blue), 0 0 60px var(--neon-blue)',
            filter: 'brightness(1.2)'
          },
        },
        holographic: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}