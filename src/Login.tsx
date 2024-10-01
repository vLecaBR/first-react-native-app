import { VStack, Image, Text, Box, Link, useToast } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';
import { Titulo } from './components/Titulo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { fazerLogin } from './serviços/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {jwtDecode} from 'jwt-decode'; // Importação corrigida
import Principal from '@/app/(tabs)/Principal';

type LoginScreenNavigationProp = NativeStackNavigationProp<any>;

export default function Login({ navigation }: { navigation: LoginScreenNavigationProp }) 
{
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(true);
  const toast = useToast();

  useEffect(() => {
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token');
      if(token){
        navigation.replace('Tabs'); // Se o usuário estiver logado, redireciona para as Tabs
      }
      setCarregando(false); // Para de mostrar a tela de carregamento
    }
    verificarLogin();
  }, [navigation]);

  async function login() {
    const resultado = await fazerLogin(email, senha);
    if(resultado){
      const { token } = resultado;
      AsyncStorage.setItem('token', token);
      
      const tokenDecodificado = jwtDecode(token) as any; // Decodifica o token JWT
      const pacienteId = tokenDecodificado.id;
      AsyncStorage.setItem('pacienteId', pacienteId);

      navigation.replace('Tabs'); // Redireciona para as Tabs após o login
    } else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha estão incorretos",
        backgroundColor: "red.500"
      });
    }
  }

  if(carregando){
    return null; // Tela de carregamento pode ser adicionada aqui
  }

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
          value={email}
          onChangeText={setEmail}
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          secureTextEntry={true}  // campo de senha perdendo a visibilidade com ***
          value={senha}
          onChangeText={setSenha}
        />
      </Box>
      
      <Botao onPress={login}>Entrar</Botao>

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
