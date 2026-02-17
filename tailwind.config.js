/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "neon-purple": "#b026ff",
        "neon-cyan": "#38f2ff",
        "neon-blue": "#3b82f6",
        "neon-pink": "#ff4fd8",
      },
      boxShadow: {
        "neon-glow": "0 0 25px rgba(176, 38, 255, 0.4), 0 0 60px rgba(56, 242, 255, 0.2)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(176, 38, 255, 0.35)" },
          "50%": { boxShadow: "0 0 30px rgba(56, 242, 255, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 10s ease infinite",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
