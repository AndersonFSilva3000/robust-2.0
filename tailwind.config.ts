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
        bgSecundary: '#222222',
        bgCardPlans: '#B4B4B4',
        bgPlanRecommended: '#FF0202'
      },
      textColor: {
        colorPlans: '#787878',
        colorPlanRecommended: '#FF0202'
      },
      borderColor: {
        buttonPlan: '#787878',
        borderPlanRecommended: '#FF0202'
      },
      fill: {
        secondary: '#FF0202'
      }
    }
  },
  plugins: []
}
export default config
