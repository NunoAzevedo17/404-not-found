/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "gray-1": "#333",
        "gray-2": "#4F4F4F",
      },
      fontFamily: {
        inconsolata: "Inconsolata",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
