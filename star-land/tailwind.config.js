/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#FFF3E6',
          100: '#FFE0BF',
          200: '#FFCC99',
          300: '#FFB873',
          400: '#FFA34D',
          500: '#FF8C42',
          600: '#E67A35',
          700: '#CC6828',
          800: '#B3561B',
          900: '#99440E',
        },
        secondary: {
          50: '#E6FAF9',
          100: '#BFF2EF',
          200: '#99EAE5',
          300: '#73E2DB',
          400: '#4DDAD1',
          500: '#4ECDC4',
          600: '#3DB8B0',
          700: '#2DA39C',
          800: '#1C8E88',
          900: '#0C7974',
        },
        chinese: {
          light: '#D7BDE2',
          DEFAULT: '#9B59B6',
          dark: '#7D3C98',
        },
        math: {
          light: '#A9DFBF',
          DEFAULT: '#2ECC71',
          dark: '#1E8449',
        },
        english: {
          light: '#F5B7B1',
          DEFAULT: '#E74C3C',
          dark: '#B03A2E',
        },
        star: {
          gold: '#FFD700',
          silver: '#C0C0C0',
          bronze: '#CD7F32',
        },
      },
      fontFamily: {
        title: ['"ZCOOL KuaiLe"', 'cursive'],
        body: ['"Noto Sans SC"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
