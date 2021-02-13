import React, { useState, useRef, useImperativeHandle } from 'react';

import styles from './minesweeper.module.css'

import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'

import MineSweeperMap from './MineSweeperMap';

const MineSweeperWindow = () => {

    const mapRef = useRef()

    const [totalMines, setTotalMines] = useState(10)
    let [flagsPlanted, setFlagsPlanted] = useState(0)
    const [numberOfRows, setNumberOfRows] = useState(10)
    const [numberOfCols, setNumberOfCols] = useState(10)
    const [spaceCSSSize, setSpaceCSSSize] = useState(3)
    const [mapCSSSize, setMapCSSSize] = useState(30)
    const [difficulty, setDifficulty] = useState(33)
    const [size, setSize] = useState(50)
    const [displayBoard, setDisplayBoard] = useState(false)
    const [startGame, setStartGame] = useState(false)

    const handleDifficultyChange = (e, value) => {
        setDifficulty(value)
        handleMapChange()
    }

    const handleSizeChange = (e, value) => {
        setSize(value)
        handleMapChange()
    }

    const handleMapChange = () => {
        if (size > 70) {
            setNumberOfRows(20)
            setNumberOfCols(20)
            setSpaceCSSSize(1.5)
            setMapCSSSize(30)
            if (difficulty > 70) {
                setTotalMines(100)
            } else if (difficulty > 40) {
                setTotalMines(64)
            } else if (difficulty > 10) {
                setTotalMines(40)
            } else {
                setTotalMines(25)
            }
        } else if (size > 30) {
            setNumberOfRows(10)
            setNumberOfCols(10)
            setSpaceCSSSize(3)
            setMapCSSSize(30)
            if (difficulty > 70) {
                setTotalMines(25)
            } else if (difficulty > 40) {
                setTotalMines(20)
            } else if (difficulty > 10) {
                setTotalMines(10)
            } else {
                setTotalMines(5)
            }
        } else {
            setNumberOfRows(5)
            setNumberOfCols(5)
            setSpaceCSSSize(6)
            setMapCSSSize(30)
            if (difficulty > 70) {
                setTotalMines(7)
            } else if (difficulty > 40) {
                setTotalMines(5)
            } else if (difficulty > 10) {
                setTotalMines(4)
            } else {
                setTotalMines(3)
            }
        }

    }

    const difficultyMarks = [
        { value: 0, label: 'Easy' },
        { value: 33, label: 'Normal' },
        { value: 66, label: 'Hard' },
        { value: 99, label: 'Expert' },
    ]

    const sizeMarks = [
        { value: 0, label: 'Small' },
        { value: 50, label: 'Medium' },
        { value: 100, label: 'Large' },
    ]

    const opacity = startGame ? 'block' : 'none';

    return (
        <div 
            className={styles.window}
            style={{ width: mapCSSSize + 'rem', height: mapCSSSize + 'rem' }}>
            { !displayBoard ? <>
                <div className={styles.header}>
                    <span>MineSweeper</span>
                    <div className={styles.xBtn}>
                        x
                    </div>
                </div>
                <div className={styles.menu}>
                    <button
                        className={styles.menuBtn}
                        onClick={() => { setDisplayBoard(true)}}>
                        Create Game
                    </button>
                    <Slider step={33} marks={difficultyMarks} value={difficulty} onChange={handleDifficultyChange} />
                    <Slider step={50} marks={sizeMarks} value={size} onChange={handleSizeChange} />

                </div>
            </>
            : <>
                <div style={{display: opacity }}>
                    <div /*style={{ display: {...startGame[0] ? 'block' : 'hidden'} }}*/ className={styles.advancedMenu}>
                        <div>
                            <span>Flags: </span><span>{flagsPlanted}</span>
                            <span>Mines: </span><span>{totalMines}</span>
                        </div>
                        <button
                            className={styles.menuBtn}
                            onClick={() => mapRef.current.newGame()}>
                            New Game
                        </button>
                        <button
                            className={styles.menuBtn}
                            onClick={() => mapRef.current.restartGame()}>
                            Restart
                        </button>
                        <button
                            className={styles.menuBtn}
                            onClick={() => mapRef.current.solveGame()}>
                            Solve
                        </button>
                        <button
                            className={styles.menuBtn}
                            onClick={() => {setDisplayBoard(false), setStartGame(false)}}>
                            Back to Settings
                        </button>
                    </div>
                    <div className={styles.gameMap}>
                        <MineSweeperMap
                            ref={mapRef}
                            totalMines={totalMines}
                            flagsPlanted={flagsPlanted}
                            setFlagsPlanted={setFlagsPlanted}
                            numberOfRows={numberOfRows}
                            numberOfCols={numberOfCols}
                            spaceSize={spaceCSSSize}
                        />
                    </div> 
                </div>
                {startGame ? null : 
                <button
                    //style={{ display: {...startGame[0] ? 'none' : 'block'} }}
                    className={styles.menuBtn}
                    onClick={() => {mapRef.current.newGame(), setStartGame(true)}}>
                    Begin
                </button>
                }
            </>
            }
        </div>
    )
}

export default MineSweeperWindow