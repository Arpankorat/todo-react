import React,{useState,useEffect} from 'react';
import './App.css';
import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App() {
  const[inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const[status,setStatus]=useState("all");
  const[filtered,setFiltered]=useState([]);

  useEffect(()=>{
    switch (status) {
      case 'completed': setFiltered(todos.filter(todo=>todo.completed===true))
        break;
      case 'uncompleted': setFiltered(todos.filter(todo=>todo.completed ===false))
        break;
      default:
        setFiltered(todos);
        break;
    }
  },[todos,status])

console.log(filtered)
  return (
    <div className="App">
      <header>Arpan's todo list </header>
    <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} filtered={filtered}/>
    <TodoList setTodos={setTodos} todos={todos} filtered={filtered} />
    </div>
  );
}

export default App;
