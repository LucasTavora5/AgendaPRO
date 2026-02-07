import { StyleSheet } from 'react-native';
import { DesignTokens } from '../../../../design/tokens/design.tokens';

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DesignTokens.colors.background,
    padding: DesignTokens.spacing.md,
  },
  safeArea: {
    flex: 1,
  },
});
