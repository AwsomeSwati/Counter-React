import React from "react";
import { useState } from "react";
import  TodoItem  from "../components/TodoItem";
import  styles  from "./todo.module.css";


const Todo = () => {
   const [value,setValue] =  useState("");
   const [todos,setTodos] =  useState([]);

   // read input 
   // update todos list 
   // re-rnder todos list when updated

   const onDelete = (id) => {
    let newTodos = todos.filter( (todo) => todo.id !== id)
    setTodos(newTodos);
 };

   return (
   <div>
       <input value = {value} onChange = {(e) =>{
           setValue(e.target.value);
       }}
       />
       <button onClick={ () =>{
           setTodos([...todos,{value : value }]);  // it does not have unique id so is not deleting individual item.
           setValue("")
       }}
       >ADD</button>
       <div  className={styles.todoList}> 
         
       {todos.map((todo) => (
          <TodoItem key={todo.id} todo = {todo} onDelete={onDelete} />
       ))}
   </div>
</div>
   );
    
};

export default Todo