import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { useOverlay } from "../../hooks/useOverlay/useOverlay";
import { Button } from "../Button";
import { OverlayProvider } from "../../hooks/useOverlay/OverlayProvider";
import { Flex } from "../layout/Flex";

/**
 * **vaul docs**
 * https://vaul.emilkowal.ski/api
 */
const meta = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    locked: {
      control: "boolean",
      description: "외부 요소와의 상호작용을 설정합니다."
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large"]
    },
    theme: {
      control: "select",
      options: ["light", "dark"]
    }
  },
  decorators: [
    Story => (
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
    <Flex height={500} p={20} align="center" justify="center">
      BottomSheet
    </Flex>
  );
};

export const Primary: Story = {
  args: {
    showHandle: true,
    radius: "medium"
  },
  render: args => {
    // eslint-disable-next-line
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

    return <Button onClick={openOverlay}>Open</Button>;
  }
};
