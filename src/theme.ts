import { extendTheme } from "@chakra-ui/react";

const customizedTheme = {
  styles: {
    global: {
      body: {
        fontFamily: "Roboto, sans-serif",
        bg: "#ECECEC",
      },
    },
  },
};

export const theme = extendTheme(customizedTheme);
