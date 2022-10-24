function InputForm(props){
    return( 
        <form onSubmit = {props.handleSubmit}>
            <input value ={props.userInput} onChange={props.handleChange}/>
        </form>
    );
}; 

export default InputForm;