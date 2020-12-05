import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { createBreakpoints } from "./createBreakpoints";

import { NormalizeStyle } from "./GlobalNormalizeStyle";

const latoFontFamily = `Lato, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`;

export const themeConfig = {
  // media queries
  // Documentation: https://material-ui.com/customization/breakpoints/
  breakpoints: createBreakpoints({
    values: {
      mobile: 0,
      desktop: 1024,
      max: 1200,
    },
  }),
  palette: {
    text: {
      heading: "#061125",
      primary: "#2E3749",
      secondary: "#6A7489",
    },
    icons: {
      primary: "#919DB5",
      secondary: "#B4BECF",
    },
    background: {
      primary: "#919DB5",
      secondary: "#B4BECF",
    }
  },
  typography: {
    h1: {
      fontFamily: latoFontFamily,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "44px",
    },
    h2: {
      fontFamily: latoFontFamily,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "28px",
      lineHeight: "40px",
    },
    h3: {
      fontFamily: latoFontFamily,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "40px",
    },
    h4: {
      fontFamily: latoFontFamily,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "32px",
    },
    h5: {
      fontFamily: latoFontFamily,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
    },
    h6: {
      fontFamily: latoFontFamily,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "20px",
    }
  },
};

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={themeConfig}>
    <NormalizeStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
