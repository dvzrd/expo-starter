const nativewindPreset = require('nativewind/preset');
const { getPlatformColors } = require('./src/utils/colors.ts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  presets: [nativewindPreset],
  theme: {
    extend: {
      colors: {
        border: getPlatformColors('border'),
        input: getPlatformColors('input'),
        ring: getPlatformColors('ring'),
        screen: getPlatformColors('background'),
        fg: getPlatformColors('foreground'),
        primary: getPlatformColors('primary'),
        secondary: getPlatformColors('secondary'),
        accent: getPlatformColors('accent'),
        muted: getPlatformColors('muted'),
        destructive: getPlatformColors('destructive'),
        card: getPlatformColors('card'),
        popover: getPlatformColors('popover'),
      },
    },
  },
};
