import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "@/src/components/Titulo";
import { NativeBaseProvider, StatusBar } from 'native-base';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarDadosPaciente } from "@/src/serviços/PacienteServico";
import { Paciente } from "@/src/interfaces/Paciente";
import { Botao } from "@/src/components/Botao";

export default function Perfil({navigation}:any) {
  const [dadosPaciente, setdadosPaciente] = useState({} as Paciente);

  useEffect(() => {
    async function fetchDadosPaciente() {  // Renamed to avoid naming conflict
      const pacienteId = await AsyncStorage.getItem('pacienteId');
      if (!pacienteId) return;
      const resultado = await pegarDadosPaciente(pacienteId);
      if (resultado) {
        setdadosPaciente(resultado);
        console.log(resultado);
      }
    }
    fetchDadosPaciente();
  }, []); // Ensure effect runs once on mount by adding the empty dependency array

  function deslogar() {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('pacienteId');
    navigation.replace('Login');
  }
  
  

  return (
    <NativeBaseProvider>
      <ScrollView flex={1}>
        <VStack flex={1} alignItems="center" p={5}>
          <Titulo color="blue.500">Meu Perfil</Titulo>

          {/* Avatar with a conditional check for the image */}
          {dadosPaciente.imagem ? (
            <Avatar size="xl" source={{ uri: dadosPaciente.imagem }} mt={5} />
          ) : (
            <Avatar size="xl" mt={5} />
          )}

          <Titulo color="blue.500">Informações pessoais</Titulo>
          <Titulo fontSize="lg" mb={1}>{dadosPaciente.nome || "Nome não disponível"}</Titulo>
          <Text>{dadosPaciente.email || "Email não disponível"}</Text>
          
          {/* Conditional check for the endereco property */}
          {dadosPaciente.endereco ? (
            <Text>{dadosPaciente.endereco.estado || "Rua não disponível"}</Text>
          ) : (
            <Text>Endereço não disponível</Text>
          )}

          <Divider mt={5} />

          <Titulo color="blue.500" mb={1}>Planos de saúde</Titulo>
          {dadosPaciente.planosSaude?.length ? (
            dadosPaciente.planosSaude.map((plano, index) => (
              <Text key={index}>{plano}</Text>
            ))
          ) : (
            <Text>Nenhum plano de saúde disponível</Text>
          )}

          <Botao onPress={deslogar}>
            Logout
          </Botao>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
