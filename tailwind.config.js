/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        arcana: { 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9" }
      }
    }
  },
  plugins: []
};
