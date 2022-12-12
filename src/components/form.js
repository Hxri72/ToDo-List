import React,{ useEffect } from 'react' 
import {v4 as uuidv4} from 'uuid';

const form = ({toDos,setToDos,toDo,setToDo,editToDo,setEditToDo}) => {

  const updateToDo = (title,id,completed) => {
    const newToDo = toDos.map((todo)=> 
      todo.id === id ? {title,id,completed} : todo 
    );
    setToDos(newToDo);
    setEditToDo("")
  }

  useEffect(() => {
    if(editToDo){
      setToDo(editToDo.title);
    }else{
      setToDo("")
    }
  },[setToDo,editToDo]);

  const onFormSubmit = (event) =>{
    event.preventDefault();
    if(!editToDo){
      setToDos([...toDos,{id: uuidv4(), title:toDo, completed:false}]);
      setToDo("")
    }else{
      updateToDo(toDo,editToDo.id,editToDo.completed)
    }
  }
    
  return (
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter a Todo..." value={toDo} className='task-input' required onChange={(e)=>setToDo(e.target.value)}/>
        <button className='button-add' type="submit">{editToDo ? "OK" : "Add"}</button>
      </form>
  )
}

export default form
