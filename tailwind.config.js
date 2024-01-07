module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
      display: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0081A8",
        secondary: "#CC0049",
        tertiary: "#222222",
        error: "#FF6363",
        white: "#FFFFFF",
        lightGray: "#20A1C8",
        gray: "#F3F3F3",
        transparent: "transparent",
      },
    },
  },
  variants: {},
  plugins: [],
};
