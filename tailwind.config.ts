import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        neue: ['var(--font-neue)'],
      },
      colors: {
        accent: 'rgba(var(--c-accent), <alpha-value>)',
        textb: 'rgba(var(--c-text), <alpha-value>)',
        filter: 'rgba(var(--c-filter), <alpha-value>)',
        bgcolor: 'rgba(var(--c-bg), <alpha-value>)',
        white2: 'rgba(var(--f-white-2), <alpha-value>)',
        swiper: 'rgba(var(--swiper-theme-color), <alpha-value>)',
      }
    },
  },
  plugins: [],
}
export default config
