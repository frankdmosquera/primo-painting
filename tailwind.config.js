const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F60AB',

        danger: '#FFFFFF',

        secondary: '#74D0F5',
      },
    },
  },

  darkMode: 'class',
  plugins: [require('tailwind-scrollbar'),heroui()],
}
