/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './client/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4ADEDE',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
