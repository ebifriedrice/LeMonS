/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#f97316",
          "secondary": "#3b82f6",
          "base-100": "#ffffff",
        },
      },
    ],
  },
} 