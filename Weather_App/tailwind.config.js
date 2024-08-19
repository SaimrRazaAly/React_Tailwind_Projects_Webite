/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "united-nations-blue": "hsl(214, 56%, 58%)",
        "bright-navy-blue": "hsl(214, 57%, 51%)",
        "spanish-gray": "hsl(0, 0%, 60%)",
        "black-coral": "hsl(225, 8%, 42%)",
        "oxford-blue": "#01213c",
        "yale-blue": "hsl(214, 72%, 33%)",
        "blue-ncs": "hsl(197, 100%, 36%)",
        "gunmetal": "hsl(206, 34%, 20%)",
        "gainsboro": "hsl(0, 0%, 88%)",
        "cultured": "hsl(0, 0%, 98%)",
        "onyx": " hsl(0, 0%, 25%)",
        "jet:": "hsl(0, 0%, 20%)",
      },
    
    screens:{
      'res-82':'820px'
    }
    },
  },
  plugins: [],
};
