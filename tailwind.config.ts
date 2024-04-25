import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/p*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#64ffda',
        darkBlue: '#030d1c',
        lightGrey: '#d2d5dd',
      },
      boxShadow: {
        buttonGlow: '0 0 10px 0 #64ffda',
      },
      keyframes: {
        blink: {
          '0%, 100%': { visibility: 'hidden' },
          '50%': { visibility: 'visible' },
        },
      },
      animation: {
        blink: 'blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
}

export default config
