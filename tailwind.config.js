/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar" : "#1F1D2B",
        "bg-icons": "#EA736D",
        'bg-color': '#252836',
        'input-bg': '#2D303E',
        'line': '#393C49',
        'lighter-text': '#b8c0c4',
        
      },
      height: {
        'icons': '80px',
        'icon': '56px',
        'logo' : '56px'
      },
      width: {
        'icons': '92px',
        'icon': '56px',
        'logo':  '56px'
      },
      fontSize: {
        'heading': '28px',
      },
      fontFamily: {
        'universal': 'Barlow'
      },
      borderRadius: {
        'circle': '100%'
      },
      dropShadow: {
        '3xl': '0 8px 24px #ea7c69af'
      },
      
    },
  },
  plugins: [],
}

