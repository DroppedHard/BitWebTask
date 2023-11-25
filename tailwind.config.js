/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f8f8f2',
          '100': '#f0efe6',
          '200': '#d2cfb5',
          '300': '#bbb68e',
          '400': '#aba274',
          '500': '#9e8e62',
          '600': '#8b7754',
          '700': '#756148',
          '800': '#614f3f',
          '900': '#514336',
          '950': '#2d231b',
        },
        accent: {
          100: "#fbfac6",
          200: "#f8f390",
          300: "#f4e750",
          400: "#eed521",
          500: "#e1bf14",
          600: "#c0940e",
          700: "#996c0f",
          800: "#7f5514",
          900: "#6c4617",
        },
        alert: {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffc8c8',
          '300': '#ffa2a2',
          '400': '#fd6c6c',
          '500': '#f53e3e',
          '600': '#e22020',
          '700': '#c91818',
          '800': '#9d1717',
          '900': '#821a1a',
          '950': '#470808',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // whether I want other button background and stuff
    {pattern:/(hover:|active:){0,1}bg-primary-[0-9]00/},
    {pattern:/text-(black|white)/},
  ]
}

