import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grids-pattern": "url('/grids.svg')",
      },
      colors: {
        black: {
          background: "#131313",
        },
      },
    },
  },
  plugins: [],
};
export default config;
