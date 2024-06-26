/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   plugins: [],
// };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: {
        100: "#ffffff",
        40: "rgba(255, 255, 255, 0.4)",
      },
      bgwhite: "#F1F1F1",
      purple: {
        1: "#3D0C54",
        2: "#4A3772",
        3: "#7B7DDC",
        4: "#AD85ED",
        5: "#6433A1",
        6: "#6C8FEB",
      },
      bgpurple: {
        1: "rgba(157, 102, 245, 0.75)",
        2: "rgba(102, 108, 245, 0.75)",
        3: "rgba(102, 108, 245, 0.30)",
        4: "rgba(58, 25, 101, 0.62)",
        5: "rgba(172, 121, 225, 0.25)",
      },
      black: {
        100: "#000000",
        50: "rgba(0, 0, 0, 0.5)",
      },
      orange: {
        1: "#FCB64E",
        2: "#FE5B00",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
    // eslint-disable-next-line no-undef
    require("tailwindcss-animate"),
    // daisyui,
    // eslint-disable-next-line no-undef
    // require("@tailwindcss/typography")
  ],
};
