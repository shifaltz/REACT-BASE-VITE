import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#EEEEEE",
          400: "#E0E0E0",
          500: "#BDBDBD",
          600: "#9E9E9E",
          700: "#757575",
          800: "#616161",
          900: "#424242",
          1000: "#212121",
        },
        cyan: {
          light: "#CDEAEA",
          DEFAULT: "#029698",
          dark: "#065F60",
        },
        red: {
          light: "#F1DBDA",
          DEFAULT: "#B94A48",
          dark: "#970300",
        },
        green: {
          light: "#AEFABA",
          DEFAULT: "#51CF66",
          dark: "#2B8A3E",
        },
        yellow: {
          light: "#FFFAEA",
          DEFAULT: "#FEC42D",
          dark: "#DDAA25",
        },
      },
      fontFamily: {
        title: ['"Open Sans"', "sans-serif"],
        body: ['"Open Sans"', "sans-serif"],
        italic: ['"Open Sans Italic"', "sans-serif"],
      },
      fontWeight: {
        regular: "400", // Regular
        bold: "700", // Bold
        italic: "400", // o peso da fonte italic é o mesmo, mas você vai usar a família "italic"
      },
      fontSize: {
        xs: ["12px", "1.25"], // <size,  line-height>
        sm: ["14px", "1.25"],
        base: ["16px", "1.5"],
        lg: ["18px", "1.5"],
        xl: ["20px", "1.5"],
        "2xl": ["24px", "1.5"],
        "3xl": ["30px", "1.25"],
        "4xl": ["36px", "1.25"],
        "5xl": ["48px", "1"],
        "6xl": ["60px", "1"],
        "7xl": ["72px", "1"],
        "8xl": ["96px", "1"], // novo token 8xl = 96px
      },
    },
  },
  plugins: [],
};

export default config;
