const { url } = require("inspector");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        lor: 'url("/static/assets/Library_Background.jpg")',
        loading: 'url("/static/assets/Loading_Screeen_2.jpg")',
        wings: 'url("/static/assets/wings.png")',
        lorlogo: 'url("/static/assets/logo.png")',
        limbuslogo: 'url("/static/assets/limbus.png")',
      },
      fontFamily: {
        lor: ["Nanum Gothic"],
        square: ['NanumSquare'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
