import type { Meta, StoryObj } from '@storybook/react';

import Light from './Light';

const meta = {
  title: 'Demo/Light',
  component: Light,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['green', 'yellow', 'red']

    }
  }
} satisfies Meta<typeof Light>;

export default meta;

type Story = StoryObj<typeof meta>


/** Default color */

export const Base: Story = {
  args: {
    variant: 'green',
  }
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
  }
};

export const Red: Story = {
  args: {
    variant: 'red',
  }
};

export const Grouped: Story = {
  render: () => <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      border: '1px solid black',
      width: 'max-content',
      padding: 10
    }}
  >
    <Light variant="yellow"/>
    <Light variant="red"/>
    <Light variant="green"/>
  </div>
};

