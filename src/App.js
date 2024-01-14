import './App.css';

import { useState, useEffect } from 'react';
import {BsTrash, BsBookMarkCheck, BsBookMarkCheckFill} from "react-icsons/bs";

const API = "http://localhost:5000"

function App() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div class ="App">
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>
      <div className='form-todo'>
        <p>Formulario</p>
      </div>
      <div className='list-todo'>
        <p>Lista</p>
      </div>
    </div>
  );
}

export default App;
