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
    extend: {},
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
