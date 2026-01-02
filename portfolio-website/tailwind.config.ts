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
        'slate-gray': '#2d3748',
        'deep-blue': '#1a202c',
        'tech-blue': '#0071C5',
      },
    },
  },
  plugins: [],
}
export default config
