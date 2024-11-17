import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    placeholder: "옵션을 선택해주세요"
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 옵션 리스트
const simpleOptions = [
  { value: "1", label: "옵션 1" },
  { value: "2", label: "옵션 2" },
  { value: "3", label: "옵션 3" }
];

// 비활성화된 옵션을 포함한 리스트
const withDisabledOptions = [
  { value: "1", label: "옵션 1" },
  { value: "2", label: "옵션 2", disabled: true },
  { value: "3", label: "옵션 3" }
];

// 그룹화된 옵션
const groupedOptions = [
  {
    label: "과일",
    options: [
      { value: "apple", label: "사과" },
      { value: "banana", label: "바나나" },
      { value: "orange", label: "오렌지" }
    ]
  },
  {
    label: "채소",
    options: [
      { value: "carrot", label: "당근" },
      { value: "lettuce", label: "상추" },
      { value: "potato", label: "감자" }
    ]
  }
];

export const Default: Story = {
  args: {
    options: simpleOptions
  }
};

export const WithPlaceholder: Story = {
  args: {
    options: simpleOptions,
    placeholder: "옵션을 선택해주세요"
  }
};

export const Disabled: Story = {
  args: {
    options: simpleOptions,
    disabled: true
  }
};

export const WithDisabledOptions: Story = {
  args: {
    options: withDisabledOptions
  }
};

export const Grouped: Story = {
  args: {
    groups: groupedOptions
  }
};

export const Controlled: Story = {
  args: {
    options: simpleOptions,
    value: "2"
  }
};

export const WithCallback: Story = {
  args: {
    options: simpleOptions,
    onChange: (value: string) => {
      console.log("Selected value:", value);
    }
  }
};
