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
          dark: "var(--color-primary)",
          darkHover: "#2f5c9a",
          darkest: "#7f1D1D",
        },
        ui: {
          error: red[700],
        },
      },
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
          transform: "translateY(1000px) scaleY(2.5) scaleX(0.2)",
          transformOrigin: "50% 100%",
          filter: "blur(40px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0) scaleY(1) scaleX(1)",
          transformOrigin: "50% 50%",
          filter: "blur(0)",
          opacity: 1,
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 2s ease-in-out 1",
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
        ".mask": {
          "-webkit-mask-size": "contain",
          "mask-size": "contain",
          "-webkit-mask-repeat": "no-repeat",
          "mask-repeat": "no-repeat",
        },
        ".mask-left": {
          "-webkit-mask-position": "-100px",
          "mask-position": "-100px",
        },
        ".mask-right": {
          "-webkit-mask-position": "100px center",
          "mask-position": "100px center",
        },
        // ".mask-left": {
        //   "-webkit-mask-position": "left",
        //   "mask-position": "left",
        // },
        // ".mask-right": {
        //   "-webkit-mask-position": "right",
        //   "mask-position": "right",
        // },
        ".mask-center": {
          "-webkit-mask-position": "center",
          "mask-position": "center",
        },
        ".mask-hexagon": {
          "-webkit-mask-image": `url(
            "data:image/svg+xml,%3csvg width='182' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e"
          )`,
          "mask-image": `url(
            "data:image/svg+xml,%3csvg width='182' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e"
          )`,
        },
        ".mask-hexagon-2": {
          " -webkit-mask-image": `url(
            "data:image/svg+xml,%3csvg width='200' height='182' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M64.786 181.4c-9.196 0-20.063-6.687-25.079-14.21L3.762 105.33c-5.016-8.36-5.016-20.9 0-29.259l35.945-61.86C44.723 5.851 55.59 0 64.786 0h71.055c9.196 0 20.063 6.688 25.079 14.211l35.945 61.86c4.18 8.36 4.18 20.899 0 29.258l-35.945 61.86c-4.18 8.36-15.883 14.211-25.079 14.211H64.786Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e"
          )`,
          "mask-image": `url(
            "data:image/svg+xml,%3csvg width='200' height='182' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M64.786 181.4c-9.196 0-20.063-6.687-25.079-14.21L3.762 105.33c-5.016-8.36-5.016-20.9 0-29.259l35.945-61.86C44.723 5.851 55.59 0 64.786 0h71.055c9.196 0 20.063 6.688 25.079 14.211l35.945 61.86c4.18 8.36 4.18 20.899 0 29.258l-35.945 61.86c-4.18 8.36-15.883 14.211-25.079 14.211H64.786Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e"
          )`,
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
