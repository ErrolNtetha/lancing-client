/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
     
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'slate': '#0f172a',
        'white': '#f8fafc',
        'black': '#000',
        'indigo': '#33ff33',
        'gray': '#cccccc',
        'white-p': '#fff'
    },
    extend: {
        backgroundImage: {
            'hero-bg': 'url("/assets/images/svg/bg.svg")',
            'vision-bg': 'url("/assets/images/svg/pattern.svg")',
            'ourTeam-bg': 'url("/assets/images/svg/ourTeam-bg.svg")',
        }
    },
  },
  plugins: [],
}
