import {
    AppContainer,
    AppScreen,
    AppText,
} from '@/components/system';
import React from 'react';

const HomeScreen: React.FC = () => {
  return (
    <AppScreen>
      <AppContainer>

        <AppText variant="h1">
          Velora
        </AppText>

        <AppText
          variant="body"
          color="textSecondary"
        >
          Encontre serviços de estética perto de você.
        </AppText>

      </AppContainer>
    </AppScreen>
  );
};

export default HomeScreen;
