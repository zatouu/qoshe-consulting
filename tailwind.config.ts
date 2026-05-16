import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        qoshe: {
          dark: "#0A0E1A",
          navy: "#0F172A",
          card: "#1E293B",
          amber: "#F59E0B",
          "amber-light": "#FCD34D",
          green: "#10B981",
          blue: "#3B82F6",
          border: "#1E293B",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
