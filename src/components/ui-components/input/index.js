import React from 'react';

const Input = ( props ) => {
    return (
      <input  
        className={ props.className } 
        type={ props.type } 
        name={ props.name }
        title={ props.title }
        placeholder={ props.placeholder }
        onChange={ props.onInput }
      />
    );
};

export default Input;