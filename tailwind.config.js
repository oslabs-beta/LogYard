/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './client/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'custom': {
          'darkgreen': '#5F7161',
          'green': '#6D8B74',
          'tan': '#EFEAD8',
          'darktan': '#D0C9C0',
          'gray': '#D0C9C0',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};

