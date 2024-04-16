/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage:{ 'food-image':"url('/src/assets/productphotos/AlluCombo.jpg')",'food-image-2':"url('/src/assets/productphotos/classicChicken.jpg')"}
    },
  },
  plugins: [],
}

