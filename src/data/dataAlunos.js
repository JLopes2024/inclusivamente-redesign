// Gerando 100 alunos distribuídos entre os 8 professores
export const dataAluno = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  nome: `Aluno ${i + 1}`,
  idade: Math.floor(Math.random() * 10) + 4, // Idade entre 4 e 13
  responsavel: `Responsável ${i + 1}`,
  necessidade: ["TDAH", "Autismo", "Dislexia", "Atraso Motor", "Desenvolvimento Global"][i % 5],
  professorId: (i % 8) + 1, // Distribui entre os 8 professores
  relatorios: Math.floor(Math.random() * 15)
}));