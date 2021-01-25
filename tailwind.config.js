module.exports = {
  purge: {
    enabled: true,
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
