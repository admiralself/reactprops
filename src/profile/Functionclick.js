import React from 'react'

const Functionclick = props => {

    const clickHandler = () => {
        props.onClick(alert (`${props.name}`))

    }

    return (
        <div>
            <button onClick={clickHandler}>Name of the profile</button>
        </div>
    )
}

export default Functionclick
