const nativewindPreset = require('nativewind/preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  presets: [nativewindPreset],
  // theme: {
  //   extend: {},
  // },
};
