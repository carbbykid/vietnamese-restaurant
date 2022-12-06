module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      montserrat: ["Montserrat, sans-serif"],
      iCielAlina: ["iCielAlina, sans-serif"],
      daysOne: ["daysOne, sans-serif"],
    },
    extend: {
      colors: {
        "chipo-heading": "#caa576",
        "chipo-text": "#878787",
        "chipo-bg-primary": "#01176c",
        "chipo-bg-second": "#3a3a3a",
      },
      backgroundImage: {
        "hero-second": "url('/images/home/bg_hero_blue.webp')",
        "hero-shop": "url('/images/home/bg_hero.webp')",
      },
    },
  },
  plugins: [],
};
