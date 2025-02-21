export default function ListaDisciplinas({ disciplinas }) {
    return (
      <div>
        <h2>Disciplinas Cadastradas</h2>
        <ul>
          {disciplinas.length === 0 ? <p>Nenhuma disciplina cadastrada.</p> : 
            disciplinas.map((disciplina, index) => (
              <li key={index}>
                {disciplina.nome} - Nota: {disciplina.notaFinal} - Carga Horária: {disciplina.cargaHoraria}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }