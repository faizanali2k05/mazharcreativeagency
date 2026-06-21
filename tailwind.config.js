/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020810',
          900: '#08111F',
          800: '#0d1a2e',
          700: '#122240',
          600: '#1a3356',
        },
        gold: {
          300: '#FFE066',
          400: '#FFD700',
          500: '#E8C200',
          600: '#D4AF37',
          700: '#B8960C',
          800: '#8B6914',
        },
        dark: {
          900: '#050505',
          800: '#0a0a0a',
          700: '#111111',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
        label: ['Raleway', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, #FFD700 0%, #D4AF37 60%, #8B6914 100%)',
        'navy-gradient': 'linear-gradient(180deg, #08111F 0%, #050C16 100%)',
      },
      animation: {
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
