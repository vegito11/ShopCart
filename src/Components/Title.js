import React from 'react'

function Title(props) {
    return (
        <div className="text-align-center text-capitalize d-flex text-title">
            <p className="text-primary display-4 mx-auto"> {props.name} </p>            
        </div>
    )
}

export default Title
