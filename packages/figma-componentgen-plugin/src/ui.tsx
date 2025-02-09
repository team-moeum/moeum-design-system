import React from "react";
import { createRoot } from "react-dom/client";
import "./ui.css";
import { Theme } from "@radix-ui/themes";
import { Main } from "./Main";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

root.render(
  <Theme appearance={isDarkMode ? "dark" : "light"}>
    <Main />
  </Theme>
);
