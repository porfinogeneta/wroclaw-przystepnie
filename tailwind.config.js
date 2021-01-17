module.exports = {
  purge: ["../pages/**/*.vue",
    "../components/**/*.vue",],
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
