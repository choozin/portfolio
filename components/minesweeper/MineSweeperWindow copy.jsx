import React, { useState, useRef, useImperativeHandle } from 'react';

import styles from './minesweeper.module.css'

import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'

import Header from './Header';
import MineSweeperMap from './MineSweeperMap';

const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const MineSweeperWindow = () => {

    const mapRef = useRef()

    const [totalMines, setTotalMines] = useState(10)
    let [flagsPlanted, setFlagsPlanted] = useState(0)
    const [numberOfRows, setNumberOfRows] = useState(10)
    const [numberOfCols, setNumberOfCols] = useState(10)
    const [spaceCSSSize, setSpaceCSSSize] = useState(3)
    const [mapCSSSize, setMapCSSSize] = useState(30)
    const [difficulty, setDifficulty] = useState(33)
    const [difficultyLabel, setDifficultyLabel] = useState('user')
    const [size, setSize] = useState(50)
    const [displayBoard, setDisplayBoard] = useState(false)
    const [startGame, setStartGame] = useState(false)

    const handleDifficultyChange = (e, value) => {
        setDifficulty(value)

        switch (value) {
            case 0:
                setDifficultyLabel('n00b')
                break;
            case 33:
                setDifficultyLabel('user')
                break;
            case 66:
                setDifficultyLabel('1337')
                break;
            case 100:
                setDifficultyLabel('h4x0r')
                break;
        }

        handleMapChange()
    }

    const handleSizeChange = (e, value) => {
        setSize(value)
        handleMapChange()
    }

    const handleMapChange = () => {
        if (size > 75) {
            setNumberOfRows(20)
            setNumberOfCols(20)
            setSpaceCSSSize(2.7)
            setMapCSSSize(54)
            if (difficulty > 83) {
                setTotalMines(80)
            } else if (difficulty > 50) {
                setTotalMines(60)
            } else if (difficulty > 17) {
                setTotalMines(40)
            } else {
                setTotalMines(20)
            }
        } else if (size > 25) {
            setNumberOfRows(10)
            setNumberOfCols(10)
            setSpaceCSSSize(3)
            setMapCSSSize(30)
            if (difficulty > 83) {
                setTotalMines(20)
            } else if (difficulty > 50) {
                setTotalMines(15)
            } else if (difficulty > 17) {
                setTotalMines(10)
            } else {
                setTotalMines(5)
            }
        } else {
            setNumberOfRows(5)
            setNumberOfCols(5)
            setSpaceCSSSize(6)
            setMapCSSSize(30)
            if (difficulty > 83) {
                setTotalMines(7)
            } else if (difficulty > 50) {
                setTotalMines(6)
            } else if (difficulty > 17) {
                setTotalMines(5)
            } else {
                setTotalMines(3)
            }
        }

    }

    const difficultyMarks = [
        { value: 0 },
        { value: 33 },
        { value: 66 },
        { value: 99 },
    ]

    const sizeMarks = [
        { value: 0 },
        { value: 50 },
        { value: 100 },
    ]

    const opacity = startGame ? 'block' : 'none';

    const difficultyTheme = createMuiTheme({
        overrides: {
            MuiSlider: {
                thumb: {
                    color: '#8F8',
                    height: '2.7rem',
                    width: '2.7rem',
                    marginTop: '0rem',
                    marginLeft: '-1.3rem',
                    borderRadius: '2rem'
                },
                track: {
                    color: '#484',
                    height: '2.7rem',
                },
                rail: {
                    color: '#080',
                    height: '2.7rem',
                },
            }
        }
    })

    const sizeTheme = createMuiTheme({
        overrides: {
            MuiSlider: {
                thumb: {
                    color: '#8F8',
                    height: '2.7rem',
                    width: '2.7rem',
                    marginTop: '0rem',
                    marginLeft: '-1.3rem',
                    borderRadius: '2rem'
                },
                track: {
                    color: '#484',
                    height: '2.7rem',
                },
                rail: {
                    color: '#080',
                    height: '2.7rem',
                },
            }
        }
    })

    return (
        <>
            <div
                className={styles.window}
            >
                <Header/>
                {!displayBoard ? <>
                    <div className={styles.advancedMenu}>
                        <h4>Select Your Skill Level</h4>
                        <ThemeProvider theme={difficultyTheme}>
                            <Slider
                                step={33}
                                marks={difficultyMarks}
                                value={difficulty}
                                onChange={handleDifficultyChange}
                            />
                        </ThemeProvider>
                        <div className={styles.sliderLabels}>
                            <span>n00b</span>
                            <span>User</span>
                            <span>1337</span>
                            <span>h4x0r</span>
                        </div>
                        <h4>Select Your Card Size</h4>
                        <ThemeProvider theme={sizeTheme}>
                            <Slider
                                step={50}
                                marks={sizeMarks}
                                value={size}
                                onChange={handleSizeChange}
                            />
                        </ThemeProvider>
                        <div className={styles.sliderLabels}>
                            <span>Kilo</span>
                            <span>Mega</span>
                            <span>Giga</span>
                        </div>
                        <button
                            className={styles.createGameBtn}
                            onClick={() => { setDisplayBoard(true), scrollToTop() }}>
                            Create Game
                    </button>
                    </div>
                </>
                    : <>
                        <div style={{ display: opacity }}>
                            <div className={styles.advancedMenu}>
                                <div>
                                    <span>Flags: </span><span>{flagsPlanted}</span>
                                    <span>Mines: </span><span>{totalMines}</span>
                                </div>
                                <button
                                    className={styles.newGameBtn}
                                    onClick={() => mapRef.current.newGame()}>
                                    New Game
                                </button>
                                <button
                                    className={styles.restartBtn}
                                    onClick={() => mapRef.current.restartGame()}>
                                    Restart
                                </button>
                                <button
                                    className={styles.solveBtn}
                                    onClick={() => mapRef.current.solveGame()}>
                                    Solve
                                </button>
                                <button
                                    className={styles.settingsBtn}
                                    onClick={() => { setDisplayBoard(false), setStartGame(false), scrollToTop() }}>
                                    Back to Game Setup
                                </button>
                            </div>
                            <div className={styles.gameMap}
                                style={{ width: mapCSSSize + 'rem', height: mapCSSSize + 'rem' }}>
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
                            <>
                                <button
                                    className={styles.settingsBtn}
                                    onClick={() => { setDisplayBoard(false), setStartGame(false) }}
                                >
                                    Back to Game Setup
                                </button>
                                <div className={styles.preview}>
                                    <span>Difficulty: {difficultyLabel}</span>
                                    <span>Viruses on Card: {totalMines}</span>
                                    <span>Card Size: {numberOfCols} x {numberOfRows}</span>
                                    <span>Starting Virus Coverage: {totalMines / numberOfCols * numberOfRows}%</span>
                                </div>
                                <button
                                    //style={{ display: {...startGame[0] ? 'none' : 'block'} }}
                                    className={styles.beginBtn}
                                    onClick={() => { mapRef.current.newGame(), setStartGame(true) }}
                                >
                                    Begin
                                </button>
                            </>
                        }
                    </>
                }
            </div>
            <div className={styles.extendedBottom} />
        </>
    )
}

export default MineSweeperWindow