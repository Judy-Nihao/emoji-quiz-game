/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"], // v3 needs content
  theme: {
    extend: {
      maxWidth: {
        "quiz-card": "430px",
      },
      fontSize: {
        "2xs": "10px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 1.5s ease-in-out infinite",
        shake: "shake 1.5s ease-in-out infinite",
        pulseScale: "pulseScale 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
