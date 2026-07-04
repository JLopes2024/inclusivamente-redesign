import { useState } from "react";
import { dataAluno } from "../data/dataAlunos";
import { dataProfessor } from "../data/dataProfessor";
import "./StudentManager.css";

export default function StudentManager() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra alunos pelo nome
  const filteredAlunos = dataAluno.filter((aluno) =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-manager">
      <input
        type="text"
        placeholder="Buscar aluno pelo nome..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="list-container">
        {dataProfessor.map((prof) => {
          const alunosDoProf = filteredAlunos.filter((a) => a.professorId === prof.id);
          
          if (alunosDoProf.length === 0) return null;

          return (
            <details key={prof.id} className="prof-card">
              <summary>
                {prof.nome} | {prof.especialidade} ({alunosDoProf.length} alunos)
              </summary>
              <ul>
                {alunosDoProf.map((aluno) => (
                  <li key={aluno.id}>
                    <strong>{aluno.nome}</strong> - {aluno.idade} anos | 
                    Resp: {aluno.responsavel} | Necessidade: {aluno.necessidade}
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>
    </div>
  );
}