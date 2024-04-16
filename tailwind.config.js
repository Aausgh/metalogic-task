/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(0 28 72)',
        'secondary-400': 'rgb(229 59 58)',
        'secondary-300': 'rgb(255 66 65)',
        'translucent-light-100': 'hsla(0, 0%, 100%, .1)',
        'accent-green': 'rgb(34 139 34)',
        'ui-700': 'rgb(38 38 38)',
        'ui-500': 'rgb(102 102 102)',
        'ui-200': 'rgb(230 230 230)'
      },
    }
  },
  plugins: [],
};
