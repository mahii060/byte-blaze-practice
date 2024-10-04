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
      "black",
      "dim",
      {
        mytheme: {

          "primary": "#BA55D3",

          "secondary": "#2f7200",

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

