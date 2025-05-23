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
      animation: {
        'fade-in': 'fadeIn 400ms ease-in',
        'stretch-medium': 'stretchMedium 100ms ease-in-out',
        'stretch-large': 'stretchLarge 100ms ease-in-out',
        'shrink-medium': 'shrinkMedium 100ms ease-in-out',
        'shrink-large': 'shrinkLarge 100ms ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(to left top, rgba(214, 230, 254, 1), rgba(214, 252, 254, 0))',
      },
      borderRadius: {
        'heading': '35px',
        'calculator': '16px',
      },
      colors: {
        'blue': '#345FF6',
        'gunmetal': '#253347',
        'dark-electric-blue': '#5E6E85',
        'borders': '#D8E2E7',
        'pure-white': '#FFFFFF',
      },
      dropShadow: {
        'custom': '32px 16px 56px rgba(143, 174, 207, 0.25)',
      },
      fontSize: {
        'body-s': '0.875rem',
        'body-m': '1rem',
        'heading-m': '1.5rem',
        'heading': '2rem',
        'heading-l': '3rem',
        'heading-xl': '4rem',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        stretchMedium: {
          from: {
            height: '425px',
          },
          to: {
            height: '550px',
          },
        },
        stretchLarge: {
          from: {
            height: '457px',
          },
          to: {
            height: '582px',
          },
        },
        shrinkMedium: {
          from: {
            height: '550px',
          },
          to: {
            height: '425px',
          },
        },
        shrinkLarge: {
          from: {
            height: '582px',
          },
          to: {
            height: '457px',
          },
        },
      },
      lineHeight: {
        'heading': '110%',
        'body': '150%',
      },
      letterSpacing: {
        'heading-m': '-0.075rem',
        'heading-l': '-0.15rem',
        'heading-xl': '-0.2rem',
      },
    },
  },
  plugins: [],
}
