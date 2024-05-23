import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'custom-light-gray': '#E0E0E0', // A light gray color
        'custom-soft-gray': '#E1E1E9',
        'custom-blue-gray': '#A0A0B3', // A muted blue-gray color
        'custom-medium-gray': '#757575', // A medium gray color
        'custom-pale-gray': '#E5E5E5',
        'custom-blue': '#1A43D3',
        'custom-red': '#B02626'
      },
      fontWeight: { 
        'custom-weight': 700,
        'custom-thin': 500
      },
      fontSize: { 
        'xxs': '12px',
        'xs': '14px',
        'sm': '16px',
        'md': '18px',
        'lg': '20px'
      },
      lineHeight: { 'custom-line-height': '32px' },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
