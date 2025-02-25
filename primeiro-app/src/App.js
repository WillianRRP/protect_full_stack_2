import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Pagar conta de água',
  ]);

useEffect(()=>{
  const tarefaStore = localStorage.getItem('@tarefa');
  if(tarefaStore){
    setTarefas(JSON.parse(tarefaStore))
  }
},[]);

useEffect(()=>{
  localStorage.setItem('@tarefa',JSON.stringify(tarefas))
},[tarefas])
  

  function handleRegister(e) {
    e.preventDefault();
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
