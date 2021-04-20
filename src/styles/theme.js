import { lighten, darken } from "polished";

/*-----------------------------------------------------------------------------
  Colors
------------------------------------------------------------------------------*/
const colorBurgundy = "#88365D";
const colorPurple = "#9B63C8";
const colorPeach = "#F4A5AE";
const colorPink = "#F5D7E3";
const colorBlack = "#18191f";
const colorWhite = "#fff";

const colorMap = {
  colorPrimary: colorBurgundy,
  colorSecondary: colorPurple,
  colorTertiary: colorPeach,
  colorQuaternary: colorPink,
  colorBlack: colorBlack,
  colorWhite: colorWhite,
};

export const colors = {
  primary900: darken(0.4, colorMap.colorPrimary),
  primary800: darken(0.3, colorMap.colorPrimary),
  primary700: darken(0.2, colorMap.colorPrimary),
  primary600: darken(0.1, colorMap.colorPrimary),
  primary500: colorMap.colorPrimary,
  primary400: lighten(0.1, colorMap.colorPrimary),
  primary300: lighten(0.2, colorMap.colorPrimary),
  primary200: lighten(0.3, colorMap.colorPrimary),
  primary100: lighten(0.4, colorMap.colorPrimary),

  secondary900: darken(0.4, colorMap.colorSecondary),
  secondary800: darken(0.3, colorMap.colorSecondary),
  secondary700: darken(0.2, colorMap.colorSecondary),
  secondary600: darken(0.1, colorMap.colorSecondary),
  secondary500: colorMap.colorSecondary,
  secondary400: lighten(0.1, colorMap.colorSecondary),
  secondary300: lighten(0.2, colorMap.colorSecondary),
  secondary200: lighten(0.3, colorMap.colorSecondary),
  secondary100: lighten(0.4, colorMap.colorSecondary),

  tertiary900: darken(0.4, colorMap.colorTertiary),
  tertiary800: darken(0.3, colorMap.colorTertiary),
  tertiary700: darken(0.2, colorMap.colorTertiary),
  tertiary600: darken(0.1, colorMap.colorTertiary),
  tertiary500: colorMap.colorTertiary,
  tertiary400: lighten(0.1, colorMap.colorTertiary),
  tertiary300: lighten(0.2, colorMap.colorTertiary),
  tertiary200: lighten(0.3, colorMap.colorTertiary),
  tertiary100: lighten(0.4, colorMap.colorTertiary),

  quaternary900: lighten(0.4, colorMap.colorQuaternary),
  quaternary800: lighten(0.3, colorMap.colorQuaternary),
  quaternary700: lighten(0.2, colorMap.colorQuaternary),
  quaternary600: lighten(0.1, colorMap.colorQuaternary),
  quaternary500: colorMap.colorQuaternary,
  quaternary400: darken(0.1, colorMap.colorQuaternary),
  quaternary300: darken(0.2, colorMap.colorQuaternary),
  quaternary200: darken(0.3, colorMap.colorQuaternary),
  quaternary100: darken(0.4, colorMap.colorQuaternary),

  gray900: lighten(0.1, colorMap.colorBlack),
  gray800: lighten(0.2, colorMap.colorBlack),
  gray700: lighten(0.3, colorMap.colorBlack),
  gray600: lighten(0.4, colorMap.colorBlack),
  gray500: lighten(0.5, colorMap.colorBlack),
  gray400: lighten(0.6, colorMap.colorBlack),
  gray300: lighten(0.7, colorMap.colorBlack),
  gray200: lighten(0.8, colorMap.colorBlack),
  gray100: lighten(0.9, colorMap.colorBlack),

  black: colorMap.colorBlack,
  white: colorMap.colorWhite,
};

/*-----------------------------------------------------------------------------
  Fonts
------------------------------------------------------------------------------*/
export const font = {
  family: "'Manrope', sans-serif", // Included Google font(s) in gatsby-config.js
  size: "16px",
  weight: {
    light: 200,
    regular: 400,
    bold: 600,
    extraBold: 800,
  },
};
