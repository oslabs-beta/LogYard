/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './client/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f4fbf2',
          '100': '#e7f6e2',
          '200': '#cfecc6',
          '300': '#a9db9a',
          '400': '#7ac266',
          '500': '#5eb446',
          '600': '#448831',
          '700': '#376c29',
          '800': '#2f5625',
          '900': '#284720',
          '950': '#12260d',
        },
        'secondary': {
          '50': '#f9f8ec',
          '100': '#f1f0d6',
          '200': '#e4e2b2',
          '300': '#d2d284',
          '400': '#bebe5d',
          '500': '#b2b446',
          '600': '#7e812f',
          '700': '#606328',
          '800': '#4e5024',
          '900': '#424522',
          '950': '#23250e',
        },
      },
      button: {
        base: 'bg-secondary-700 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded',
        primary: '',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
