import { useState } from "react"

export const AddCategory = ( { onNewValue }) => {

    const [inputValue, setInputvalue] = useState('')

    const onInputChange = ({ target }) =>{
        // console.log(event.target.value);
        setInputvalue( target.value );
    }
    
    const onSubmit = (event) =>{
        // console.log(event)
        event.preventDefault();
        // console.log(inputValue)
        if( inputValue.trim().length <= 1) return;
        // onAddCategory((cat) => [inputValue,...cat]);
        onNewValue( inputValue.trim() );
        setInputvalue('');
        
    }
  return (
    <form onSubmit={ onSubmit }>
    <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue} 
        onChange={ (event) => onInputChange(event) }/>
    </form>
  )
}
