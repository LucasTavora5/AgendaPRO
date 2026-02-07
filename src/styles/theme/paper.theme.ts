import {
    MD3DarkTheme,
    configureFonts,
} from "react-native-paper";

import { DesignTokens } from "../tokens/design.tokens";

const fontConfig = {
  displayLarge: DesignTokens.typography.h1,
  displayMedium: DesignTokens.typography.h2,
  headlineMedium: DesignTokens.typography.h3,
  bodyLarge: DesignTokens.typography.body,
  bodyMedium: DesignTokens.typography.bodyMedium,
  labelLarge: DesignTokens.typography.button,
};

export const PaperTheme = {
  ...MD3DarkTheme,

  roundness: DesignTokens.radius.md,

  colors: {
    ...MD3DarkTheme.colors,

    primary: DesignTokens.colors.primary,
    onPrimary: "#0A0A0B",

    background: DesignTokens.colors.background,
    surface: DesignTokens.colors.surface,
    surfaceVariant: DesignTokens.colors.surfaceElevated,

    outline: DesignTokens.colors.border,

    error: DesignTokens.colors.error,

    onSurface: DesignTokens.colors.textPrimary,
    onSurfaceVariant: DesignTokens.colors.textSecondary,

    backdrop: DesignTokens.colors.overlay,
  },

  fonts: configureFonts({ config: fontConfig }),
};
