/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "14px",
          sm: "24px",
          md: "30px",
          lg: "60px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1200px",
      },
      fontFamily: {
        'neue-montreal': ['"Neue Montreal"', 'sans-serif'],
        'heading':['"Lilita One"', 'serif'],
      },
    },
  },
  plugins: [],
};
