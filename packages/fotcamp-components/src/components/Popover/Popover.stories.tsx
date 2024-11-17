import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "../Button";
import { useState } from "react";

/**
 * **radix docs**
 * https://www.radix-ui.com/primitives/docs/components/popover
 */
const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    modal: {
      control: "boolean",
      description: "(진행중)"
    },
    open: {
      control: "boolean",
      description: "popover content의 open 상태 (onOpenChange와 같이 사용)"
    },
    onOpenChange: {
      control: "object",
      description: "open 상태 이벤트 핸들러"
    },
    defaultOpen: {
      control: "boolean",
      description: "초기 open 값을 설정합니다."
    }
  }
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Popover {...args}>
      <PopoverTrigger>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>Popover Content</PopoverContent>
    </Popover>
  )
};

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true
  },
  render: args => (
    <Popover {...args}>
      <PopoverTrigger>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>Popover Content</PopoverContent>
    </Popover>
  )
};

export const WithCallBack: Story = {
  args: {},
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = () => {
      setIsOpen(prev => !prev);
      console.log("Popover ", isOpen);
    };

    return (
      <Popover {...args} open={isOpen} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button>Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );
  }
};
