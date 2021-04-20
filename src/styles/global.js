import { css } from "@linaria/core";
import * as theme from "styles/theme";

export default css`
  :global() {
    * {
      box-sizing: border-box;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.size};
      font-weight: ${theme.font.weight.regular};
      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
    }
  }
`;
