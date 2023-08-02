import React,{useState} from 'react';
import './App.css';
import InputField from './component/InputField';
import { ToDo } from './component/model';
import ToDoList from './component/ToDoList';


const App:React.FC=()=> {
  const [toDo,setToDo]=useState<string>("")
  const [toDos,setToDos  ]=useState<ToDo[]>([]);
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos,{id:Date.now(),todo:toDo,isDone:false}]);
      setToDo("");
    }
  };

  console.log(toDos);
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
      <ToDoList toDos={toDos} setToDos={setToDos}/>


    </div>
  );
}

export default App;
