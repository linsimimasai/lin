import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"]
      },
      colors: {
        ink: "#060812",
        panel: "#0d1324",
        acid: "#c8ff24",
        copper: "#e8702a"
      },
      boxShadow: {
        glow: "0 0 60px rgba(200, 255, 36, 0.18)",
        card: "0 28px 90px rgba(0, 0, 0, 0.42)"
      }
    }
  },
  plugins: []
} satisfies Config;
