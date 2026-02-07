import { DesignTokens } from '@/styles/tokens/design.tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 520, 
    alignSelf: 'center',
    paddingVertical: DesignTokens.spacing.xl,
    gap: DesignTokens.spacing.lg,
  },
});
