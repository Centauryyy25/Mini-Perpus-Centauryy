const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors: {
        cream: '#FCEEE3',
        'cream-dark': '#fceadd',
        brutal: {
          yellow: '#facc15',
          black: '#000000',
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px black',
        'brutal-sm': '3px 3px 0px 0px black',
        'brutal-lg': '6px 6px 0px 0px black',
      }
    },
  },
  plugins: [
    require("daisyui"),
    typography,
  ],
  daisyui: {
    themes: ["light"],
    darkTheme: false,
  },
};
