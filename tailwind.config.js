module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "chipo-heading": "#374048",
        "chipo-blue": "#0084ff",
        "chipo-text": "#4e575f",
        "chipo-bg-second": "#f8fbfd",
        "chipo-gray-blur": "#eee",
        "chipo-orange": "#f62",
      },
      backgroundImage: {
        "contact-bg": "url('/images/home/mobile-ap-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
