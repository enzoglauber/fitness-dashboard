/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        black: "var(--black)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'rose': {
          '50': 'hsl(348, 100%, 97%)',
          '100': 'hsl(343, 100%, 94%)',
          '200': 'hsl(343, 100%, 90%)',
          '300': 'hsl(343, 100%, 81%)',
          '400': 'hsl(342, 100%, 71%)',
          '500': 'hsl(340, 100%, 58%)',
          '600': 'hsl(337, 87%, 50%)',
          '700': 'hsl(336, 92%, 41%)',
          '800': 'hsl(334, 90%, 35%)',
          '900': 'hsl(332, 85%, 30%)',
          '950': 'hsl(334, 98%, 16%)',
        },
        'gamboge': {
          '50': 'hsl(51, 100%, 96%)',
          '100': 'hsl(51, 93%, 89%)',
          '200': 'hsl(50, 93%, 77%)',
          '300': 'hsl(48, 94%, 65%)',
          '400': 'hsl(45, 94%, 56%)',
          '500': 'hsl(40, 90%, 49%)',
          '600': 'hsl(34, 92%, 44%)',
          '700': 'hsl(28, 88%, 37%)',
          '800': 'hsl(24, 80%, 31%)',
          '900': 'hsl(23, 76%, 26%)',
          '950': 'hsl(23, 89%, 14%)',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
