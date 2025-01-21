/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        Gruppo: ["Gruppo", "sans-serif"],
        valky: ["Valky", "sans-serif"],
      },
      colors: {
        bg: "#EEEAE1",
        darker: "#251D18",
        logo: "#745e4d",
      },
    },
    screens: {
      mobile: "480px",
    },
  },
  plugins: [],
};
