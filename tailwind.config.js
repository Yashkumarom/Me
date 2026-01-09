/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'quantum-pulse': 'quantumPulse 4s ease-in-out infinite',
        'holo-shift': 'holoShift 3s ease-in-out infinite',
        'nebula-drift': 'nebulaDrift 20s linear infinite',
        'premium-glow': 'premiumGlow 3s ease-in-out infinite',
        'premium-pulse': 'premiumPulse 2s ease-in-out infinite',
        'premium-shift': 'premiumShift 15s linear infinite',
        'cosmic-rotate': 'cosmicRotate 15s linear infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
        'cyber-scan': 'cyber-scan 3s linear infinite',
        'gaming-pulse': 'gaming-pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(191, 0, 255, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        quantumPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 243, 255, 0.3), 0 0 40px rgba(191, 0, 255, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 243, 255, 0.6), 0 0 80px rgba(191, 0, 255, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        holoShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        nebulaDrift: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateX(-100px) translateY(-50px) rotate(360deg)' },
        },
        premiumGlow: {
          '0%': { 
            textShadow: '0 0 20px #c9b037, 0 0 40px #c9b037, 0 0 60px #c9b037',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            textShadow: '0 0 20px #e6e6fa, 0 0 40px #e6e6fa, 0 0 60px #e6e6fa',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            textShadow: '0 0 20px #b8860b, 0 0 40px #b8860b, 0 0 60px #b8860b',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            textShadow: '0 0 20px #daa520, 0 0 40px #daa520, 0 0 60px #daa520',
            filter: 'hue-rotate(270deg)'
          },
          '100%': { 
            textShadow: '0 0 20px #c9b037, 0 0 40px #c9b037, 0 0 60px #c9b037',
            filter: 'hue-rotate(360deg)'
          },
        },
        premiumPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(201, 176, 55, 0.8), 0 0 60px rgba(218, 165, 32, 0.6), inset 0 0 30px rgba(230, 230, 250, 0.3)',
            borderColor: 'rgba(201, 176, 55, 0.8)'
          },
          '50%': { 
            boxShadow: '0 0 50px rgba(230, 230, 250, 1), 0 0 100px rgba(184, 134, 11, 0.8), inset 0 0 50px rgba(218, 165, 32, 0.5)',
            borderColor: 'rgba(230, 230, 250, 1)'
          },
        },
        premiumShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        cosmicRotate: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'neon-glow': {
          '0%': { boxShadow: '0 0 20px #00D4FF, 0 0 40px #00D4FF, 0 0 60px #00D4FF' },
          '100%': { boxShadow: '0 0 30px #39FF14, 0 0 60px #39FF14, 0 0 90px #39FF14' },
        },
        'cyber-scan': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'gaming-pulse': {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(1.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'navy-dark': '#0A0E27',
        'navy-blue': '#1A1F3A',
        'electric-blue': '#00D4FF',
        'neon-green': '#39FF14',
        'cyber-purple': '#8A2BE2',
        'gaming-orange': '#FF6B35',
        'neon-pink': '#FF1493',
        'matrix-green': '#00FF41',
        'gaming-red': '#FF073A',
        'cyber-cyan': '#00FFFF',
        'neon-yellow': '#FFFF00',
        'dark-slate': '#2F3349',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 243, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(191, 0, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.5)',
        'neon-gold': '0 0 20px rgba(255, 215, 0, 0.7)',
        'quantum': '0 0 30px rgba(0, 243, 255, 0.4), 0 0 60px rgba(191, 0, 255, 0.3)',
        'holo': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        '3d': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 80px rgba(0, 243, 255, 0.2)',
        'premium': '0 0 30px rgba(201, 176, 55, 0.4), 0 0 60px rgba(218, 165, 32, 0.3)',
        'champagne': '0 0 40px rgba(247, 231, 206, 0.8), 0 0 80px rgba(230, 230, 250, 0.6)',
        'luxury': '0 0 50px rgba(184, 134, 11, 0.7), 0 0 100px rgba(201, 176, 55, 0.5)',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
}