import { DefaultTheme } from "styled-components";

const deviceSize = {
  mobile: "768px",
  tablet: "1100px",
  desktop: "1450px"
};

export const theme: DefaultTheme = {
  colors: {
    textMain: "#333",
    textDefault: "#666",
    pointB: "#3261ad",
    pointG: "#2f7d65"
  },
  device: {
    mobile: `(max-width:${deviceSize.mobile})`,
    tablet: `(min-width:${deviceSize.mobile}) and (max-width:${deviceSize.tablet})`,
    desktop: `(max-width:${deviceSize.desktop})`
  }
};
