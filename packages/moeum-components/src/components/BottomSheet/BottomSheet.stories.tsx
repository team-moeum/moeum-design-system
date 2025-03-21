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
const meta: Meta<typeof BottomSheet> = {
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

const BottomSheetNoScroll = () => {
  return (
    <Flex height={240} py={24} px={16} align="center" justify="center">
      BottomSheet
    </Flex>
  );
};

const BottomSheetScroll = () => {
  return (
    <Flex height={2000} py={24} px={16} align="center" justify="center">
      BottomSheet
    </Flex>
  );
};

export const BottomSheets: Story = {
  args: {
    showHandle: true,
    radius: "medium"
  },
  render: args => {
    // eslint-disable-next-line
    const overlay = useOverlay();

    const openNoScrollBottomSheet = () => {
      overlay.open(({ isOpen, close }) => (
        <BottomSheet
          {...args}
          open={isOpen}
          onClose={() => {
            close();
          }}
          children={<BottomSheetNoScroll />}
        />
      ));
    };

    const openScrollBottomSheet = () => {
      overlay.open(({ isOpen, close }) => (
        <BottomSheet
          {...args}
          open={isOpen}
          onClose={() => {
            close();
          }}
          children={<BottomSheetScroll />}
        />
      ));
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center"
        }}
      >
        <Button onClick={openNoScrollBottomSheet}>Open(No Scroll)</Button>
        <Button onClick={openScrollBottomSheet}>Open(Scroll)</Button>
      </div>
    );
  }
};
