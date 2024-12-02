import type { Meta, StoryObj } from "@storybook/react";

import { Container } from ".";

const meta = {
  title: "Container",
  component: Container,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: "80vw",
    height: 200,
    style: {
      background: "repeating-linear-gradient(45deg, #eee, #eee 3px, #ccc 0, #ccc 5px)"
    }
  }
};
