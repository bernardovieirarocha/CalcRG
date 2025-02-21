import { useState } from "react";

export default function Formulario({ setDisciplinas }) {
  const [nome, setNome] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");

  const adicionarDisciplina = (e) => {
    e.preventDefault();
    if (!nome || !notaFinal || !cargaHoraria) return alert("Preencha todos os campos!");

    const novaDisciplina = {
      nome,
      notaFinal: parseFloat(notaFinal),
      cargaHoraria: parseInt(cargaHoraria),
    };

    setDisciplinas((disciplinasAnteriores) => [...disciplinasAnteriores, novaDisciplina]);

    // Limpar os campos
    setNome("");
    setNotaFinal("");
    setCargaHoraria("");
  };

  return (
    <form onSubmit={adicionarDisciplina} style={{ marginBottom: "20px" }}>
      <input type="text" placeholder="Nome da Disciplina" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input type="number" placeholder="Nota Final" value={notaFinal} onChange={(e) => setNotaFinal(e.target.value)} required />
      <input type="number" placeholder="Carga Horária" value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)} required />
      <button type="submit">Adicionar Disciplina</button>
    </form>
  );
}