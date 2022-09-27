/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
    },
    shadow: {
      "box": "0px 5px 16px rgba(8, 15, 52, 0.06)",
      "logo": "0px 2px 6px",
    },
    },
  },
  plugins: [],
}
