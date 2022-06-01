import { blue, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defalutTheme = {
  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryColorActive: blue[100],
  primaryColorDisabled: neutral[300],

  textColorOnPrimary: neutral[100], //white
  textColor: neutral[600], //dark grey
  textColorInverted: neutral[100],
  primaryFont,
};
