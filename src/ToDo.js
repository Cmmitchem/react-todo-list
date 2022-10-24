function ToDo(props){

    return (
        <div 
            className = {props.todo.complete ? "complete" : "incomplete"}
            onClick={() => props.handleToggle(props.todo.id)}
        >
            {props.todo.task}
        </div>
    );

    
};


export default ToDo;
