import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import {
  TextFieldRadius,
  TextFieldSize,
  TextFieldVariant,
} from "../TextField.type";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text...",
  },
  argTypes: {
    size: {
      control: "select",
      options: Object.values(TextFieldSize),
      description: "TextArea 사이즈",
    },
    variant: {
      control: "select",
      options: Object.values(TextFieldVariant),
      description: "TextArea 스타일 변형",
    },
    radius: {
      control: "select",
      options: Object.values(TextFieldRadius),
      description: "TextArea 모서리 둥글기",
    },
    error: {
      control: "boolean",
      description: "에러 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    placeholder: {
      control: "text",
      description: "플레이스홀더 텍스트",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: "Default TextArea",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea size="small" placeholder="Small size" />
      <TextArea size="medium" placeholder="Medium size" />
      <TextArea size="large" placeholder="Large size" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea variant="classic" placeholder="Classic variant" />
      <TextArea variant="surface" placeholder="Surface variant" />
      <TextArea variant="soft" placeholder="Soft variant" />
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea radius="none" placeholder="No radius" />
      <TextArea radius="small" placeholder="Small radius" />
      <TextArea radius="medium" placeholder="Medium radius" />
      <TextArea radius="large" placeholder="Large radius" />
      <TextArea radius="full" placeholder="Full radius" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea placeholder="Normal state" />
      <TextArea error placeholder="Error state" />
      <TextArea disabled placeholder="Disabled state" />
    </div>
  ),
};
