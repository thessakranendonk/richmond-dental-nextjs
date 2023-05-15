const { red } = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  variants: {
    animation: ["motion-safe"],
  },
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        brand: {
          lightest: "#52868E",
          lighter: "#4A7B82",
          base: "#3d6469",
          dark: "#34565B",
          darkest: "#2D494E",
        },
        ui: {
          error: red[700],
        },
      },
    },
    textShadow: {
      sm: "0 1px 10px var(--tw-shadow-color)",
      DEFAULT: "0 2px 10px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
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
    keyframes: {
      draw: {
        "50%": {
          "stroke-dashoffset": 0,
        },
      },
      fadeIn: {
        "0%": {
          filter: "blur(40px)",
          opacity: 0,
        },
        "100%": {
          filter: "blur(0)",
          opacity: 1,
        },
      },
      fadeInOut: {
        "0%": {
          filter: "blur(40px)",
          opacity: 0,
        },
        "50%": {
          filter: "blur(0)",
          opacity: 1,
        },
        "100%": {
          filter: "blur(40px)",
          opacity: 0,
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 2s ease-in-out 1",
      fadeInFast: "fadeIn 1s ease-in-out 1",
      fadeInOutSlow: "fadeInOut 3s ease-in-out 1",
      path: "draw 3.5s infinite",
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
        ".img-sm": {
          width: "280px",
          height: "280px",
        },
        ".img": {
          width: "680px",
          height: "680px",
        },
        ".br-left": {
          "border-radius": "30% 70% 70% 30% / 30% 46% 54% 70% ",
        },
        ".br-right": {
          "border-radius": "20% 80% 25% 70% /30% 46% 54% 70%",
        },
        ".br-center": {
          "border-radius": "50%",
        },
        ".br-right-footer": {
          "border-radius": "25% 58% 30% 70% /15% 25% 54% 67%",
        },
        ".img-settings": {
          position: "relative",
          "box-shadow": "0 1px 2px rgba(0, 0, 0, 0.0)",
          "transform-style": "preserve-3d",
        },

        ".img-wrap": {
          background: "#9d9d9d",
          "box-shadow": "0 0 0 40px rgba(255, 255, 255, 0.4)",
          perspective: "1000px",
          position: "absolute",
          transition: "all 0.4s ease-in-out",
        },
        ".img-wrap-footer": {
          background: "#51868E",
          "box-shadow": "0 0 0 40px rgba(255, 255, 255, 0.4)",
          perspective: "1000px",
          position: "absolute",
          transition: "all 0.4s ease-in-out",
        },
        ".img-wrap-xl": {
          width: "640px",
          height: "640px",
        },
        ".img-wrap-sm": {
          width: "260px",
          height: "260px",
        },
        ".img-wrap-md": {
          width: "480px",
          height: "300px",
        },
        ".back-img": {
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%",
          "background-position": "center",
          transition: "all 0.6s ease-in-out",
          "transform-origin": "50% 100%",
          "z-index": "100",
          "box-shadow": "inset 1px 1px 3px rgba(0, 0, 0, 0.0)",
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
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
