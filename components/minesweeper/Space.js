import React, { useState } from 'react'

const Space = (props) => {

    return (
        <button
            bgColor={props.bgColor}
            className={props.style}
            id={props.id}
            style={{
                backgroundColor: props.active ? 'red' : 'green',
                width: props.spaceSize+'rem',
                height: props.spaceSize+'rem',
            }}
            onContextMenu={props.handleLeftClick}
            onClick={props.handleClick}
        >
            {props.spaceContent}
        </button>
    )

}

export default Space