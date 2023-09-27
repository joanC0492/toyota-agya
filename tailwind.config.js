const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    letterSpacing: {
      1: "0.24px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "toyota-main": "#04141C",
        "toyota-orange": "#EF872D",
        "toyota-brown": "#201911",
      },
    },
    timeSize: {
      // clase: valor
      250: "250ms",
      500: "500ms",
      750: "750ms",
      1000: "1000ms",
      1250: "1250ms",
      1500: "1500ms",
      1750: "1750ms",
      2000: "2000ms",
      2250: "2250ms",
      2500: "2500ms",
      2750: "2750ms",
      3000: "3000ms",
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          //Nombre de la clase
          "animation-delay": (value) => {
            return {
              "animation-delay": value, //Nombre del valor css
            };
          },
          //Nombre de la clase
          "animation-duration": (value) => {
            return {
              "animation-duration": value, //Nombre del valor css
            };
          },
        },
        {
          values: theme("timeSize"),
        }
      );
    }),
  ],
};
