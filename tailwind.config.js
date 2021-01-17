module.exports = {
  purge: ["./pages/**/*.vue",
    "./components/**/*.vue",
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue"],
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
