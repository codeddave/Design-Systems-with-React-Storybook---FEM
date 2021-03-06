import { blue, neutral, red, yellow, green } from "./colors";
import { primaryFont } from "./typography";

export const defalutTheme = {
  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryColorActive: blue[100],
  primaryColorDisabled: neutral[300],
  textColorOnPrimary: neutral[100], //white
  textColor: neutral[600], //dark grey
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
