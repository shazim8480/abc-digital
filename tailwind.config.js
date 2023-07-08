const { colors } = require("./src/app/lib/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgba(144, 233, 0, 1)",
        secondary: "rgba(239, 230, 0, 1)",
        gray: "rgba(233, 234, 236, 1)",
        dark: "rgba(30, 42, 55, 1)",
      },
      fontSize: {
        sm: "16px",
        body: "20px",
        m: "28px",
        xl: "64px",
        "2xl": "96px",
      },
      borderRadius: {
        btn: "28px",
      },
    },
  },
  plugins: [],
};
