/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: '#9FE3F9',
          600: '#4D96A9'
        },
        purple: {
          300: '#D9B8FF',
          600: '#855FB1'
        },
        slate: {
          300: '#D1D1DF',
          600: '#87879D',
          900: '#28283D'
        }
      },
      fontFamily: {
        'red-hat': ['Red Hat Display', 'sans-serif']
      },
      fontSize: {
        'preset-1': ['64px', '1.1'],
        'preset-2': ['40px', '1.1'],
        'preset-3': ['16px', { lineHeight: '1.1', letterSpacing: '4px' }],
        'preset-4': ['18px', '1.7'],
        'preset-5': ['16px', '1.5']
      },
      spacing: {
        '1400': '112px',
        '1000': '80px',
        '900': '72px',
        '800': '64px',
        '700': '56px',
        '500': '40px',
        '400': '32px',
        '300': '24px',
        '200': '16px',
        '100': '8px',
        '50': '4px'
      }
    }
  },
  plugins: [],
}