const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      'white': '#ffffff',
      'primary': '#F24141',
      'secondary': '#12bbd4',
      'green': '#D3D91E',
      'olive': '#BFB521',
      'accent': '#848C49',
      'neutral': '#F2F2F2',
    },
    extend: {},
  },
  plugins: [
    
  ]
}
