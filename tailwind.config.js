/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"], // v3 needs content
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
      animation: {
        float: "float 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
