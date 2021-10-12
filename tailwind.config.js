module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'ui-sans-serif', 'system-ui'],
      'serif': ['PT Serif', 'ui-serif', 'Georgia'],
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      grab: 'grab',
      'zoom-in': 'zoom-in',
    },
    extend: {
      colors: {
        gray: {
          50: '#FAFAFA',
          100: '#F4F4F4',
          200: '#E7E7E7',
          300: '#D5D5D5',
          400: '#A3A3A3',
          500: '#727272',
          600: '#555555',
          700: '#414141',
          800: '#1E1E1E',
          900: '#181818',
        }
      }
    },
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
