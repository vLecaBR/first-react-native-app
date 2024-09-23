import Cadastro from './Cadastro'
import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './styles/temas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Cadastro />
    </NativeBaseProvider>
  );
}