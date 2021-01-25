module.exports = {
  purge: {
    content: [
        './pages/About.vue',
        './pages/Home.vue'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {translate: ['motion-safe'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
