import { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";
import colors from "tailwindcss/colors";

const tailwindConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  daisyui: {
    themes: [],
  },
};

export default withMT(tailwindConfig);
