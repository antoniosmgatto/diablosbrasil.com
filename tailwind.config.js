module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "old-stamper": ["old_stamperregular", "arial", "sans-serif"],
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
