import React, { useState } from 'react';

import styles from './minesweeper.module.css'
import Slider from '@material-ui/core/Slider'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'

const AdvancedMenu = (props) => {

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

    return (
        <>
            <div className={styles.advancedMenu}>
                <h4>Select Your Skill Level</h4>
                <ThemeProvider theme={difficultyTheme}>
                    <Slider
                        step={33}
                        marks={difficultyMarks}
                        value={props.difficulty}
                        onChange={props.handleDifficultyChange}
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
                        value={props.size}
                        onChange={props.handleSizeChange}
                    />
                </ThemeProvider>
                <div className={styles.sliderLabels}>
                    <span>Kilo</span>
                    <span>Mega</span>
                    <span>Giga</span>
                </div>
                <button
                    className={styles.createGameBtn}
                    onClick={() => { props.setDisplayBoard(true), props.scrollToTop }}>
                    Create Game
            </button>
            </div>
        </>
    )
}

export default AdvancedMenu