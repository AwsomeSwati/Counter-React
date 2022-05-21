import React from "react";
// import {Fragment,useState}React from "react";
import  styles  from "./todo.module.css";

const Counter = () => {

    const [count,setCount] = React.useState(0); 
    //  0 = initial value


    return(

        <div> 
            {/* <fragment></fragment>  or <> </> but cannot have a class name to these*/}
            <h1 className={count%2 === 0 ? styles.green:styles.red }>Counter App : {count} </h1>
            <button onClick ={() => setCount(count+1)}>Increment</button>
            <button onClick = {() => setCount(count-1)}>Decrement</button>
            <button onClick = {() => setCount(count*2)}>Double</button>

        </div>
    );
}

export default Counter ;