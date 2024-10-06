import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 2s ease infinite alternate',
      },
    },
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      "light",
      "dark",
      "synthwave",
      "dim",
      {
        mytheme: {

          "primary": "#1d4ed8",

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

