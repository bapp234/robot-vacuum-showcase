import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        surface: "hsl(var(--surface))",
        card: "hsl(var(--card))",

        border: "hsl(var(--border))",

        muted: "hsl(var(--muted))",
        mutedForeground: "hsl(var(--muted-foreground))",

        primary: "hsl(var(--primary))",
        primaryForeground: "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",

        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        destructive: "hsl(var(--destructive))",
      },

      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space)"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        glow: "0 10px 40px rgba(255,105,0,.25)",
      },

    transitionTimingFunction: {
      smooth: "cubic-bezier(.22,.61,.36,1)",
    },
  },
},

  plugins: [],
};

export default config;