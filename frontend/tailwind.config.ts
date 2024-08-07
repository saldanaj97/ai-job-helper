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
