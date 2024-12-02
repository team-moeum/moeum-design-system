import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Flex } from "../layout/Flex";
import { Grid } from "../layout/Grid";
import { Toast } from "./Toast";
import { Button } from "../Button";
import { useToast } from "./useToast";
import { ToastProvider } from "./ToastProvider";

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
      options: [
        "top-left",
        "top-right",
        "top-center",
        "bottom-left",
        "bottom-right",
        "bottom-center"
      ]
    }
  },
  decorators: [
    Story => (
      <ToastProvider
        options={{
          duration: 2000,
          style: { background: "#FFF" },
          offest: 0
        }}
      >
        <Story />
      </ToastProvider>
    )
  ]
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastContentA = () => {
  return (
    <Flex p="10px 8px" align="center" justify="center">
      <Text color="#123123">Toast Content</Text>
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
        radius: "small",
        position: "top-left",
        content: <ToastContentA />
      });
    };

    const handleAddTopCenterToast = () => {
      add({
        duration: 3000,
        content: <ToastContentA />,
        position: "top-center"
      });
    };

    const handleAddTopRightToast = () => {
      add({
        position: "top-right",
        radius: "large",
        content: <ToastContentA />,
        offest: 50
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
        position: "bottom-center",
        offest: 50
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
