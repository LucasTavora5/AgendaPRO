import React from 'react';
import { Button, ButtonProps, useTheme } from 'react-native-paper';
import { DesignTokens } from '../../design/tokens/design.tokens';

interface AppButtonProps extends Omit<ButtonProps, 'style' | 'contentStyle'> {
  variant?: 'primary' | 'secondary';
}

export const AppButton: React.FC<AppButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  const theme = useTheme();

  const buttonStyle = {
    borderRadius: variant === 'primary' 
      ? DesignTokens.radius.input 
      : DesignTokens.radius.smallCard,
  };

  const contentStyle = {
    paddingHorizontal: DesignTokens.spacing.xl,
    paddingVertical: DesignTokens.spacing.md,
    minHeight: 48,
  };

  const mode = variant === 'primary' ? 'contained' : 'outlined';

  return (
    <Button
      mode={mode}
      style={buttonStyle}
      contentStyle={contentStyle}
      {...props}
    >
      {children}
    </Button>
  );
};
