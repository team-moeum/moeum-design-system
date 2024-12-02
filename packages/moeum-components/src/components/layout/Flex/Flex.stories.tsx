import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./Flex";
import { Box } from "../Box";

const meta = {
  title: "Flex",
  component: Flex,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const backgroundStyle = "repeating-linear-gradient(45deg, #eee, #eee 3px, #ccc 0, #ccc 5px)";

export const Primary: Story = {
  args: {
    gap: 20
  },
  render: args => (
    <Flex {...args}>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
    </Flex>
  )
};
