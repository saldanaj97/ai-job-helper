import { nextui } from '@nextui-org/react';
import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.tsx',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'custom-gradient': `
          linear-gradient(180deg, #57C601 0%, #320049 100%),
          linear-gradient(121.28deg, #007762 0%, #5200FF 100%),
          linear-gradient(341.1deg, #FF0000 7.52%, #1700A4 77.98%),
          radial-gradient(49.82% 80.51% at 49.82% 50%, #820097 0%, #FF3D00 100%),
          radial-gradient(50% 72.12% at 50% 50%, #EB00FF 0%, #0B0037 100%)
        `,
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      themes: {
        light: {
          extend: 'light',
          colors: {}, // light theme colors
        },
        dark: {
          extend: 'dark',
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
} satisfies Config;
