module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1f2327',
        'card-dark': '#2d3337',
        'muted': '#9aa3a9'
      },
      boxShadow: {
        'neumorph-inner': 'inset 8px 8px 18px rgba(0,0,0,0.6), inset -8px -8px 18px rgba(255,255,255,0.02)',
        'neumorph': '8px 8px 18px rgba(0,0,0,0.6), -8px -8px 18px rgba(255,255,255,0.02)'
      },
      borderRadius: {
        'xl-2': '18px'
      }
    }
  },
  plugins: []
}