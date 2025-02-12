/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color_003262: "#003262",
        color_0166C8: "#0166C8",
        color_137EE6: "#137EE6",
        color_174571: "#174571",
        color_E3F1FF: "#E3F1FF",
      },
      boxShadow: {
        home_cards_shadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.25)",
        home_hero_shadow: "11px 5px 6.6px 0px rgba(0, 0, 0, 0.25)",
        home_button_shadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.25)",
      },

      fontSize: {
        main_heading: "45px",
        sm_main_heading: "19px",
        main_description: "20px",
        sm_main_description: "13px",
      },
    },
  },
  plugins: [],
};
