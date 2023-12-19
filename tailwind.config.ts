import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ['var(--font-bebasNeue)'],
        montserrat: ['var(--font-montserrat)'],
        bungeeOutline: ['var(--font-bungeeOutline)']
      },
      backgroundColor: {
        bgSecundary: '#222222'
      },
      fill: {
        secondary: '#FF0202'
      }
    }
  },
  plugins: []
}
export default config
