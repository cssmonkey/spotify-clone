import type { Meta, StoryObj } from '@storybook/react';

const TypographyDemo = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      color: 'var(--foreground-color)',
    }}
  >
    <div>
      <h1>Heading 1</h1>
      <small>h1</small>
    </div>
    <div>
      <h2>Heading 2</h2>
      <small>h2</small>
    </div>
    <div>
      <h3>Heading 3</h3>
      <small>h3</small>
    </div>
    <div>
      <h4>Heading 4</h4>
      <small>h4</small>
    </div>
    <div>
      <h5>Heading 5</h5>
      <small>h5</small>
    </div>
    <div>
      <h6>Heading 6</h6>
      <small>h6</small>
    </div>
  </div>
);

const meta: Meta<typeof TypographyDemo> = {
  title: 'Atoms/Typography',
  component: TypographyDemo,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TypographyDemo>;

export const Default: Story = {};
