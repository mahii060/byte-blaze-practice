import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "synthwave",
      "dim",
      {
        mytheme: {

          "primary": "#006eff",

          "secondary": "#db2777",

          "accent": "#0000ff",

          "neutral": "#3d2112",

          "base-100": "#ffffff",

          "info": "#00ccec",

          "success": "#207f00",

          "warning": "#ffac16",

          "error": "#ed0024",
        },
      },
    ],

  },
}

