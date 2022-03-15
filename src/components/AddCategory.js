import React , {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { props } ) => {

    const [input, setInput] = useState("Type here");
    
    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( input.trim().length > 2) {
            props( categs => [input, ...categs]);
            setInput('');
        }

    }

  return (
    <form onSubmit={ handleSubmit }>
        <input 
        type="text"
        value={input}
        onChange={ handleInput }
        />

    </form>
  )
}



AddCategory.propTypes = {
    props: PropTypes.func.isRequired
}