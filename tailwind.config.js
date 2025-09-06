/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Space/Black Hole theme
        space: {
          black: '#000000',
          darkGray: '#0a0a0a',
          charcoal: '#1a1a1a',
          nebula: '#2a1a3a',
          cosmic: '#1e1e2e',
          purple: '#6366f1',
          gold: '#fbbf24',
          yellow: '#facc15',
          orange: '#f97316',
          cyan: '#06b6d4',
          white: '#ffffff',
        },
        // Retro theme colors - Updated with provided palette
        retro: {
          beige: '#F5F5DC',      // Background: Beige retro paper tone
          skyBlue: '#A7C7E7',    // Primary accent: Soft sky blue
          lightYellow: '#FFFACD', // Secondary accent: Light retro yellow
          pastelGreen: '#90EE90', // Highlight: Pastel green
          darkGray: '#333333',   // Text: Retro dark gray instead of pure black
          darkCyan: '#2F4F4F',   // Box outlines: Retro muted dark cyan/gray
          // Keep some existing colors for backwards compatibility
          cream: '#faf7f0',
          gold: '#d4af37',
          orange: '#ff8c42',
          coral: '#ff6b6b',
          sage: '#87a96b',
          teal: '#4ecdc4',
          navy: '#2c3e50',
          charcoal: '#34495e',
          white: '#ffffff',
        },
        primary: {
          50: '#fef3c7',
          100: '#fde68a', 
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        accent: {
          primary: '#fbbf24',
          secondary: '#6366f1',
          tertiary: '#06b6d4',
        }
      },
      fontFamily: {
        'retro': ['Courier Prime', 'Courier New', 'monospace'],
        'serif': ['IBM Plex Serif', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'retro-slide': 'retroSlide 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%': {
            textShadow: '0 0 5px #A7C7E7, 0 0 10px #A7C7E7, 0 0 15px #A7C7E7',
          },
          '100%': {
            textShadow: '0 0 10px #A7C7E7, 0 0 20px #A7C7E7, 0 0 30px #A7C7E7',
          },
        },
        retroSlide: {
          '0%': {
            transform: 'translateX(-100%) skewX(-10deg)',
          },
          '100%': {
            transform: 'translateX(0) skewX(0deg)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 5px #A7C7E7, 0 0 10px #A7C7E7, 0 0 15px #A7C7E7',
          },
          '50%': {
            boxShadow: '0 0 10px #A7C7E7, 0 0 20px #A7C7E7, 0 0 30px #A7C7E7, 0 0 40px #A7C7E7',
          },
        },
      },
      backgroundImage: {
        'retro-gradient': 'linear-gradient(135deg, #F5F5DC 0%, #FFFACD 50%, #A7C7E7 100%)',
        'retro-paper': 'linear-gradient(45deg, #F5F5DC 25%, transparent 25%), linear-gradient(-45deg, #F5F5DC 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #F5F5DC 75%), linear-gradient(-45deg, transparent 75%, #F5F5DC 75%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'retro-grid': '20px 20px',
      },
    },
  },
  plugins: [],
}

