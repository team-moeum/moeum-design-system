import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';

const meta = {
  title: 'Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: '#121314',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};