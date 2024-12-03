module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spiritualBlue: "#4c5c68",
        crystalPink: "#d561fa",
        tarotGold: "#9b51f3",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  
};
