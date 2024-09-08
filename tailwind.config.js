/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'poppins': ['poppins', 'san-serif']
      },
      backgroundImage: {
        'gradient-to-diagonal': 'linear-gradient(to top right, #090025 60%, #18015e)',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'scroll-left': 'scrollLeft 30s linear infinite',
      },
    },
  },
  plugins: [],
}

