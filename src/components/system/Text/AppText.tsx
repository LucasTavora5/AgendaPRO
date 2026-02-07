import { DesignTokens } from '@/styles/tokens/design.tokens';
import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './styles';

type Variant =
  | 'h1'
  | 'h2'
  | 'body'
  | 'caption';

interface AppTextProps extends TextProps {
  variant?: Variant;
  color?: keyof typeof DesignTokens.colors;
  children: React.ReactNode;
}

const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  color = 'textPrimary',
  style,
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        { color: DesignTokens.colors[color] },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;
