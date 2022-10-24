import ToDo from "./ToDo";

function ToDoList(props){
    console.log(props.toDoList);
  
    return(
        <div>
          {props.toDoList.map(todo => <ToDo todo = {todo} handleToggle={props.handleToggle}/>)}  
        </div>

    );
};

export default ToDoList;