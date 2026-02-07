import {
  AppContainer,
  AppScreen,
  AppText,
} from '@/components/system';
import React from 'react';

const BookingScreen: React.FC = () => {
  return (
    <AppScreen>
      <AppContainer>

        <AppText variant="h1">
          Agendamento
        </AppText>

        <AppText
          variant="body"
          color="textSecondary"
        >
          Escolha o serviço e o melhor horário para você.
        </AppText>

      </AppContainer>
    </AppScreen>
  );
};

export default BookingScreen;
