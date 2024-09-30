// Explorar.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { VStack, Box, ScrollView } from "native-base";
import { useState } from "react";
import { Botao } from "../../src/components/Botao";
import { EntradaTexto } from "../../src/components/EntradaTexto";
import { Titulo } from "../../src/components/Titulo";
import { CardConsulta } from "@/src/components/CardConsulta";
import { buscarEspecialistaPorEstado } from "@/src/serviços/EspecialistaServico";
import Agendamento from '../../src/Agendamento'; // Importe a tela de Agendamento

interface Especialista {
  nome: string;
  imagem: string;
  especialidade: string;
  id: string;
}

const Stack = createStackNavigator(); // Crie o Stack Navigator

function ExplorarScreen({ navigation }: any) {
  const [estado, setEstado] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState<Especialista[]>([]);

  async function buscar() {
    if (!estado || !especialidade) return;

    const resultado = await buscarEspecialistaPorEstado(estado, especialidade);
    
    if (resultado && resultado.length > 0) {
      setResultadoBusca(resultado);
    } else {
      setResultadoBusca([]);
    }
  }

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <EntradaTexto
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <Botao mt={3} mb={3} onPress={buscar}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="blue.500" alignSelf="center">Resultado da Busca</Titulo>
        {resultadoBusca?.map((especialista: Especialista) => (
          <CardConsulta 
            key={especialista.id}
            especialidade={especialista.especialidade}
            foto={especialista.imagem}
            nome={especialista.nome}
            onPress={() => navigation.navigate('Agendamento', {
              especialistaId: especialista.id
            })}
          />
        ))}
      </VStack>
    </ScrollView>
  );
}

// Este é o Stack Navigator específico para a tela Explorar
export default function Explorar() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ExplorarScreen" 
        component={ExplorarScreen} 
        options={{ headerShown: false }} // Esconder o header da aba Explorar
      />
      <Stack.Screen 
        name="Agendamento" 
        component={Agendamento} 
        options={{ title: 'Agendamento' }}
      />
    </Stack.Navigator>
  );
}
