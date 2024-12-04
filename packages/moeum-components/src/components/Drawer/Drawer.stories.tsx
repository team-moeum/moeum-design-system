import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { useOverlay } from "../../hooks/useOverlay/useOverlay";
import { Button } from "../Button";
import { OverlayProvider } from "../../hooks/useOverlay/OverlayProvider";
import { Flex } from "../layout/Flex";

/**
 * **vaul docs**
 * https://vaul.emilkowal.ski/api
 */
const meta = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "Drawer 나오는 방향을 설저합니다."
    },
    locked: {
      control: "boolean",
      description: "뒷 영역 잠금을 설정합니다."
    }
  },
  decorators: [
    Story => (
      <OverlayProvider>
        <Story />
      </OverlayProvider>
    )
  ]
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerContentA = () => {
  return (
    <Flex width={300} height={300} m="auto" align="center" justify="center">
      Drawer
    </Flex>
  );
};

export const Primary: Story = {
  args: {},
  render: args => {
    // eslint-disable-next-line
    const overlay = useOverlay();

    const openOverlay = () => {
      overlay.open(({ isOpen, close }) => (
        <Drawer
          {...args}
          open={isOpen}
          onClose={() => {
            close();
          }}
          children={<DrawerContentA />}
        />
      ));
    };

    return <Button onClick={openOverlay}>Open</Button>;
  }
};
