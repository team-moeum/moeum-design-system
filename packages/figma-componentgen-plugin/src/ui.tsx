import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import { App } from "./App";
import "./ui.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

root.render(
  <Theme appearance={isDarkMode ? "dark" : "light"}>
    <App />
  </Theme>
);
