/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom scrollbar-hide class
      scrollbar: {
        hide: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      },
    },
  },
  plugins: [
    // Add other plugins if you have
    require('tailwind-scrollbar-hide'), // add this line
  ],
}
