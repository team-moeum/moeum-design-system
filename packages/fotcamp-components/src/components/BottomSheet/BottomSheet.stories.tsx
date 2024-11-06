import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { useOverlay } from "../../hooks/useOverlay/useOverlay";
import { Button } from "../Button";
import { OverlayProvider } from "../../hooks/useOverlay/OverlayProvider";
import { Flex } from "../layout/Flex";

const meta = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <OverlayProvider>
        <Story />
      </OverlayProvider>
    )
  ]
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const BottomSheetContentA = () => {
  return (
    <Flex height={200} p={20} align="center" justify="center">
      BottomSheet
    </Flex>
  )
}

export const Primary: Story = {
  args: {},
  render: (args) => {
    const overlay = useOverlay();

    const openOverlay = () => {
      overlay.open(({ isOpen, close }) => (
        <BottomSheet
          {...args}
          open={isOpen}
          onClose={() => {
            close();
          }}
          children={<BottomSheetContentA />}
        />
      ));
    };

    return (
      <Button onClick={openOverlay}>Open</Button>
    )
  }
};
