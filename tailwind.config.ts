import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { sky: { 50: "#F0F9FF", 100: "#E0F2FE", 300: "#7DD3FC", 400: "#38BDF8" } } } },
} satisfies Config;
