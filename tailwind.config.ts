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
        'green': '#139902',
        'gray-dark': '#242424',
        'gray-light': '#D5F2EA',
        'green-dark': '#14990227',
        'green-skills': '#137f0566'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')]
}
export default config
