import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { DesignTokens } from '../../design/tokens/design.tokens';

type TypographyVariant = keyof typeof DesignTokens.typography;

interface AppTextProps extends Omit<TextProps, 'style'> {
  variant?: TypographyVariant;
  color?: keyof typeof DesignTokens.colors;
}

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  color = 'textPrimary',
  children,
  ...props
}) => {
  const typography = DesignTokens.typography[variant];
  const textColor = DesignTokens.colors[color];

  const style: TextStyle = {
    fontSize: typography.fontSize,
    lineHeight: typography.lineHeight,
    fontWeight: typography.fontWeight,
    color: textColor,
  };

  return (
    <Text style={style} {...props}>
      {children}
    </Text>
  );
};
