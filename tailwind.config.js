module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      laptop: "1440px",
    },
    extend: {
      colors: {
        B1: "#F8F1EB",
        B2: "#E9D6C5",
        M1: "#DC624E",
        Gray1: "#333333",
        Gray3: "#828282",
        Gray5: "#E0E0E0",
        Black: "#000000",
        White: "#FFFFFF",
      },
      fontFamily: {
        roboto: "'Roboto', 'sans-serif'",
      },
      fontSize: {
        small1: "12px",
        small2: "14px",
        normal: "16px",
        normal2: "18px",
        large1: "24px",
      },
      boxShadow: {
        button: "0px 4px 10px rgba(67, 40, 16, 0.24)",
      },
    },
  },
  plugins: [],
};
