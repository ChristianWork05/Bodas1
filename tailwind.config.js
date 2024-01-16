/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "negative-background-light": "#fef2f0",
        "negative-muted": "#fb8b80",
        "text-negative": "#c82627",
        "positive-background-light": "#e9fbe7",
        "positive-border": "#82b886",
        "text-positive": "#077838",
        whitesmoke: "#f0f0f0",
        blancos: "#fff",
        principal: "#ff5887",
        gris: "#747474",
        negro: "#333",
        "divider-strong": "rgba(33, 35, 44, 0.24)",
        "text-primary": "#21232c",
        "divider-strong1": "#c8ccd2",
        darkgray: "#999fa7",
        slategray: "#637381",
      },
      spacing: {},
      fontFamily: {
        "caption-s": "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "2xs": "11px",
      xs: "12px",
      "5xs": "8px",
      "3xs": "10px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
