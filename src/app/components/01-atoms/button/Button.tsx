import type { ComponentProps } from 'react';
import React from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'prefix' | 'suffix';
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size,
  disabled,
  className = '',
  icon,
  iconPosition = 'prefix',
  text,
  ...buttonProps
}) => {
  return (
    <button className={clsx(styles.btn, className)} {...buttonProps}>
      <span className={styles.btnText}>{text}</span>
    </button>
  );
};
