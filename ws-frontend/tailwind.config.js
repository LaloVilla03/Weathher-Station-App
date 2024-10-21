/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // que pueda usar el archivo index.html 
    "./src/**/*.{js,ts,jsx,tsx}"//que pueda usar en la carpeta src todos los archivos .js .ts .jsx .tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

