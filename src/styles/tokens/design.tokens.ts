export const DesignTokens = {
  colors: {
    // base
    background: "#0A0A0B",
    surface: "#121214",
    surfaceElevated: "#1A1A1D",

    // brand
    primary: "#C7A86C",
    primarySoft: "#E6C98F",

    // text
    textPrimary: "#F4F4F5",
    textSecondary: "#A1A1AA",
    textMuted: "#71717A",

    // states
    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#60A5FA",

    // utils
    border: "#232326",
    divider: "#1C1C1F",
    disabled: "#3A3A3D",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },

  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    pill: 999,
  },

  typography: {
    display: {
      fontSize: 32,
      lineHeight: 38,
      fontWeight: "700",
    },

    h1: {
      fontSize: 26,
      lineHeight: 32,
      fontWeight: "700",
    },

    h2: {
      fontSize: 22,
      lineHeight: 28,
      fontWeight: "600",
    },

    body: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "400",
    },

    bodyMedium: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: "500",
    },

    label: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: "500",
    },

    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: "400",
    },
  },

  elevation: {
    sm: {
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },

    md: {
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    },
  },
} as const;
