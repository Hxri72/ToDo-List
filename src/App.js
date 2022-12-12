import React,{useState} from 'react';
import Header from './components/Header';
import Form from './components/form';
import Todolist from './components/Todolist';

import './App.css'

const App = () => {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState("")
  const [editToDo,setEditToDo] = useState(null);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          toDos = {toDos}
          setToDos = {setToDos}
          toDo = {toDo}
          setToDo = {setToDo}
          editToDo = {editToDo}
          setEditToDo = {setEditToDo}
          />
        </div>
        <div>
          <Todolist
          toDos = {toDos}
          setToDos = {setToDos}
          setEditToDo = {setEditToDo}
          />
        </div>

      </div>
      
    </div>
    
  );
}

export default App;
