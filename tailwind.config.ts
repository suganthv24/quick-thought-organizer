
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "#F5F6FA",
        accent: {
          blue: "#D3E4FD",
          green: "#F2FCE2",
          purple: "#E5DEFF",
          peach: "#FDE1D3",
          yellow: "#FEF7CD",
          pink: "#FFDEE2",
        },
        card: "#fff",
      },
      borderRadius: {
        lg: '1.25rem',
        md: '1rem',
        sm: '0.5rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      boxShadow: {
        pleasant: '0 6px 24px -2px rgba(44,62,80,0.07), 0 1.5px 12px 0 rgba(110,120,132,0.02);',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(.53,.18,.42,1.12) both',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
