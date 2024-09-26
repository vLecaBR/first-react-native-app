import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { Titulo } from "@/src/components/Titulo"

export default function Perfil(){
    return(
      <ScrollView flex={1}>
        <VStack flex={1} alignItems="center" p={5}>
          <Titulo color="blue.500">Meu Perfil</Titulo>
  
          <Avatar size="xl" source={{ uri: "https://cursos.alura.com.br/user/vlecabr.png" }} mt={5} />
  
          <Titulo color="blue.500">Informações pessoais</Titulo>
          <Titulo fontSize="lg" mb={1}>Victor Leça</Titulo>
          <Text>30/06/2003</Text>
          <Text>Ribeirão Preto</Text>
  
          <Divider mt={5} />
  
          <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
          <Text>Bronquite</Text>
          <Text>Sinusite</Text>
        </VStack>
      </ScrollView>
    )
  }