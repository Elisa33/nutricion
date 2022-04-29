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
      'primary': '#81A250',
      'secondary': '#8E6543',
      'green': '#AEC060',
      'olive': '#BFB521',
      'accent': '#784F31',
      'neutral': '#fafafa',
    },
    fontFamily: {
      'hand': ['Marck Script'],
      'sans': ['Raleway', 'sans-serif']
      
    },
    extend: {},
  },
  plugins: [
    
  ]
}
