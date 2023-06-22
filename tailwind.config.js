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
        background: "#FAFDF8",
        background2: "#E1F4CB",
        backgroundLight: "#EBF8DD",
        text: "#202020",
        desc: "#5A5A5A",
        prim: "#009797",
        sec: "#C9E9E9",
      },
    },
  },
  plugins: [],
};
