/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: 'rgb(0 28 72)',
      'secondary-400': 'rgb(229 59 58)',
      white: 'rgb(255 255 255)',
      black: 'rgb(0 0 0)',
      'translucent-light-100': 'hsla(0, 0%, 100%, .1)'
    }
  },
  plugins: [],
};
