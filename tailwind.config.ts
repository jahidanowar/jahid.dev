import colors from "tailwindcss/colors";

module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        gray: colors.slate,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
