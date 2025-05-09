/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",        // Archivos HTML y TS en tu carpeta src
      "./node_modules/flowbite/**/*.js" // Archivos de Flowbite
    ],
    theme: {
    extend: {},
    },
    plugins: [
      require('flowbite/plugin')  // Plugin Flowbite
    ],
}