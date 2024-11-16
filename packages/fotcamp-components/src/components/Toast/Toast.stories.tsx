import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { Button } from "../Button";
import { Flex } from "../layout/Flex";
import { ToastProvider } from "./ToastProvider";
import { useToast } from "./useToast";
import { useEffect } from "react";
import { Grid } from "../layout/Grid";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"]
    }
  },
  decorators: [
    Story => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ]
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastContentA = () => {
  return (
    <Flex height={500} p={20} align="center" justify="center">
      Toast
    </Flex>
  );
};

export const Primary: Story = {
  args: {
    position: "top-right"
  },
  render: args => {
    // eslint-disable-next-line
    const { add } = useToast();

    const handleAddTopLeftToast = () => {
      add({
        message: "작업이 완료되었습니다!",
        type: "success",
        duration: 3000,
        position: "top-left"
      });
    };

    const handleAddTopCenterToast = () => {
      add({
        message: "작업이 완료되었습니다!",
        type: "success",
        duration: 3000,
        position: "top-center"
      });
    };

    const handleAddTopRightToast = () => {
      add({
        message: "작업이 완료되었습니다!",
        type: "success",
        duration: 3000,
        position: "top-right"
      });
    };

    const handleAddBottomLeftToast = () => {
      add({
        message: "작업이 완료되었습니다!",
        type: "success",
        duration: 3000,
        position: "bottom-left"
      });
    };

    const handleAddBottomCenterToast = () => {
      add({
        message: "작업이 완료되었습니다!",
        type: "success",
        duration: 3000,
        position: "bottom-center"
      });
    };

    const handleAddBottomRightToast = () => {
      add({
        message: "작업이 완료되었습니다!",
        type: "success",
        duration: 3000,
        position: "bottom-right"
      });
    };

    return (
      <Grid columns={3} rowGap={10} columnGap={10}>
        <Button onClick={handleAddTopLeftToast}>TOP LEFT</Button>
        <Button onClick={handleAddTopCenterToast}>TOP CENTER</Button>
        <Button onClick={handleAddTopRightToast}>TOP RIGHT</Button>
        <Button onClick={handleAddBottomLeftToast}>BOTTOM LEFT</Button>
        <Button onClick={handleAddBottomCenterToast}>BOTTOM CENTER</Button>
        <Button onClick={handleAddBottomRightToast}>BOTTOM RIGHT</Button>
      </Grid>
    );
  }
};
