const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#ef4a23',
        secondary: '#3749bb',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
