/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040406',
          900: '#07070b',
          800: '#0b0b11',
          700: '#101018',
          600: '#17171f',
        },
        gold: {
          200: '#F7ECC9',
          300: '#F0D98C',
          400: '#E8C77E',
          500: '#D4AF37',
          600: '#C9A227',
          700: '#A6841C',
          800: '#8B6914',
        },
        ivory: {
          100: '#F6F1E7',
          200: '#E9E1D0',
          300: '#C6BCA6',
        },
      },
      fontFamily: {
        sans: ['Vision Sans', 'Onest', 'system-ui', 'sans-serif'],
        serif: ['Vision Sans', 'Onest', 'system-ui', 'sans-serif'],
        display: ['Vision Sans', 'Onest', 'system-ui', 'sans-serif'],
        label: ['Vision Sans', 'Onest', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #A6841C 0%, #D4AF37 35%, #F0D98C 55%, #D4AF37 75%, #A6841C 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, #F0D98C 0%, #D4AF37 55%, #8B6914 100%)',
        'obsidian-gradient': 'linear-gradient(180deg, #07070b 0%, #040406 100%)',
      },
      animation: {
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'slide-up': 'slideUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glow: {
          from: { textShadow: '0 0 10px rgba(212,175,55,0.5)' },
          to: { textShadow: '0 0 30px rgba(255,215,0,0.9), 0 0 60px rgba(212,175,55,0.5)' },
        },
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.3)',
        'gold': '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 0 50px rgba(212, 175, 55, 0.5), 0 0 100px rgba(212, 175, 55, 0.2)',
        'skeu': '8px 8px 24px rgba(0,0,0,0.6), -4px -4px 12px rgba(255,255,255,0.03), inset 1px 1px 0px rgba(255,255,255,0.06)',
        'skeu-lg': '16px 16px 48px rgba(0,0,0,0.7), -6px -6px 20px rgba(255,255,255,0.025), inset 1px 1px 0px rgba(255,255,255,0.05)',
        'skeu-inset': 'inset 4px 4px 12px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(255,255,255,0.04)',
        'card-3d': '20px 20px 60px rgba(0,0,0,0.8), -10px -10px 30px rgba(255,255,255,0.02)',
      },
    },
  },
  plugins: [],
};
