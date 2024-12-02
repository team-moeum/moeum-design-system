import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from ".";
import { Box } from "../Box";

const meta = {
  title: "Grid",
  component: Grid,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const backgroundStyle = "repeating-linear-gradient(45deg, #eee, #eee 3px, #ccc 0, #ccc 5px)";

export const Primary: Story = {
  args: {
    columns: 3,
    columnGap: 20,
    rowGap: 20
  },
  render: args => (
    <Grid {...args}>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
      <Box width={60} height={60} style={{ background: backgroundStyle }}></Box>
    </Grid>
  )
};
