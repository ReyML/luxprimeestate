/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F5F5F5',
        'text-primary': '#1A1A1A',
        'text-secondary': '#666666',
        accent: '#D4AF37',
        'dark-bg': '#0a0a0a',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
