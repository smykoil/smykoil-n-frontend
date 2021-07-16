module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'ui-sans-serif', 'system-ui'],
      'serif': ['PT Serif', 'ui-serif', 'Georgia'],
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
