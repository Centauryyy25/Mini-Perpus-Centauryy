const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui"),
    typography, // atau langsung require('@tailwindcss/typography')
  ],
};
