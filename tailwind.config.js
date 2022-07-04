/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: "rgba(31,31,31,1)",
        "high-light": "rgba(41,41,41,1)",
        primary: "#f43f5e",
        secondary: "rgba(63,63,63,1)",
        dark: "rgba(21,21,21,1)",
      },
    },
    animation: {
      "scale-image-banner": "scale-image-banner 300ms ease-in-out forwards",
    },
    keyframes: {
      "scale-image-banner": {
        "0%": {
          opacity: "0",
          transform: "scale(2)",
          filter: "blur(90px)",
          "transform-origin": "50% 50%",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
          filter: "blur(0)",
          "transform-origin": "50% 50%",
        },
      },
    },
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
