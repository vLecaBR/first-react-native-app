import { Image, Text, Box, Checkbox, ScrollView, useToast } from 'native-base';
import { useState, useEffect } from 'react';
import Logo from './assets/Logo.png';
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';
import { Titulo } from './components/Titulo';
import { secoes } from '../utils/CadastroEntradaTexto';
import { cadastrarPaciente } from './serviços/PacienteServico';

export default function Cadastro({ navigation }: any) {
  const [numSecao, setNumSecao] = useState(0);
  const [dados, setDados] = useState({} as any);
  const [planos, setPlanos] = useState([] as number[]);
  const toast = useToast();

  useEffect(() => {
    // Resetar dados quando a seção muda
    if (numSecao > 0) {
      setDados({});
    }
  }, [numSecao]);

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    } else {
      console.log(dados);
      console.log(planos);
      cadastrar();
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  function atualizarDados(id: string, valor: string) {
    setDados({ ...dados, [id]: valor });
  }

  async function cadastrar() {
    const resultado = await cadastrarPaciente({
      cpf: dados.cpf,
      nome: dados.nome,
      email: dados.email,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        estado: dados.estado,
        complemento: dados.complemento,
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: dados.imagem,
    });

    if (resultado) {
      toast.show({
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode fazer login',
        backgroundColor: 'green.500',
      });
      navigation.replace('Login');
    } else {
      toast.show({
        title: 'Erro ao cadastrar',
        description: 'Verifique os dados e tente novamente',
        backgroundColor: 'red.500',
      });
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />

      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao]?.entradaTexto?.map((entrada, index) => {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={`entrada-${index}-${entrada.id}`} // Combinação de index e id para chave única
              secureTextEntry={entrada.secureTextEntry}
              value={dados[entrada.name] || ''} // Garante que o valor seja vazio se não houver dado
              onChangeText={(text) => atualizarDados(entrada.name, text)}
            />
          );
        })}
      </Box>

      <Box>
        {numSecao == 2 && (
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
            Selecione o plano:
          </Text>
        )}
        {secoes[numSecao].checkbox?.map((checkbox, index) => {
          return (
            <Checkbox
              key={`checkbox-${index}-${checkbox.id}`} // Combinação de index e id para chave única
              value={checkbox.value}
              onChange={() => {
                setPlanos((planosAnteriores) => {
                  if (planosAnteriores.includes(checkbox.id)) {
                    return planosAnteriores.filter((id) => id !== checkbox.id);
                  }
                  return [...planosAnteriores, checkbox.id];
                });
              }}
              isChecked={planos.includes(checkbox.id)}
            >
              {checkbox.value}
            </Checkbox>
          );
        })}
      </Box>

      {numSecao > 0 && (
        <Botao onPress={() => voltarSecao()} bgColor="gray.400">
          Voltar
        </Botao>
      )}

      {numSecao === 0 && (
        <Botao onPress={() => navigation.replace('Login')} bgColor="red.500" mt={4}>
          Cancelar
        </Botao>
      )}

      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>
        {numSecao == 2 ? 'Finalizar' : 'Avancar'}
      </Botao>
    </ScrollView>
  );
}
