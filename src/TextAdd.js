import {React, useState} from "react";

    const TextAdd = ( {handleSubmit, userInput} ) => {
    const [inputValue, setInputValue] = useState('');

        return(
        <div>
            <input onChange={event => setInputValue(event.target.value)} type="text" placeholder="Enter task..."/>
            <button onClick={ () => handleSubmit(inputValue) }> Add </button>
        </div>
    );
  }
 

export default TextAdd 