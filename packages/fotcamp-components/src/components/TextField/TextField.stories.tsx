// TextField.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";
import {
  TextFieldRadius,
  TextFieldSize,
  TextFieldVariant,
} from "./TextField.type";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
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
      description: "텍스트 필드 사이즈",
    },
    variant: {
      control: "select",
      options: Object.values(TextFieldVariant),
      description: "텍스트 필드 스타일 변형",
    },
    radius: {
      control: "select",
      options: Object.values(TextFieldRadius),
      description: "텍스트 필드 모서리 둥글기",
    },
    type: {
      control: "select",
      options: ["text", "password"],
      description: "텍스트 필드 타입",
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
    leftContent: {
      control: "text",
      description: "왼쪽 컨텐츠",
    },
    rightContent: {
      control: "text",
      description: "오른쪽 컨텐츠",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    placeholder: "Default TextField",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField size="small" placeholder="Small size" />
      <TextField size="medium" placeholder="Medium size" />
      <TextField size="large" placeholder="Large size" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField variant="classic" placeholder="Classic variant" />
      <TextField variant="surface" placeholder="Surface variant" />
      <TextField variant="soft" placeholder="Soft variant" />
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField radius="none" placeholder="No radius" />
      <TextField radius="small" placeholder="Small radius" />
      <TextField radius="medium" placeholder="Medium radius" />
      <TextField radius="large" placeholder="Large radius" />
      <TextField radius="full" placeholder="Full radius" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField placeholder="Normal state" />
      <TextField error placeholder="Error state" />
      <TextField disabled placeholder="Disabled state" />
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField
        leftContent={<span>ICON</span>}
        placeholder="With left content"
      />
      <TextField
        rightContent={<span>ICON</span>}
        placeholder="With right content"
        type="password"
      />
      <TextField
        leftContent={<span>ICON</span>}
        rightContent={<span>ICON</span>}
        placeholder="With both contents"
      />
    </div>
  ),
};
