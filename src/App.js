import './App.css';

import { useState, useEffect } from 'react';
import {BsTrash, BsBookMarkCheck, BsBookMarkCheckFill} from 'react-icons/bs';

const API = "http://localhost:5000"

function App() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviou!");
  };
  return (
    <div class ="App">
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>
      <div className='form-todo'>
        <h2>Insira sua proxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
          <label htmlFor="title">O que voce vai fazer?</label>
          <input type="text" name='title' placeholder='Titulo da tarefa' 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          /> 
          </div>
          <input type='submit' value="Enviar" />
        </form>
      </div>
      <div className='list-todo'>
        <h2>Lista de Tarefas</h2>
        {todos.length === 0 && <p>Nao ha tarefas!</p>}
      </div>
    </div>
  );
}

export default App;
