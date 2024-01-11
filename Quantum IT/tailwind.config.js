/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "custom":"linear-gradient(180deg, rgba(0,117,130,1) 0%, rgba(0,184,182,1) 100%);"
      }
    },
  },
  plugins: [],
}

