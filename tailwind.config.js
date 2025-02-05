/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      boxShadow: {
        "shadow-nav": "0 0 0 0.25rem rgba(0, 0, 0, 0.25)",
      },
      backgroundColor: {
        "light-white": "rgba(217, 217, 217, 0.8)",
      },
    },
  },
  plugins: [require("daisyui")],
};
