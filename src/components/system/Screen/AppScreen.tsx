import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewProps } from 'react-native';
import { colors, spacing } from '../../design/tokens/design.tokens';

interface AppScreenProps extends ViewProps {}

export const AppScreen: React.FC<AppScreenProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.container, style]} {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
});
