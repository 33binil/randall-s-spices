/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {90: '90deg',},
      colors: {
        darkbg: '#0F1F14',
        primary: '#1A3C34',
        herbal: '#5FC58C',
        turmeric: '#D9A441',
        softwhite: '#F1F1F1',
        muted: '#A8B2A1',
        limehover: '#8EFFB7'
      }
    }
  },
  plugins: [],
}