import { useState } from "react";

function AddToDo({onNewItem}){
  const [todoName,  setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange =(event)=>{
    setTodoName(event.target.value);
  }
  const handleDateChange =(event)=>{
    setDueDate(event.target.value);
  }
  const handleAddButtonClicked =() =>{
    onNewItem(todoName,dueDate);
    setDueDate(" ");
    setTodoName(" ");
  }
    return <div class="row kg-row">
      <div class="col-5">
        <input type='text' placeholder='ENTER TO DO HERE'
        value={todoName}
        onChange={handleNameChange}/>
      </div>
      <div class="col-5"><input type='date' value={dueDate} onChange={handleDateChange}/></div>
      
      <div class="col-2">
      <button type="button" class="btn btn-dark kg_button"
      onClick={handleAddButtonClicked}>ADD</button>
      </div>
    </div>
 
}
export default AddToDo;