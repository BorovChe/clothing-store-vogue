import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-hero-gradient":
          "linear-gradient(48deg, rgba(71, 119, 220, 0.65) 8.13%, rgba(111, 146, 218, 0.33) 61.05%, rgba(146, 169, 217, 0.06) 86.96%)",
        "order-tracking-gradient":
          "linear-gradient(338deg, #fff 22.77%, rgba(255, 255, 255, 0) 100%);",
      },
      colors: {
        primary: {
          ffd5c5: "var(--primary-ffd5c5)",
          "4777dc": "var(--primary-4777dc)",
          f5f6f8: "var(--primary-f5f6f8)",
        },
        secondary: {
          "000": "var(--secondary-000000)",
          "666": "var(--secondary-666666)",
          "999": "var(--secondary-999999)",
          e6e6e6: "var(--secondary-e6e6e6)",
          eee: "var(--secondary-eeeeee)",
          fff: "var(--secondary-ffffff)",
        },
        other: {
          success: "var(--other-success-2dcb48)",
          warning: "var(--other-warning-ffcc00)",
          error: "var(--other-error-f43319)",
        },
      },
      fontFamily: {
        primary: ["Jost", "sans-serif"],
        second: ["la-solid-900", "sans-serif"],
        third: ["la-brands-400", "sans-serif"],
        font3: ["LineIcons", "sans-serif"],
        font4: ["Font Awesome 5 Brands", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
