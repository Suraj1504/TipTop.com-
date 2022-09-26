const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      padding: {
        12.5: "50px",
      },
    },
    colors: {
      primary: {
        lite: "rgb(245, 148, 148)",
        default: "rgb(255, 81, 81)",
        dark: "rgb(248, 57, 57)",
      },
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      indigo: colors.cyan,
      red: colors.red,
      slate: {
        200: "rgb(244, 245, 246)",
      },
    },
  },
  plugins: [],
};
