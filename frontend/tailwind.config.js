export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#4f46e5",
          light: "#6366f1",
          dark: "#3730a3",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [{ pattern: /(from|to)-(indigo|sky|violet|fuchsia)-(200|400)/ }],
};
