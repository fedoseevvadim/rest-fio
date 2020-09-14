import React from 'react'
import propTypes from 'prop-types'
import FioItem from './FioItem'

const styles = {

    ul: {
        listStyle: 'none',
        matgin:0,
        padding:0
    }

}


 function FioList ( props ) {
    return (
        <ul style={styles.ul}>
            {props.fios.map( ( fio, index ) => {
                return ( 
                <FioItem 
                fio={fio} 
                key={fio.id} 
                index={index} 
                onChange={props.onToggle}
                />
                )
            })}
        </ul>
        );
}

FioList.propTypes = {
    fios: propTypes.arrayOf(propTypes.object).isRequired,
    onToggle: propTypes.func.isRequired
}

export default FioList