import React from "react";
import type { Preview } from "@storybook/react";
import "../src/components/index.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false
          }
        ]
      }
    }
  }
};

export default preview;
