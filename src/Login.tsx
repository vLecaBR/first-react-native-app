import { VStack, Image, Text, Box, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';
import { Titulo } from './components/Titulo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { fazerLogin } from './serviços/AutenticacaoServico';


type LoginScreenNavigationProp = NativeStackNavigationProp<any>;

export default function Login({ navigation }: { navigation: LoginScreenNavigationProp }) 
{
   
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
 
  async function login() {
    const resultado = await fazerLogin(email, senha)
    if(resultado){
      navigation.replace('(tabs)')
    }
    else{
      console.log('erro')
    }
    
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
          secureTextEntry={true}  // adiciona para campo de senha
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
