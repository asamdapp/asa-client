/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cardinal: "rgb(185,31,46)",
        downriver: "rgb(16,52,100)",
        atoll: "rgb(11,98,107)",
        firefly: "rgb(13,26,44)",
        zircon: "rgb(252,253,255)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".gradient-downriver-to-atoll": {
          background: `linear-gradient(110deg, ${theme(
            "colors.downriver"
          )} 30%, ${theme("colors.atoll")} 100%)`,
        },
        ".gradient-atoll-to-downriver": {
          background: `linear-gradient(110deg, ${theme(
            "colors.atoll"
          )} 30%, ${theme("colors.downriver")} 100%)`,
        },
        ".gradient-firefly-to-downriver": {
          background: `linear-gradient(110deg, ${theme(
            "colors.firefly"
          )} 30%, ${theme("colors.downriver")} 100%)`,
        },
        ".gradient-downriver-to-firefly": {
          background: `linear-gradient(110deg, ${theme(
            "colors.downriver"
          )} 30%, ${theme("colors.firefly")} 100%)`,
        },
      });
    }),
  ],
};
