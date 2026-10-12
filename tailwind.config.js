/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          peach: "#F9ECE5",
          sand: "#F4DFD2",
          terracotta: "#C87D65",
          terracottaDark: "#9A5038",
          gold: "#D4AF37",
          goldLight: "#F5E7A3",
          goldDark: "#A67C1E",
          sage: "#8FA89B",
          sageLight: "#D9E5DE",
          sageDark: "#4A6B5C",
          lake: "#7FA8A6",
          lakeLight: "#D0E5E4",
          cream: "#FAF7F2",
          maroon: "#7B241C",
          bronze: "#634735",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cinzelDec: ['"Cinzel Decorative"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        alex: ['"Alex Brush"', 'cursive'],
        marcellus: ['"Marcellus"', 'serif'],
        prata: ['"Prata"', 'serif'],
        bodoni: ['"Bodoni Moda"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple': 'ripple 3s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
