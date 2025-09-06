/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B1020",
          primary: "#7C3AED",
          primaryAccent: "#A78BFA",
          gold: "#E9C46A",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)",
      },
    },
  },
  plugins: [],
};
