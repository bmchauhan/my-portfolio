/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#d8b4fe",
        'gradient-primary-from': '#111827',
        'gradient-primary-to': '#1f2937',
        'gradient-secondary-from': '#d8b4fe',
        'gradient-secondary-to': '#c084fc',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #111827, #1f2937)',
        'gradient-secondary': 'linear-gradient(to right, #d8b4fe, #c084fc)',
      },
    },
  },
  plugins: [],
}
