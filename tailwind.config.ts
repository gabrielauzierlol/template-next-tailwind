import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 1fr)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },

      boxShadow: {
        '3xl': '0 0 10px rgba(0, 0, 0, 0.25)',
        '4xl': '0 0 65px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
