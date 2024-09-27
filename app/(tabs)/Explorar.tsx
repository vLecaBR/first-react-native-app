import { VStack, Text, Image, Box, ScrollView, Divider } from "native-base"
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Botao } from "../../src/components/Botao";
import { EntradaTexto } from "../../src/components/EntradaTexto";
import { Titulo } from "../../src/components/Titulo";
import { CardConsulta } from "@/src/components/CardConsulta";

export default function Explorar(){
    return(
        <NativeBaseProvider>
        <ScrollView p="5">
        <Box w="100%" borderRadius="lg" p={3} mt={0} shadow="1" borderRightRadius="md">
            <EntradaTexto
              placeholder="Digite a especialidade"
            />
            <EntradaTexto
              placeholder="Digite sua localização"
            />
            <Botao mt={3} mb={3}>
              Buscar
            </Botao>
          </Box>

        <Titulo color="blue.500" fontSize="xl" alignSelf="center" mb={2}>Resultado da busca</Titulo>
        <CardConsulta 
          nome='Dr. Leça'
          especialidade='Cardiologista'
          foto='https://github.com/vlecabr.png'
          data='20/04/2023'
          foiAgendado
        />
        <CardConsulta 
          nome='Dr. Leça'
          especialidade='Cardiologista'
          foto='https://github.com/vlecabr.png'
          data='20/04/2023'
          foiAgendado
        />
        <CardConsulta 
          nome='Dr. Leça'
          especialidade='Cardiologista'
          foto='https://github.com/vlecabr.png'
          data='20/04/2023'
          foiAgendado
        />
        <CardConsulta 
          nome='Dr. Leça'
          especialidade='Cardiologista'
          foto='https://github.com/vlecabr.png'
          data='20/04/2023'
          foiAgendado
        />
        </ScrollView>
        </NativeBaseProvider>
    )
}