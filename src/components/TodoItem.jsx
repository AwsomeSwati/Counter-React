import React from "react";
import { useState } from "react";
import  styles  from "./todo.module.css";

const TodoItem = ({ todo,onDelete }) => {
    const [isCompleted , setIsCompleted] = useState(todo.isCompleted)
    

  
    return (

        <div key={todo.id} className= {styles.todo}>
            <input type="checkbox" checked={isCompleted} onChange = {(e) =>{
                console.log(e.target.checked)
                setIsCompleted(e.target.checked);
            }}  />
            
            <div  className={isCompleted ? styles.striked : ""}>{todo.value} </div>
          <div>  <button onClick ={()=>onDelete(todo.id)}>Delete</button> </div>
             </div>
    );
};

export default TodoItem;