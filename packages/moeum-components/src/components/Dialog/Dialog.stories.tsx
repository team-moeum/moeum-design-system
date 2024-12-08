import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { useOverlay } from "../../hooks/useOverlay/useOverlay";
import { Button } from "../Button";
import { OverlayProvider } from "../../hooks/useOverlay/OverlayProvider";
import { Flex } from "../layout/Flex";
import { DialogRadius, DialogTheme } from "./Dialog.type";

/**
 * **radix docs**
 * https://www.radix-ui.com/primitives/docs/components/dialog
 */
const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: Object.values(DialogTheme)
    },
    radius: {
      control: "select",
      options: Object.values(DialogRadius)
    },
    locked: {
      control: "boolean"
    }
  },
  decorators: [
    Story => (
      <OverlayProvider>
        <Story />
      </OverlayProvider>
    )
  ]
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const DialogContentA = () => {
  return (
    <Flex height={500} p={20} align="center" justify="center">
      Dialog
    </Flex>
  );
};

export const Primary: Story = {
  args: {
    radius: "medium"
  },
  render: args => {
    // eslint-disable-next-line
    const overlay = useOverlay();

    const openOverlay = () => {
      overlay.open(({ isOpen, close }) => (
        <Dialog
          {...args}
          open={isOpen}
          onOpenChange={() => {
            close();
          }}
          children={<DialogContentA />}
        />
      ));
    };

    return <Button onClick={openOverlay}>Open</Button>;
  }
};
