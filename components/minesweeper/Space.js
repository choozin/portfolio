import React, { useState } from 'react'

const Space = (props) => {


    return (
        <button
            className={props.style}
            id={props.id}
            style={{
                backgroundColor: props.active ? 'lightgrey' : 'darkgrey'
            }}
            onContextMenu={props.handleLeftClick}
            onClick={props.handleClick}
        >
            {props.spaceContent}
        </button>
    )

}

export default Space