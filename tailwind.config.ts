import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A1428',
          light: '#1A1A1A',
        },
        gold: {
          DEFAULT: '#F2C218',
          dark: '#D4A915',
          light: '#F5D44A',
        },
        cyan: {
          DEFAULT: '#00B4D8',
          dark: '#0096B7',
          light: '#33C4E0',
        },
        charcoal: '#1A1A1A',
        'gray-light': '#F5F7FA',
      },
      fontFamily: {
        display: ['Eurostile', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
