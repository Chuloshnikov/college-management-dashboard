import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        permanent: "#C3EBFA",
        permanentLight: "#EDF9FD",
        secondary: "#CFCEFF",
        secondaryLight: "#F1F0FF",
        third: "#FAE27C",
        thirdLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
