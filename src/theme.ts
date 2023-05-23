import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  md: "645px",
};

const customizedTheme = {
  styles: {
    global: {
      body: {
        fontFamily: "Roboto, sans-serif",
        bg: "#F7F7F7",
      },
    },
  },
  breakpoints,
};

export const theme = extendTheme(customizedTheme);
