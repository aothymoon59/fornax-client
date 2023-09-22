/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Custom breakpoint for screens >= 640px
        md: "968px", // Custom breakpoint for screens >= 968px
        lg: "1440px", // Custom breakpoint for screens >= 1440px
      },
    },
  },
  plugins: [require("daisyui")],
};
