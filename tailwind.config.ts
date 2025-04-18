import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00c6a7", // Teal primary color
          foreground: "#ffffff",
          50: "#f0fdfb",
          100: "#ccfbf5",
          200: "#99f6ec",
          300: "#5eeadc",
          400: "#2dd4c8",
          500: "#00c6a7", // Main primary
          600: "#00a38a",
          700: "#008272",
          800: "#00665b",
          900: "#00544b",
          950: "#003530",
        },
        secondary: {
          DEFAULT: "#1e2530", // Dark navy/charcoal
          foreground: "#ffffff",
          50: "#f5f7f9",
          100: "#e0e5eb",
          200: "#c1ccd8",
          300: "#9baabf",
          400: "#7387a0",
          500: "#576c85",
          600: "#45566c",
          700: "#394657",
          800: "#2e3847",
          900: "#1e2530", // Main secondary
          950: "#111821",
        },
        accent: {
          DEFAULT: "#00e6a7", // Lighter teal accent
          foreground: "#ffffff",
          50: "#f0fef9",
          100: "#d0feef",
          200: "#a0fce0",
          300: "#63f8cd",
          400: "#22edb3",
          500: "#00e6a7", // Main accent
          600: "#00c08c",
          700: "#009972",
          800: "#00775b",
          900: "#00624c",
          950: "#003729",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-teal": "linear-gradient(135deg, #00c6a7 0%, #00e6a7 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
