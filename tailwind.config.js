/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Calibre", "San Francisco" ,"SF Pro Text","-apple-system","system-ui","BlinkMacSystemFont","Roboto"],
        code: ["SF Mono", "Fira Code"," Fira Mono"," Roboto Mono","ucida Console","Monaco","Monospace"],
      },
      backgroundColor: {
        'dark': '#0a192f',
        'light': '#ffffff',
      },
      textColor: {
        'dark': '#ffffff',
        'light': '#333333',
      },
        colors: {
        "main-pink": "#ff64ff",
        "main-navy": "#0a192f",
      },
    },
  },
  plugins: [],
}