import React, { useContext } from 'react'
import propTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function FioItem ( { fio, index, onChange } ) {

    const {removeFio} = useContext(Context)
    const classes = []

    if (fio.completed) {
        classes.push('done')
    }

    return  (
            <li style={styles.li}>
                <span className={classes.join(' ')}>
                    <input 
                    type="checkbox" 
                    checked={fio.completed}
                    style={styles.input} 
                    onChange={() => onChange(fio.id)}
                    />
               
                <strong> { index + 1 }  </strong>
                &nbsp;
                    { fio.first_name } {  fio.last_name } {  fio.second_name }

                </span>

                <button className='rm' onClick={removeFio.bind(null, fio.id)}>&times;</button>
            </li>
            )
} 

FioItem.propTypes = {
    fio: propTypes.object.isRequired,
    index: propTypes.number,
    onChange: propTypes.func.isRequired
}

export default FioItem