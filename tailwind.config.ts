import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D2A52",
        secondary: "#F5F7FA",
        gold: "#B9945A",
        body: "#1A2230",
        surface: {
          muted: "#EEF2F7",
          deep: "#E2E8F0",
          warm: "#FAF8F5"
        },
        mono: {
          950: "#131313",
          900: "#292929",
          700: "#424242",
          500: "#686868",
          50: "#FAFAFA"
        },
        /** Banner / night theme: deep background + teal accent */
        brand: {
          night: "#121212",
          void: "#0a0a0a"
        },
        accent: {
          teal: "#008080",
          tealDark: "#004d4d"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(13, 42, 82, 0.08)",
        card: "0 4px 24px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04)",
        "glow-teal": "0 0 60px -12px rgba(0, 128, 128, 0.35)"
      },
      transitionDuration: {
        DEFAULT: "220ms"
      },
      keyframes: {
        "partner-marquee": {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" }
        },
        /** Hero ambient orb — opacity only (no transform conflicts with layout). */
        "hero-ambient-pulse": {
          "0%, 100%": { opacity: "0.88" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        "partner-marquee": "partner-marquee 48s linear infinite",
        "partner-marquee-slow": "partner-marquee 62s linear infinite",
        "partner-marquee-rev": "partner-marquee 48s linear infinite reverse",
        "partner-marquee-rev-slow": "partner-marquee 66s linear infinite reverse",
        "hero-ambient-pulse": "hero-ambient-pulse 24s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
