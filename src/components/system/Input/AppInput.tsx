import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import { DesignTokens } from '../../design/tokens/design.tokens';

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: boolean;
}

export const AppInput: React.FC<AppInputProps> = ({
  label,
  error = false,
  ...props
}) => {
  const inputStyle = {
    borderRadius: DesignTokens.radius.input,
    backgroundColor: DesignTokens.colors.surface,
  };

  const outlineStyle = {
    borderRadius: DesignTokens.radius.input,
    borderColor: error ? DesignTokens.colors.error : DesignTokens.colors.border,
  };

  return (
    <TextInput
      label={label}
      mode="outlined"
      style={inputStyle}
      outlineStyle={outlineStyle}
      error={error}
      {...props}
    />
  );
};
