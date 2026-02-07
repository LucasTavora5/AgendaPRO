import { DesignTokens } from '@/styles/tokens/design.tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    fontFamily: DesignTokens.typography.fontFamily,
  },

  h1: {
    fontSize: DesignTokens.typography.h1.fontSize,
    lineHeight: DesignTokens.typography.h1.lineHeight,
    fontWeight: DesignTokens.typography.h1.fontWeight,
  },

  h2: {
    fontSize: DesignTokens.typography.h2.fontSize,
    lineHeight: DesignTokens.typography.h2.lineHeight,
    fontWeight: DesignTokens.typography.h2.fontWeight,
  },

  body: {
    fontSize: DesignTokens.typography.body.fontSize,
    lineHeight: DesignTokens.typography.body.lineHeight,
    fontWeight: DesignTokens.typography.body.fontWeight,
  },

  caption: {
    fontSize: DesignTokens.typography.caption.fontSize,
    lineHeight: DesignTokens.typography.caption.lineHeight,
    fontWeight: DesignTokens.typography.caption.fontWeight,
  },
});
