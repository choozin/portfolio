import { Height } from '@material-ui/icons';
import React, {useState, forwardRef} from 'react'

import styles from './minesweeper.module.css'

import Space from './Space';

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

const generateGrid = (totalCols, totalRows, val) => {
    let grid = [];
    for(let i = 0; i < totalRows; i++) {
        grid[i] = [];
        for(let j = 0; j < totalCols; j++) {
            grid[i][j] = val
        }
    }
    return [...grid]
}

const generateRevealedSpacesGrid = (totalCols, totalRows, numberOfMines) => {
    let grid = generateGrid(totalCols, totalRows, 0);
    while(numberOfMines > 0) {
        const x = Math.floor(Math.random() * totalCols);
        const y = Math.floor(Math.random() * totalRows);
        if(grid[x][y] === 'x') continue;
        grid[x][y] = 'x';
        numberOfMines -= 1;
    }
    // calculate numbers
    for(let i = 0; i < totalRows; i++) {
        for(let j = 0; j < totalCols; j++) {
            if(grid[i][j] === 'x') {
                // top left
                if (typeof grid[i-1]?.[j-1] === 'number') grid[i-1][j-1]++;
                // top 
                if (typeof grid[i-1]?.[j] === 'number') grid[i-1][j]++;
                // top right
                if (typeof grid[i-1]?.[j+1] === 'number') grid[i-1][j+1]++;
                // left
                if (typeof grid[i]?.[j-1] === 'number') grid[i][j-1]++;
                // right
                if (typeof grid[i]?.[j+1] === 'number') grid[i][j+1]++;
                // bottom left
                if (typeof grid[i+1]?.[j-1] === 'number') grid[i+1][j-1]++;
                // bottom
                if (typeof grid[i+1]?.[j] === 'number') grid[i+1][j]++;
                // bottom right
                if (typeof grid[i+1]?.[j+1] === 'number') grid[i+1][j+1]++;
            }
        }
    }
    return [...grid]
}

const MineSweeperMap = (props) => {

    const [grid, setGrid] = useState(generateGrid(props.numberOfRows, props.numberOfCols, props.totalMines)) 
    const [revealedSpacesGrid, setRevealedSpacesGrid] = useState(generateRevealedSpacesGrid(props.numberOfRows, props.numberOfCols, props.totalMines)) 
    const [numberOfRevealedSpaces, setNumberOfRevealedSpaces] = useState(0);

    const handleLeftClick = (row, col) => {

        // maybe use unique state in this component
        setFlagsPlanted(++flagsPlanted)
        return false

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
                    style={styles.space}
                    id={colIndex+','+rowIndex}
                    active={revealedSpacesGrid[rowIndex][colIndex] === 1 ? false : true }
                    handleLeftClick={() => handleLeftClick(rowIndex, colIndex)}
                    handleClick={() => handleSpaceClick(rowIndex, colIndex)}
                    spaceContent={() => generateSpaceContent(rowIndex, colIndex)}
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