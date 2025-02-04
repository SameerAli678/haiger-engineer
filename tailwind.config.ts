import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#206BAE",
        Text: "#484848",
        TextSecondary: "#6d6d6d",
      },
    },
  },
  plugins: [],
} satisfies Config;
