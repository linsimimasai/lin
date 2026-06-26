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
        ink: "#05070c",
        panel: "#11151d",
        acid: "#c8ff24",
        copper: "#e8702a"
      },
      boxShadow: {
        glow: "0 0 60px rgba(200, 255, 36, 0.18)",
        card: "0 30px 90px rgba(0, 0, 0, 0.34)"
      }
    }
  },
  plugins: []
} satisfies Config;
