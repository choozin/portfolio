import React, { useState, useRef, useImperativeHandle } from 'react';

import styles from './minesweeper.module.css'

import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'

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
    const [size, setSize] = useState(50)
    const [displayBoard, setDisplayBoard] = useState(false)
    const [displayInstructions, setDisplayInstructions] = useState(false)
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
                <div className={styles.header}>
                    <h2>++Virus_Sweeper++</h2>
                    <span>Attack of the RetroVirus</span>
                </div>
                {displayInstructions && <div className={styles.helpModal}>
                    <p>Welcome to VirusSweeper! A remake of Microsoft's MineSweeper</p>
                    <p>
                        In this game your job is to find and isolate every single virus on a memory card, which is comprised of a grid of 'memory blocks'.
                        Each memory card will have a different number of memory blocks and bugs, depending on which difficulty level and card size you choose to clean.
                </p>
                    <p>
                        Viruses need to be isolated in order to stop them from infecting the rest of the card, which could go on to infect the rest of the computer, and then... maybe even the entire internet. Oh my.
                </p>
                    <p>You'd better find and isolate every single virus!</p>
                    <p>
                        To isolate a virus, you will need to right-click (or tap AND hold, for those on mobile devices) the memory block that you believe is hiding a virus.
                        But how can you tell which memory blocks might contain viruses?
                </p>
                    <p>
                        Every memory block begins red. This red colour indicates that a given memory block is at risk of containing a virus.
                        Luckily, you've got the most advanced, cutting edge anti-virus software built right into your mouse click. Simply left-clicking (or a single quick tap if you're using a mobile device) on a memory block will run the anti-virus software.
                        The anti-virus software will verify that any memory block you click on is clean and virus free, turning the memory block from red to green.
                </p>
                    <p>Once a block is green, you can rest assured it's clean.</p>
                    <p>
                        But that's not all! If you run the anti-virus software on a memory block that isn't infected, it will then go on to check EVERY SINGLE MEMORY BLOCK surrounding itself -
                        not only those above, below and beside, but also those that are immediately diagonal from the memory block as well!
                </p>
                    <p>
                        The anti-virus software will repeat this process and expand it's reach until it reaches a potential virus.
                        Rather than continuing to scan (and potentially unleashing the virus), the anti-virus program will then stop and display the number of infected memory blocks it is currently adjacent to.
                        So, for example, if after running the software you see a memory block that has a "2" in it, that means that block is currently touching 2 infected blocks.
                </p>
                    <p>
                        However, BEWARE!!! If you run the anti-virus software (by left-clicking) on a memory block that contains a virus, you'll infect the whole computer... and, as mentioned before, probably the whole world. Great job.
                </p>
                    <p>
                        For this reason, you'll need to use a combination of the anti-virus software (the left-click/tap) and your isolation ability (right-click/tap and hold) to identify and properly isolate each virus on the card. Once you've isolated every single virus, you win!
                </p>
                </div>}
                {displayInstructions ? <button
                    onClick={() => setDisplayInstructions(false)}
                    className={styles.instructionsBtn}
                >Hide Instructions</button> :
                    <button
                        onClick={() => setDisplayInstructions(true)}
                        className={styles.instructionsBtn}
                    >Show Instructions</button>
                }
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
                                    <span>Difficulty: {difficulty}%</span>
                                    <span>Card Size: {numberOfCols} x {numberOfRows}</span>
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