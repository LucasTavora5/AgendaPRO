import React from 'react';
import { SafeAreaView, View, ViewProps } from 'react-native';
import { styles } from './styles';

interface AppScreenProps extends ViewProps {}

const AppScreen: React.FC<AppScreenProps> = ({
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

export default AppScreen;
