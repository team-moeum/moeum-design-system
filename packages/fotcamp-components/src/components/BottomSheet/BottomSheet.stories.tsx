import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { useOverlay } from "../../hooks/useOverlay/useOverlay";
import { Button } from "../Button";
import { OverlayProvider } from "../../hooks/useOverlay/OverlayProvider";

const meta = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {
  //   initialStep: {
  //     control: "select",
  //     options: Object.values(BottomSheet),
  //     description: "퍼널의 초기 단계를 설정합니다",
  //   },
  // },
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

// 기본 온보딩 스텝
export const Primary: Story = {
  args: {},
  render: () => {
    const overlay = useOverlay();

    const openOverlay = () => {
      overlay.open(({ isOpen, close }) => (
        <BottomSheet
          open={isOpen}
          onClose={() => {
            close();
          }}
        />
      ));
    };
  
    return (
      <Button onClick={openOverlay}>Open</Button>
    )
  }
};
