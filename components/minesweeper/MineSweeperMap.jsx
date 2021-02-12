import { Height } from '@material-ui/icons';
import React, { useState, forwardRef, useImperativeHandle } from 'react'

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

const generateRevealedSpacesGrid = (totalCols, totalRows, val) => {
    let grid = [];
    for (let i = 0; i < totalRows; i++) {
        grid[i] = [];
        for (let j = 0; j < totalCols; j++) {
            grid[i][j] = val
        }
    }
    return [...grid]
}

const generateGrid = (totalCols, totalRows, numberOfMines) => {
    let grid = generateRevealedSpacesGrid(totalCols, totalRows, 0);
    while (numberOfMines > 0) {
        const x = Math.floor(Math.random() * totalCols);
        const y = Math.floor(Math.random() * totalRows);
        if (grid[x][y] === 'x') continue;
        grid[x][y] = 'x';
        numberOfMines -= 1;
    }
    // calculate numbers
    for (let i = 0; i < totalRows; i++) {
        for (let j = 0; j < totalCols; j++) {
            if (grid[i][j] === 'x') {
                // top left
                if (typeof grid[i - 1]?.[j - 1] === 'number') grid[i - 1][j - 1]++;
                // top 
                if (typeof grid[i - 1]?.[j] === 'number') grid[i - 1][j]++;
                // top right
                if (typeof grid[i - 1]?.[j + 1] === 'number') grid[i - 1][j + 1]++;
                // left
                if (typeof grid[i]?.[j - 1] === 'number') grid[i][j - 1]++;
                // right
                if (typeof grid[i]?.[j + 1] === 'number') grid[i][j + 1]++;
                // bottom left
                if (typeof grid[i + 1]?.[j - 1] === 'number') grid[i + 1][j - 1]++;
                // bottom
                if (typeof grid[i + 1]?.[j] === 'number') grid[i + 1][j]++;
                // bottom right
                if (typeof grid[i + 1]?.[j + 1] === 'number') grid[i + 1][j + 1]++;
            }
        }
    }
    return [...grid]
}

const MineSweeperMap = forwardRef((props, ref) => {

    const [grid, setGrid] = useState(generateGrid(props.numberOfRows, props.numberOfCols, props.totalMines))
    const [revealedSpacesGrid, setRevealedSpacesGrid] = useState(generateRevealedSpacesGrid(props.numberOfRows, props.numberOfCols, props.totalMines))
    const [numberOfRevealedSpaces, setNumberOfRevealedSpaces] = useState(0);
    let [numberOfFlagsPlanted, setNumberOfFlagsPlanted] = useState(0)
    useImperativeHandle(ref, () => ({
        newGame() {
            setNumberOfFlagsPlanted(0)
            props.setFlagsPlanted(0)
            setNumberOfRevealedSpaces(0)
            setGrid([
                ...generateGrid(props.numberOfRows, props.numberOfCols, props.totalMines)
            ])
            setRevealedSpacesGrid([
                ...generateRevealedSpacesGrid(props.numberOfRows, props.numberOfCols, 0)
            ])
        },
        restartGame() {
            setNumberOfFlagsPlanted(0)
            props.setFlagsPlanted(0)
            setNumberOfRevealedSpaces(0)
            setRevealedSpacesGrid([
                ...generateRevealedSpacesGrid(props.numberOfRows, props.numberOfCols, 0)
            ])
        },
        solveGame() {
            setNumberOfFlagsPlanted(0)
            props.setFlagsPlanted(0)
            setNumberOfRevealedSpaces(0)
            setRevealedSpacesGrid([
                ...generateRevealedSpacesGrid(props.numberOfRows, props.numberOfCols, 1)
            ])
        },
    }))

    const gameOver = () => {
        setRevealedSpacesGrid([
            ...generateRevealedSpacesGrid(props.numberOfRows, props.numberOfCols, 1)
        ])
    }

    const gameWon = () => {
        setRevealedSpacesGrid([
            ...generateRevealedSpacesGrid(props.numberOfRows, props.numberOfCols, 1)
        ])
    }

    const handleLeftClick = (event, row, col) => {
        event.preventDefault()
        if (revealedSpacesGrid[row][col] === 0) {
            revealedSpacesGrid[row][col] = 2;
            setNumberOfFlagsPlanted(++numberOfFlagsPlanted)
        } else if (revealedSpacesGrid[row][col] === 2) {
            revealedSpacesGrid[row][col] = 0;
            setNumberOfFlagsPlanted(--numberOfFlagsPlanted)
        }
        props.setFlagsPlanted(numberOfFlagsPlanted)
        setRevealedSpacesGrid([...revealedSpacesGrid])
    }

    const handleSpaceClick = (row, col) => {
        console.log('1', revealedSpacesGrid[row][col])
        if (revealedSpacesGrid[row][col] === 1) {
            return;
        }
        if (grid[row][col] === 0) {
            revealSurroundingZeroSpaces(row, col);
        }
        if (grid[row][col] === 'x') {
            gameOver();
            return
        }
        revealedSpacesGrid[row][col] = 1;
        let numberOfRevealedSpaces = 0;
        for (let i = 0; i < revealedSpacesGrid.length; i++) {
            for (let j = 0; j < revealedSpacesGrid[i].length; j++) {
                if (revealedSpacesGrid[i][j] === 1) {
                    numberOfRevealedSpaces += 1;
                }
            }
        } 

        console.log('2', revealedSpacesGrid[row][col])
        setNumberOfRevealedSpaces(numberOfRevealedSpaces)
        setRevealedSpacesGrid([...revealedSpacesGrid]);
        numberOfRevealedSpaces === (props.totalCols * props.totalRows - props.numberOfMines) && gameWon()
    }

    const revealSurroundingZeroSpaces = (y, x) => {

        let adjacentSpacesToReveal = [[y, x]]
        revealedSpacesGrid[y][x] = 1
        while (adjacentSpacesToReveal.length > 0) {
            let [y, x] = adjacentSpacesToReveal[0]
            // top left
            if (grid[y - 1]?.[x - 1] >= 0 && revealedSpacesGrid[y - 1]?.[x - 1] === 0) {
                revealedSpacesGrid[y - 1][x - 1] = 1;
                grid[y - 1]?.[x - 1] === 0 && adjacentSpacesToReveal.push([y - 1, x - 1])
            }
            // top
            if (grid[y - 1]?.[x] >= 0 && revealedSpacesGrid[y - 1]?.[x] === 0) {
                revealedSpacesGrid[y - 1][x] = 1;
                grid[y - 1]?.[x] === 0 && adjacentSpacesToReveal.push([y - 1, x])
            }
            // top right
            if (grid[y - 1]?.[x + 1] >= 0 && revealedSpacesGrid[y - 1]?.[x + 1] === 0) {
                revealedSpacesGrid[y - 1][x + 1] = 1;
                grid[y - 1]?.[x + 1] === 0 && adjacentSpacesToReveal.push([y - 1, x + 1])
            }
            // left
            if (grid[y]?.[x - 1] >= 0 && revealedSpacesGrid[y]?.[x - 1] === 0) {
                revealedSpacesGrid[y][x - 1] = 1;
                grid[y]?.[x - 1] === 0 && adjacentSpacesToReveal.push([y, x - 1])
            }
            // right
            if (grid[y]?.[x + 1] >= 0 && revealedSpacesGrid[y]?.[x + 1] === 0) {
                revealedSpacesGrid[y][x + 1] = 1;
                grid[y]?.[x + 1] === 0 && adjacentSpacesToReveal.push([y, x + 1])
            }
            // bottom left
            if (grid[y + 1]?.[x - 1] >= 0 && revealedSpacesGrid[y + 1]?.[x - 1] === 0) {
                revealedSpacesGrid[y + 1][x - 1] = 1;
                grid[y + 1]?.[x - 1] === 0 && adjacentSpacesToReveal.push([y + 1, x - 1])
            }
            // bottom
            if (grid[y + 1]?.[x] >= 0 && revealedSpacesGrid[y + 1]?.[x] === 0) {
                revealedSpacesGrid[y + 1][x] = 1;
                grid[y + 1]?.[x] === 0 && adjacentSpacesToReveal.push([y + 1, x])
            }
            // bottom right
            if (grid[y + 1]?.[x + 1] >= 0 && revealedSpacesGrid[y + 1]?.[x + 1] === 0) {
                revealedSpacesGrid[y + 1][x + 1] = 1;
                grid[y + 1]?.[x + 1] === 0 && adjacentSpacesToReveal.push([y + 1, x + 1])
            }
            adjacentSpacesToReveal.shift();
        }
    }

    const generateSpaceContent = (row, col) => {
        if(revealedSpacesGrid[row][col] === 0) {
            return '_'
        } else if(revealedSpacesGrid[row][col] === 1) {
            if(typeof grid[row][col] === 'number') {
                return grid[row][col]
            } else {
                return 'M'
            }
        } else if (revealedSpacesGrid[row][col] === 2) {
            return 'f'
        }
    }

    let map = [];`1`

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid.length; colIndex++) {
            map.push(
                <Space
                    style={styles.space}
                    id={colIndex + ',' + rowIndex}
                    spaceSize={props.spaceSize}
                    active={revealedSpacesGrid[rowIndex][colIndex] === 1 ? false : true}
                    handleLeftClick={() => handleLeftClick(event, rowIndex, colIndex)}
                    handleClick={() => handleSpaceClick(rowIndex, colIndex)}
                    spaceContent={generateSpaceContent(rowIndex, colIndex)}
                />
            )
        }
    }


    return (
        <div>
            {map}
        </div>
    )
})

export default MineSweeperMap