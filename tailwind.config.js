/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "noto-serif": "'Noto Serif', serif",
      "open-sans": "'Open Sans', sans-serif",
    },
    transitionDuration: {
      DEFAULT: "0.4s",
    },
    extend: {
      colors: {
        cardinal: "rgb(185,31,46)",
        downriver: "rgb(16,52,100)",
        atoll: "rgb(11,98,107)",
        "jelly-bean": "rgb(40,113,145)",
        firefly: "rgb(13,26,44)",
        zircon: "rgb(252,253,255)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".gradient-downriver-to-jelly-bean": {
          	"background-image": `linear-gradient(90deg, ${theme(
            "colors.downriver"
          )} 0%, ${theme("colors.jelly-bean")} 100%)`,
        },
        ".gradient-jelly-bean-to-downriver": {
          	"background-image": `linear-gradient(90deg, ${theme(
            "colors.jelly-bean"
          )} 0%, ${theme("colors.downriver")} 100%)`,
        },
        ".gradient-firefly-to-downriver": {
          	"background-image": `linear-gradient(90deg, ${theme(
            "colors.firefly"
          )} 0%, ${theme("colors.downriver")} 100%)`,
        },
        ".gradient-downriver-to-firefly": {
          	"background-image": `linear-gradient(90deg, ${theme(
            "colors.downriver"
          )} 0%, ${theme("colors.firefly")} 100%)`,
        },
      });
    }),
  ],
};
