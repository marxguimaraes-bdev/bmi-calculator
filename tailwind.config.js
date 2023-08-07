/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      custom: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'custom-1': '35px',
      },
      colors: {
        'blue': '#345FF6',
        'gunmetal': '#253347',
        'dark-electric-blue': '#5E6E85',
        'borders': '#D8E2E7',
        'pure-white': '#FFFFFF',
      },
      fontSize: {
        'heading': '48px',
        'heading-md': '64px',
      },
      lineHeight: {
        'heading': '110%',
        'body': '150%',
      },
      letterSpacing: {
        'heading': '-5%',
      },
    },
  },
  plugins: [],
}
