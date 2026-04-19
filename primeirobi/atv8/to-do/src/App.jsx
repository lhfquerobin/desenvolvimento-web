import { useState } from "react";
import "./App.css";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionarTarefa() {
    if (texto.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      text: texto,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  function removeTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <main>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.text}
            <button onClick={() => removeTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
