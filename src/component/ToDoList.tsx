import React from 'react';
import "./styles.css";
import { ToDo } from './model';
import SingleTodo from './SingleTodo';

interface Props {
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className='todos'>
        {toDos.map((todo) => (
            <SingleTodo 
            todo={todo} 
            key={todo.id}
            todos={toDos}
            setTodos={setToDos}
            />
        ))}
    </div>
  )
}

export default ToDoList;