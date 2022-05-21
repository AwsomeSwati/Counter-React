// import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter"
import Todo from "./components/Todo"


function App() {
  return (
    <div className="App">
     
     <Counter />
     <br>
     </br>
     <h1>TODO</h1>
     <Todo />
    </div>
  );
}

export default App;
