import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#fcf9f4",
        surface: "#fcf9f4",
        "surface-bright": "#fcf9f4",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3ee",
        "surface-container": "#f0ede8",
        "surface-container-high": "#ebe8e3",
        "surface-container-highest": "#e5e2dd",
        "surface-variant": "#e5e2dd",
        "on-surface": "#1c1c19",
        "on-surface-variant": "#47473e",
        primary: "#464b2e",
        "primary-container": "#5e6344",
        "on-primary": "#ffffff",
        "on-primary-container": "#dadfb8",
        "primary-fixed": "#e1e6bf",
        "primary-fixed-dim": "#c5caa4",
        secondary: "#865137",
        "secondary-container": "#ffba99",
        "secondary-fixed": "#ffdbcc",
        "on-secondary-fixed": "#341000",
        tertiary: "#735c00",
        "tertiary-container": "#cba72f",
        outline: "#77786d",
        "outline-variant": "#c8c7bb"
      },
      borderRadius: {
        xl: "0.75rem"
      },
      spacing: {
        "container-max": "1200px",
        "section-padding": "80px",
        gutter: "24px"
      },
      fontFamily: {
        display: ["Epilogue", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.1", fontWeight: "300" }],
        h2: ["32px", { lineHeight: "1.2", fontWeight: "400" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "500" }]
      }
    }
  },
  plugins: []
};

export default config;
