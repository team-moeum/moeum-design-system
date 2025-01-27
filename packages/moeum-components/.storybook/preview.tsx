import React from "react";
import type { Preview } from "@storybook/react";
import "../src/style/index.scss";
import "../src/style/design-token/index.scss";

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
  },
  decorators: [
    Story => {
      if (!document.getElementById("toast-portal")) {
        const portalDiv = document.createElement("div");
        portalDiv.id = "toast-portal";
        document.body.appendChild(portalDiv);
      }

      return <Story />;
    }
  ]
};

export default preview;
