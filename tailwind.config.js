/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundColor: {
          'sot': ' #1e2224',
          'sotOrange': 'rgba(224, 95, 51, var(--tw-border-opacity))',
        } 
           }
    },
    plugins: [],
  }



