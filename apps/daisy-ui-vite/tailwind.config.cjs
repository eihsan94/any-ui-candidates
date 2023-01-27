/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  themes: [
    {
      mytheme: {
      "primary": "#2a81bf",
            
      "secondary": "#784fd1",
            
      "accent": "#2f3ace",
            
      "neutral": "#3A293D",
            
      "base-100": "#452F60",
            
      "info": "#5D86EE",
            
      "success": "#7CE4D4",
            
      "warning": "#F3C968",
            
      "error": "#ED7883",
      },
    },
  ],

  plugins: [require("daisyui")],

}
