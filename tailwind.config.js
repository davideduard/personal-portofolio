/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      screens: {
        'sm': '350px',

        'md': '960px',

        'lg': '1440px',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "50%": {
            width: "100%",
            visibility: "visible"
          },
          "75%": {
            width: "100%",
            visibility: "visible"
          },
          "100%": {
            width: "100%",
            visibility: "visible"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 6s steps(100, end) infinite alternate, blink .7s step-end infinite "
      },
      fontFamily: {
        telegraf: ["PPTelegraf", "sans-serif"]
      }
    },
  },
  plugins: [],
}
