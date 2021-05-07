import "./App.css";
import Header from "./mycomponents/Header";
import { Todos } from "./mycomponents/Todos";
import { Footer } from "./mycomponents/Footer";
import { TodoItem } from "./mycomponents/TodoItem";
import React, {useState} from 'react'; 

function App() {
  let onDelete = (todo)=>{
    console.log("i am on delete of todo ",todo)
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }))
  }

  const [todos,setTodos]=useState([
    {
      sno:1,
      title:'Go to the market',
      desc: 'You need to go to the market to get this job done'
    },
    {
      sno:2,
      title:'Go to the gym',
      desc: 'You need to go to the market to get this job done'
    },
    {
      sno:3,
      title:'Go to the club',
      desc: 'You need to go to the market to get this job done'
    }
  ]);

  return (
    <>
      <Header title="MyTodoList" searchBar={false}/>
      <Todos todos = {todos} onDelete = {onDelete} />
      <Footer />
    </>
  );
}

export default App;
