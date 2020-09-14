import React, {useState} from 'react';
import propTypes from 'prop-types'



function useInputValue ( defaultValue = '' ) {
    
    const [value, setValue] = useState('')

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }

}

function AddFio ({ onCreate }) {

    const input = useInputValue('')

    function submitHandler (event) {
    
        event.preventDefault()
    
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
            //setValue('')
        } 
    
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type='submit'>Add Fio</button>
        </form>    
    )
}

AddFio.propTypes = {
    onCreate: propTypes.func.isRequired
}

export default AddFio