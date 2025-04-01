/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E53E3E",
        secondary: "#F59E0B",
        danger: "#DC2626",
        success: "#16A34A",
      },
    },
  },
  plugins: [],
};
