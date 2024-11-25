import type { Meta, StoryObj } from "@storybook/react";

import { Box } from ".";

const meta = {
  title: "Box",
  component: Box,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 50,
    height: 50,
    style: {
      background: "repeating-linear-gradient(45deg, #eee, #eee 3px, #ccc 0, #ccc 5px)"
    }
  }
};
