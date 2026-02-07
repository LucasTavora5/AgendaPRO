import { PaperTheme } from '@/styles/theme/paper.theme';
import { Button, PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider theme={PaperTheme}>
      <Button mode="contained">
        Teste
      </Button>
    </PaperProvider>
  );
}
