/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#3EDBF0', // Bright blue
        'secondary': '#12486B', // Bright orange
        'accent': '#FFA726', // Bright orange
        'background-light': '#FFFFFF', // White background
        'background-dark': '#333333', // Dark gray background
      },
      textColor: {
        'primary': '#3EDBF0', // White text
        'secondary': '#12486B', // Dark gray text
        'accent': '#333333', // Dark gray text
        'text-light': '#666666', // Light gray text
        'text-dark': '#333333', // Dark gray text
      },
      borderColor: {
        'primary': '#3EDBF0', // Light gray border
        'secondary': '#12486B', // Success/confirmation color
        'error': '#D32F2F', // Error/warning color
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['hover'], // Enable hover variant for backgroundColor
      textColor: ['hover'], // Enable hover variant for textColor
      borderColor: ['hover'], // Enable hover variant for borderColor
    },
  },
}
