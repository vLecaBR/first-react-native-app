import { VStack, Image, Text, Box, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from '../../src/assets/Logo.png';
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';
import { Titulo } from './components/Titulo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type LoginScreenNavigationProp = NativeStackNavigationProp<any>;

export default function Login({ navigation }: { navigation: LoginScreenNavigationProp }) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        Faça login em sua conta
      </Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          secureTextEntry={true}  // adiciona para campo de senha
        />
      </Box>
      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
