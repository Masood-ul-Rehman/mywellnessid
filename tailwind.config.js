/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "550px",
        md: "768px",
        lg: "976px",
        laptop: "1220px",
        xl: "1440px",
        xxl: "1681px",
      },

      colors: {
        background: "#F7FFF8",
        backgroundMain: "#ffff",
        text: "#202020",
        desc: "#575757",
        prim: "#009797",
        sec: "#C9E9E9",
      },
    },
  },
  plugins: [],
};
