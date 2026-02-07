import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { DesignTokens } from '../../design/tokens/design.tokens';

interface AppCardProps extends ViewProps {
  elevation?: keyof typeof DesignTokens.elevation;
  radius?: keyof typeof DesignTokens.radius;
  padding?: keyof typeof DesignTokens.spacing;
}

export const AppCard: React.FC<AppCardProps> = ({
  elevation = 'md',
  radius = 'largeCard',
  padding = 'lg',
  children,
  style,
  ...props
}) => {
  const elevationStyle = DesignTokens.elevation[elevation];
  const borderRadius = DesignTokens.radius[radius];
  const paddingValue = DesignTokens.spacing[padding];

  const cardStyle = StyleSheet.create({
    container: {
      backgroundColor: DesignTokens.colors.surface,
      borderRadius,
      padding: paddingValue,
      ...elevationStyle,
    },
  });

  return (
    <View style={[cardStyle.container, style]} {...props}>
      {children}
    </View>
  );
};
