/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        slate:{
          25: '#EFEFEF',
          },
        textblue: '#133072',
        bgpurple: '#D5ADFB',
        bgpalepurple: '#D5E6F7',
      },
      backgroundImage: theme => ({
        'H-purple-white-gradient': 'linear-gradient(180deg, #D5E6F7 0%, #D5ADFB 100%)',
        'custom-gradient': 'linear-gradient(148.54deg, rgba(213, 230, 247, 0) 75.27%, #D5ADFB 119.35%)',
      }),
    },
  },
  plugins: [],
};
