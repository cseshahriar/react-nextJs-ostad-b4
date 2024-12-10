/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: '#ff5722',
        secondary: '#2196f3',
        customcolor: {
          100: '#e3f2fd',
          500: '#2196f3',
          900: '#01579b',
        },
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
      },
      screens: {
        'tablet': '640px',
        'desktop': '1024px',
        'big-desktop': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

