import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";

import './App.css';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  } 

 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList}/>
   </div>
);
}




export default App;
