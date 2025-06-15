/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html', 
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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "#E5E7EB", 
        input: "#D1D5DB", 
        ring: "#2563EB",   
        background: "#F9FAFB", 
        foreground: "#111827", 
        primary: {
          DEFAULT: "#2563EB", 
          foreground: "#FFFFFF", 
        },
        secondary: {
          DEFAULT: "#F3F4F6", 
          foreground: "#1F2937", 
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F3F4F6", 
          foreground: "#6B7280", 
        },
        accent: {
          DEFAULT: "#2563EB", 
          foreground: "#FFFFFF", 
        },
        popover: {
          DEFAULT: "#FFFFFF", 
          foreground: "#111827", 
        },
        card: {
          DEFAULT: "#FFFFFF", 
          foreground: "#111827", 
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
    },
  },
  plugins: [require("tailwindcss-animate")],
}