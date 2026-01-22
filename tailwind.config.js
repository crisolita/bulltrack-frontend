/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F7A5B",
        accent: "#4CAF84",
        muted: "#F4F6F5",
      },
    },
  },
  plugins: [],
};
