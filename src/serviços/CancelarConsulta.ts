// src/serviços/ConsultaServico.ts
import api from './api'; // ou onde você importar sua configuração de API

export async function cancelarConsulta(consultaId: string): Promise<boolean> {
  try {
    await api.delete(`/consulta/${consultaId}`);
    return true; // Retorna true se a consulta foi cancelada com sucesso
  } catch (error) {
    console.error('Erro ao cancelar consulta:', error);
    return false; // Retorna false se ocorrer um erro
  }
}
