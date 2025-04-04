import type { Meta, StoryObj } from "@storybook/react";

import { Popup } from ".";
import { Button } from "../Button";
import { OverlayProvider, useOverlay } from "@/hooks/useOverlay";
import { Text } from "../Text";
import { FontWeight } from "../Text/Text.type";

const meta = {
  title: "Popup",
  component: Popup,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    buttonLayoutType: {
      options: ["typeA", "typeB"],
      control: { type: "radio" },
      description: "Button layout type"
    }
  }
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

const PopupsComponent = () => {
  const overlay = useOverlay();

  const handleClickTypeBDanger = () => {
    overlay.open(({ exit }) => (
      <Popup
        buttonLayoutType="typeB"
        leftButton={
          <Button onClick={exit} type="text-none" size="lg" display="full">
            <Text fontWeight={FontWeight.Regular}>버튼</Text>
          </Button>
        }
        rightButton={
          <Button onClick={exit} type="solid-red" size="lg" display="full">
            <Text fontWeight={FontWeight.Regular}>버튼</Text>
          </Button>
        }
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: "var(--seed-font-size-md)",
            lineHeight: "var(--seed-font-line-height-2xl)",
            color: "var(--seed-ui-color-text-black)"
          }}
        >
          제목
        </p>
        <p
          style={{
            marginTop: 24,
            fontWeight: 400,
            fontSize: "var(--seed-font-size-sm)",
            lineHeight: "var(--seed-font-line-height-2xl)",
            color: "var(--seed-ui-color-text-dark)"
          }}
        >
          내용
        </p>
      </Popup>
    ));
  };

  const handleClickTypeBPrimary = () => {
    overlay.open(({ exit }) => (
      <Popup
        buttonLayoutType="typeB"
        leftButton={
          <Button onClick={exit} type="text-none" size="lg" display="full">
            <Text fontWeight={FontWeight.Regular}>버튼</Text>
          </Button>
        }
        rightButton={
          <Button onClick={exit} type="solid-green" size="lg" display="full">
            <Text fontWeight={FontWeight.Regular}>버튼</Text>
          </Button>
        }
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: "var(--seed-font-size-md)",
            lineHeight: "var(--seed-font-line-height-2xl)",
            color: "var(--seed-ui-color-text-black)"
          }}
        >
          제목
        </p>
        <p
          style={{
            marginTop: 24,
            fontWeight: 400,
            fontSize: "var(--seed-font-size-sm)",
            lineHeight: "var(--seed-font-line-height-2xl)",
            color: "var(--seed-ui-color-text-dark)"
          }}
        >
          내용
        </p>
      </Popup>
    ));
  };

  const handleClickTypeAPrimary = () => {
    overlay.open(({ exit }) => (
      <Popup
        buttonLayoutType="typeA"
        button={
          <Button onClick={exit} type="solid-green" size="lg" display="full">
            <Text fontWeight={FontWeight.Regular}>버튼</Text>
          </Button>
        }
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: "var(--seed-font-size-md)",
            lineHeight: "var(--seed-font-line-height-2xl)",
            color: "var(--seed-ui-color-text-black)"
          }}
        >
          제목
        </p>
        <p
          style={{
            marginTop: 24,
            fontWeight: 400,
            fontSize: "var(--seed-font-size-sm)",
            lineHeight: "var(--seed-font-line-height-2xl)",
            color: "var(--seed-ui-color-text-dark)"
          }}
        >
          내용
        </p>
      </Popup>
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
      <Button onClick={handleClickTypeBDanger}>Type B Popup Danger</Button>
      <Button onClick={handleClickTypeBPrimary}>Type B Popup Primary</Button>
      <Button onClick={handleClickTypeAPrimary}>Type A Popup Danger</Button>
    </div>
  );
};

export const Popups: Story = {
  args: {
    buttonLayoutType: "typeA"
  },
  render: () => {
    return (
      <OverlayProvider>
        <PopupsComponent />
      </OverlayProvider>
    );
  }
};
