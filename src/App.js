import "./App.css";
import Header from "./mycomponents/Header";
import { Todos } from "./mycomponents/Todos";
import { Footer } from "./mycomponents/Footer";
import { TodoItem } from "./mycomponents/TodoItem";
import { AddTodo } from "./mycomponents/AddTodo";
import { About } from "./mycomponents/About";
import React, {useState,useEffect} from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  let onDelete = (todo)=>{
    console.log("i am on delete of todo ",todo)
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));

    localStorage.setItem("todos",JSON.stringify(todos));
  }

 let addTodo = (title,desc)=>{
  let sno; 
  if(todos.length === 0){
    sno = 0;
  }else{
   sno = todos[todos.length-1].sno + 1;
  }

   const myTodo = {
     sno:sno,
     title:title,
     desc:desc
    }
    console.log("i am add todo",sno,title,desc);
    setTodos([...todos,myTodo]);
    
 }



  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])

  return (
    <>
    <Router>
      <Header title="MyTodoList" searchBar={false}/>
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
               <AddTodo addTodo ={addTodo} />
                <hr/>
               <Todos todos = {todos} onDelete = {onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      
      <Footer />
    </Router>

    </>
  );
}

export default App;
