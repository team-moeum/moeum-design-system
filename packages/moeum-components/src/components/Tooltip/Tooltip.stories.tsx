import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";
import { useState } from "react";
import { OverlayProvider } from "@/hooks/useOverlay";
import { Flex } from "../layout/Flex";

/**
 * **radix docs**
 * https://www.radix-ui.com/primitives/docs/components/tooltip#api-reference
 */
const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    Story => (
      <OverlayProvider>
        <Story />
      </OverlayProvider>
    )
  ]
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const TooltipContent = () => {
  return (
    <Flex width={200} height={65} align="center" justify="center">
      Tooltip!
    </Flex>
  );
};

export const Default: Story = {
  args: {
    sideOffset: 10,
    delayDuration: 300
  },
  render: args => {
    // eslint-disable-next-line
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Tooltip
        {...args}
        open={isOpen}
        onOpenChange={() => {
          setIsOpen(prev => !prev);
        }}
        trigger={<Button>Trigger Button</Button>}
        children={<TooltipContent />}
      />
    );
  }
};
