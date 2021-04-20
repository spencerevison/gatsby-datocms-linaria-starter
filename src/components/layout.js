import React from "react";

import "normalize.css";
import "../styles/main.scss";
import theme from "../styles/theme";

export default function Layout({ children }) {
  return <div className={theme}>{children}</div>;
}
