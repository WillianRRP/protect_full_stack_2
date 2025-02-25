import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

 
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);
  
  
  useEffect(() => {
    if (tarefas.length > 0) {  
      localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();
    
    if (input.trim() === '') {
      alert('Digite uma tarefa antes de adicionar!');
      return;
    }

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastro de Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br />
        <input 
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />
        <button type="submit">Registrar</button>
      </form>
      <br />
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
