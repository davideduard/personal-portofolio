/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'abstract': "url('/assets/jpeg/Background.jpeg')"
      },
      screens: {
        'sm': '350px',

        'md': '960px',

        'lg': '1440px',
      },
      keyframes: {
        openDetails: {
          '0%': {
            height: 0,
            opacity: 0
          },
          '100%': {
            height: '12rem',
            opacity: 1
          }
        },
        closeDetails: {
          '0%': {
            height: '12rem',
            opacity: 1
          },
          '100%': {
            height: 0,
            opacity: 0
          }
        },
        openArrow:{
          '0%': {
            transform: 'rotate(225deg)'
          },
          '100%': {
            transform: 'rotate(315deg)'
          }
        },
        closeArrow: {
          '0%': {
            transform: 'rotate(315deg)'
          },
          '100%': {
            transform: 'rotate(225deg)'
          }
        },
        rotate: {
          "0%": {
            transform: "rotate(-45deg)"
          },
          "100%": {
            transform: "rotate(245deg)"
          }
        },
        fill: {
          "0%": {
            width: '18rem',
            backfaceVisibility: 'hidden'
          },
          "100%": {
            width: '120rem',
            backfaceVisibility: 'hidden'
          }
        },
        fade: {
          "0%": {
          opacity: "0",
          transform: "translateY(0.3rem)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        fade: "fade 0.5s linear forwards 3.3s",
        fillFrame: "rotate 3s linear forwards, fill 2s linear 3.2s forwards",
        openArrow: "openArrow 0.15s linear forwards",
        closeArrow: "closeArrow 0.15s linear forwards",
        openDetails: "openDetails 0.2s linear forwards",
        closeDetails: "closeDetails 0.2s linear forwards",
      },
      fontFamily: {
        telegraf: ["PPTelegraf", "sans-serif"],
        breathing: ["Breathing", "sans-serif"]
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
