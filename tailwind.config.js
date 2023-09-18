/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#0078D4', // Bright blue
        'secondary': '#FF6C37', // Bright orange
        'accent': '#FFA726', // Bright orange
        'background-light': '#FFFFFF', // White background
        'background-dark': '#333333', // Dark gray background
      },
      textColor: {
        'primary': '#FFFFFF', // White text
        'secondary': '#444444', // Dark gray text
        'accent': '#333333', // Dark gray text
        'text-light': '#666666', // Light gray text
        'text-dark': '#333333', // Dark gray text
      },
      borderColor: {
        'border': '#E0E0E0', // Light gray border
        'success': '#4CAF50', // Success/confirmation color
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
