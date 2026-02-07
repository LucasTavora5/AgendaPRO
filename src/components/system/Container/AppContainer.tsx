import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export default function AppContainer({ children }: Props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
