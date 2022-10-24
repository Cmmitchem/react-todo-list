
import './App.css';
import Header from './Header.js';
import data from "./data.json";
import { useState } from "react";
import ToDoList from './ToDoList';
import InputForm from './InputForm';

function App() {

  const [ toDoList, setToDoList ] = useState(data);
  const [ userInput, setUserInput ] = useState("");

  function handleToggle(id) {
    let mapped = toDoList.map(todo => {
      return todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo};
    });
    setToDoList(mapped);
  }

  function handleChange(event){
    setUserInput(event.currentTarget.value)
  }

  function addTask(userInput) {
    setToDoList(toDoList => [...toDoList, { id: toDoList.length + 1, task: userInput, complete: false }]);
  }

  function handleSubmit(event){
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  }

  return (
    <div className="App">
      
      <Header/>
      <InputForm handleChange={handleChange} handleSubmit={handleSubmit} userInput={userInput}/>
      <ToDoList toDoList = {toDoList} handleToggle ={handleToggle} />
    </div>
  );
};




export default App;
