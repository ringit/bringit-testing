/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Geomanist,sans-serif",
    },
    extend: {
      colors: {
        primary: "#5A47F0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
