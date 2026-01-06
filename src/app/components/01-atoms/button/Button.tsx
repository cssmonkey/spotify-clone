'use client';

import clsx from 'clsx';

import styles from './button.module.css';

import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  composeRenderProps,
} from 'react-aria-components';

interface ButtonProps extends RACButtonProps {
  /**
   * The visual style of the button (Vanilla CSS implementation specific).
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'quiet';
  size?: 'small' | 'medium' | 'large';
}

export function Button({
  className,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={clsx(styles.btn, className)}
      data-variant={variant || 'primary'}
    >
      {composeRenderProps(children, (children, { isPending }) => (
        <>{!isPending && children}</>
      ))}
    </RACButton>
  );
}
