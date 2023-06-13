/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'uncommon-black': '#020202',
        'uncommon-h-blue': '#6C7AF5',
        'uncommon-white': '#FFFEFE',
        'uncommon-gray-500': '#ABACAD',
        'uncommon-gray-600': '#8F9092',
        'uncommon-gray-700': '#696B6D',
        'uncommon-gray-800': '#444649',
        'uncommon-gray-900': '#1E1E1E',
      },
    },
  },
  plugins: [],
}
