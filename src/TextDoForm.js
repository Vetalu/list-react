import React from "react";

    const TextAdd = (userInput, handleChange) => {
        console.log(handleChange)
    return(
        <div>
            <input value={ userInput } type="text" onChange={ () => handleChange()} placeholder="Enter task..."/>
            <button > Add </button>
        </div>
    );
  }
 

export default TextAdd 