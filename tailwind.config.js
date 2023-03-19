/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        btnShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
