import React, {useState, forwardRef} from 'react'

const numberColors = {
    0: '#0f0',
    1: '#0f8',
    2: '#08f',
    3: '#00f',
    4: '#80f',
    5: '#f0f',
    6: '#f08',
    7: '#f00',
    8: '#fff',
    x: '#000',
}

const generateGrid = (totalRows, totalColumns, numberOfMines) => {
    let field = [];
    return field
}

const generateRevealedSpacesGrid = (totalRows, totalColumns, numberOfMines) => {
    let field = [];
    return field
}

const MineSweeperMap = (props) => {

    const [grid, setGrid] = useState(generateGrid(props.numberOfRows, props.numberOfCols, props.totalMines)) 
    const [revealedSpacesGrid, setRevealedSpacesGrid] = useState(generateRevealedSpacesGrid(props.numberOfRows, props.numberOfCols, props.totalMines)) 
    const [numberOfRevealedSpaces, setNumberOfRevealedSpaces] = useState(0);

    const toggleActive = (row, col) => {

        // maybe use unique state in this component
        setFlagsPlanted(++flagsPlanted)

    }

    const handleSpaceClick = (row, col) => {

        return

    }

    const generateSpaceContent = (row, col) => {
        
        return 'hw!'

    }

    let map = [];

    for(let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for(let colIndex = 0; colIndex < grid.length; colIndex++) {
            map.push(
                <Space 
                    className={StylesProvider.space}
                    id={colIndex+','+rowIndex}
                    active={revealedSpaces[rowIndex][colIndex] === 1 ? false : true }
                    toggleActive={() => toggleActive(rowIndex, colIndex)}
                    onClick={() => handleSpaceClick(rowIndex, colIndex)}
                />
            )
        }
    }


    return (
        <div>
            {map}
        </div>
    )
}

export default MineSweeperMap