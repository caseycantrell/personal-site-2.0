import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        // shared with the resume at ~/Desktop/resume so both read as one identity
        ink: {
          DEFAULT: "#0D1117",
          soft: "#39414B",
          faint: "#79828D",
        },
        // one token -- swap for #E03131 (red) or #1971C2 (blue) to reskin
        accent: "#0CA678",
        rule: "#D3D8DE",
      },
      screens: {
        'lg': "1200px",
        'xl': "1440px",
        '2xl': "1536px"
      },
    },
  },
  plugins: [],
};
export default config;
