import React, { useState, useRef } from 'react';

import styles from './minesweeper.module.css'
import MineSweeperMap from './MineSweeperMap';

const MineSweeperWindow = () => {

    const mapRef = useRef()

    const [totalMines, setTotalMines] = useState(10)
    const [flagsPlanted, setFlagsPlanted] = useState(0)
    const [numberOfRows, setNumberOfRows] = useState(10)
    const [numberOfCols, setNumberOfCols] = useState(10)

    return (
        <div className={styles.window}>
            <div className={styles.header}>
                <span>MineSweeper</span>
                <div className={styles.xBtn}>
                    x
                </div>
            </div>
            <div className={styles.menu}>
                <button className={styles.menuBtn}>
                    New Game
                </button>
                <button className={styles.menuBtn}>
                    Restart
                </button>
                <button className={styles.menuBtn}>
                    Solve
                </button>
            </div>
            <div className={styles.advancedMenu}>
                <div>
                    <span>Flags: </span><span>{flagsPlanted}</span>
                    <span>Mines: </span><span>{(totalMines - flagsPlanted)}</span>
                </div>
            </div>
            <div className={styles.gameMap}>
                <MineSweeperMap 
                    ref={mapRef}
                    totalMines={totalMines}
                    flagsPlanted={flagsPlanted}
                    setFlagsPlanted={setFlagsPlanted}
                    numberOfRows={numberOfRows}
                    numberOfCols={numberOfCols}
                />
            </div>
        </div>
    )
}

export default MineSweeperWindow