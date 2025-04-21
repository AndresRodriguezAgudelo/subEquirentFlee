import React from 'react';
import { ActionButton } from './styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'maintenance';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <ActionButton data-variant={variant} {...props}>
      {children}
    </ActionButton>
  );
};

export default Button;
