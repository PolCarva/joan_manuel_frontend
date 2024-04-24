/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-hover": "#1f1f1f",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      },
      fontSize: {
        "xs": ".625rem",
      },
    },
  },
  plugins: [],
}

