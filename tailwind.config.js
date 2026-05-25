/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#05070f",
        midnight: "#08111f",
        panel: "rgba(11, 18, 32, 0.72)",
        line: "rgba(148, 163, 184, 0.18)",
        frost: "rgba(255, 255, 255, 0.08)",
        electric: "#3b82f6",
        cyan: "#22d3ee",
        violet: "#8b5cf6",
        pearl: "#f8fbff"
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.22)",
        violet: "0 0 80px rgba(139, 92, 246, 0.22)",
        premium: "0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,.16) 1px, transparent 0)",
        aurora:
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,.28), transparent 28%), radial-gradient(circle at 80% 10%, rgba(139,92,246,.24), transparent 32%), radial-gradient(circle at 50% 80%, rgba(34,211,238,.2), transparent 30%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: ".36" },
          "50%": { opacity: ".9" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-line": "pulseLine 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
