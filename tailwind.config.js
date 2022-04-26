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
      'primary': '#848C49',
      'secondary': '#D3D91E',
      'olive': '#BFB521',
      'accent': '#F24141',
      'neutral': '#F2F2F2',
    },
    extend: {},
  },
  plugins: [
    
  ]
}
