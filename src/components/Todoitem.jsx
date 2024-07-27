
function Todoitem({todoname,tododate,Click}){
   return <div class="container">
      <div class="row kg-row">
    <div class="col-5">
      {todoname}
    </div>
    <div class="col-5">
      {tododate}
    </div>
    
    <div class="col-2">
    <button type="button" class="btn btn-danger kg_button" onClick={()=> Click(todoname)}>Delete</button>
    </div>
    </div>
    </div>
}
export default Todoitem;