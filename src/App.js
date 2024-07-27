
import './App.css';
import AppName from './components/AppName';
import AddToDo from './components/AddToDo';
import Todoitems from './components/Todoitems';
import { useState } from 'react';
import Startingmsg from './components/Startingmsg';
function App() {
const [todoItems , setTodoItems] = useState([/*initialtodoItems*/]);
const handleNewItem =(itemName , itemDueDate) =>{
  console.log(`new item added:${itemName} date:${itemDueDate}`);
  const newToDoItems = [...todoItems,{name:itemName,dueDate:itemDueDate},];
setTodoItems(newToDoItems);
}
const handleDeleteItem =(todoItemName) =>{
  const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
  setTodoItems(newTodoItems);
  
}

  return (
   <center className="todo-container">
    <AppName></AppName>
    <AddToDo onNewItem={handleNewItem}></AddToDo>
    {todoItems.length === 0 && <Startingmsg ></Startingmsg>}
    <Todoitems todoIitems={todoItems} onDeleteClick={handleDeleteItem}></Todoitems>
    
   </center>
  );
}

export default App;
