import type { Preview } from '@storybook/nextjs-vite';
import { Figtree } from 'next/font/google';

import '../src/app/styles/globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <div className={figtree.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
