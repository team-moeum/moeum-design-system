import type { Meta, StoryObj } from "@storybook/react";

import { Text } from ".";
import { FontWeight, Typography } from "./Text.type";

const meta = {
  title: "Text",
  component: Text,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["span", "div", "p", "h1", "h2", "h3", "h4", "h5", "h6", "label"],
      description: "HTML 엘리먼트 타입"
    },
    typography: {
      control: "select",
      options: Object.values(Typography),
      description: "텍스트 타입"
    },
    fontWeight: {
      control: "select",
      options: Object.values(FontWeight),
      description: "텍스트 굵기"
    },
    display: {
      control: "select",
      options: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "grid",
        "inline-grid",
        "none"
      ],
      description: "display 속성"
    },
    textAlign: {
      control: "select",
      options: ["left", "center", "right", "justify", "initial", "inherit"],
      description: "text-align 속성"
    }
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "#121314",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
};
