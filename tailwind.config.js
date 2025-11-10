/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"], // v3 needs content
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [],
};
