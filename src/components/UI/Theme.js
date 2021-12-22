import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

const themeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#941f33",
      dark: "rgba(183,18,18,0.35)",
      light: "#bb677f",
    },
    secondary: {
      main: "#d8ac05",
    },
    background: {
      default: "#e8e5e5",
    },
    divider: "rgba(0,0,0,0.31)",
    success: {
      main: "#3ab71d",
    },
  },
  typography: {
    fontSize:16
  }
};

let outerTheme = createTheme(themeOptions);
outerTheme = responsiveFontSizes(outerTheme);

export default function ThemeNestingExtend({ children }) {
  return <ThemeProvider theme={outerTheme}>{children}</ThemeProvider>;
}
