import { css } from "@linaria/core";
import { lighten, darken } from "polished";

/*-----------------------------------------------------------------------------
  Colors
------------------------------------------------------------------------------*/
const colorBurgundy = "#88365D";
const colorPurple = "#9B63C8";
const colorPeach = "#F4A5AE";
const colorPink = "#F5D7E3";
const colorBlack = "#18191f";

/*-----------------------------------------------------------------------------
  Color mapping
------------------------------------------------------------------------------*/
const colorMap = {
  colorPrimary: colorBurgundy,
  colorSecondary: colorPurple,
  colorTertiary: colorPeach,
  colorQuaternary: colorPink,
  colorBlack: colorBlack,
};

/*-----------------------------------------------------------------------------
  Theme variables
------------------------------------------------------------------------------*/
export default css`
  --color-primary-900: ${darken(0.4, colorMap.colorPrimary)};
  --color-primary-800: ${darken(0.3, colorMap.colorPrimary)};
  --color-primary-700: ${darken(0.2, colorMap.colorPrimary)};
  --color-primary-600: ${darken(0.1, colorMap.colorPrimary)};
  --color-primary-500: ${colorMap.colorPrimary};
  --color-primary-400: ${lighten(0.1, colorMap.colorPrimary)};
  --color-primary-300: ${lighten(0.2, colorMap.colorPrimary)};
  --color-primary-200: ${lighten(0.3, colorMap.colorPrimary)};
  --color-primary-100: ${lighten(0.4, colorMap.colorPrimary)};

  --color-secondary-900: ${darken(0.4, colorMap.colorSecondary)};
  --color-secondary-800: ${darken(0.3, colorMap.colorSecondary)};
  --color-secondary-700: ${darken(0.2, colorMap.colorSecondary)};
  --color-secondary-600: ${darken(0.1, colorMap.colorSecondary)};
  --color-secondary-500: ${colorMap.colorSecondary};
  --color-secondary-400: ${lighten(0.1, colorMap.colorSecondary)};
  --color-secondary-300: ${lighten(0.2, colorMap.colorSecondary)};
  --color-secondary-200: ${lighten(0.3, colorMap.colorSecondary)};
  --color-secondary-100: ${lighten(0.4, colorMap.colorSecondary)};

  --color-tertiary-900: ${darken(0.4, colorMap.colorTertiary)};
  --color-tertiary-800: ${darken(0.3, colorMap.colorTertiary)};
  --color-tertiary-700: ${darken(0.2, colorMap.colorTertiary)};
  --color-tertiary-600: ${darken(0.1, colorMap.colorTertiary)};
  --color-tertiary-500: ${colorMap.colorTertiary};
  --color-tertiary-400: ${lighten(0.1, colorMap.colorTertiary)};
  --color-tertiary-300: ${lighten(0.2, colorMap.colorTertiary)};
  --color-tertiary-200: ${lighten(0.3, colorMap.colorTertiary)};
  --color-tertiary-100: ${lighten(0.4, colorMap.colorTertiary)};

  --color-quaternary-900: ${lighten(0.4, colorMap.colorQuaternary)};
  --color-quaternary-800: ${lighten(0.3, colorMap.colorQuaternary)};
  --color-quaternary-700: ${lighten(0.2, colorMap.colorQuaternary)};
  --color-quaternary-600: ${lighten(0.1, colorMap.colorQuaternary)};
  --color-quaternary-500: ${colorMap.colorQuaternary};
  --color-quaternary-400: ${darken(0.1, colorMap.colorQuaternary)};
  --color-quaternary-300: ${darken(0.2, colorMap.colorQuaternary)};
  --color-quaternary-200: ${darken(0.3, colorMap.colorQuaternary)};
  --color-quaternary-100: ${darken(0.4, colorMap.colorQuaternary)};

  --color-black: ${colorMap.colorBlack};

  --color-gray-900: ${lighten(0.1, colorMap.colorBlack)};
  --color-gray-800: ${lighten(0.2, colorMap.colorBlack)};
  --color-gray-700: ${lighten(0.3, colorMap.colorBlack)};
  --color-gray-600: ${lighten(0.4, colorMap.colorBlack)};
  --color-gray-500: ${lighten(0.5, colorMap.colorBlack)};
  --color-gray-400: ${lighten(0.6, colorMap.colorBlack)};
  --color-gray-300: ${lighten(0.7, colorMap.colorBlack)};
  --color-gray-200: ${lighten(0.8, colorMap.colorBlack)};
  --color-gray-100: ${lighten(0.9, colorMap.colorBlack)};
`;
