const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      // colors: {
      //   current: "currentColor",
      //   brand: {
      //     dark: "var(--color-primary)",
      //     darkHover: "#2f5c9a",
      //     darkest: "#7f1D1D",
      //   },
      // },
    },
    zIndex: {
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      100: "100",
    },
  },

  plugins: [
    // popular tailwind plugins
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".inset-center": {
          top: "50%",
          left: "50%",
          "@apply -translate-x-1/2 -translate-y-1/2": {},
        },
        ".inset-y-center": {
          top: "50%",
          "@apply -translate-y-1/2": {},
        },
        ".inset-x-center": {
          left: "50%",
          "@apply -translate-x-1/2": {},
        },
      };

      addUtilities(utilities, ["responsive", "hover"]);
    }),
    // custom inline plugin implementation with css variables
    plugin(function ({ addBase }) {
      addBase({
        // definition of css variables for colors
        ":root": {
          "--color-primary": "#315182",
          // '--color-secondary': '#00ff00',
          "--color-background": "#ecf3f8",
          "--color-copy": "rgba(0, 0, 0, 0.9)",
        },
        // always show scrollbar (on Windows this avoids horizontal jank during loading or transitions)
        body: {
          overflowY: "scroll",
        },
        // remove spinner displayed on number inputs on chrome/safari/edge/opera
        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: "0",
        },
        // remove spinner displayed on number inputs on firefox
        'input[type="number"]': {
          "-moz-appearance": "textfield",
        },
      });
    }),
  ],
};
