import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': '#72FF72',
        'gray-dark': '#242424',
        'gray-light': '#384F2E',
        'green-dark': '#2C5C21',
        'green-skills': '#137f0566',
        'yellow-light': '#F0C905',
        'yellow': '#C8A23B',
        'yellow-dark': '#CA8B04BD'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')]
}
export default config
