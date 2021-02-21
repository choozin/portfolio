import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion';

import styles from './resume.module.css'

import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider'
import { Code, School, People, Explore, Mouse, Palette } from '@material-ui/icons';

import useWindowDimensions from '../hooks/useWindowDimensions'

const Resume = () => {

    const headerH3 = {

    }

    let viewHeight, viewWidth = 0;

    useEffect(() => {
        viewHeight = window.innerHeight;
        viewWidth = window.innerWidth;
        console.log(viewHeight, viewWidth);
        //const {viewHeight, viewWidth } = useWindowDimensions() 
    })

    const [techStuff, setTechStuff] = useState(true);
    const [clients, setClients] = useState(true);
    const [programming, setProgramming] = useState(true);
    const [creative, setCreative] = useState(true);
    const [education, setEducation] = useState(true);
    const [interests, setInterests] = useState(true);


    const marks = [
        {
            value: 0,
            label: 'Teen Years',
        },
        {
            value: 40,
            label: `Early 20's`,
        },
        {
            value: 75,
            label: 'Yesteryear',
        },
        {
            value: 100,
            label: 'This Very Moment',
        },
    ];

    const sliderValue = (value) => {
        return `${value}val`;
    }

    const categoriesButtonClick = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        switch (e.currentTarget.value) {
            case 'techStuff':
                setTechStuff(!techStuff)
        }
    }

    return (
        <div className={styles.resume}>
            <motion.div className={styles.header}>
                <motion.h2
                    initial={{
                        x: 1000,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 100,
                        transition: {
                            duration: 1.0
                        },
                    }}
                >
                    Welcome to my Resume
                </motion.h2>
                <motion.span
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 100,
                        transition: {
                            delay: 1,
                            duration: 10.0
                        }
                    }}
                >
                    We're not here to waste time.
                    <br />Please use the control panel below to generate a resume that's relevant for you!
                </motion.span>
            </motion.div>

            <motion.div className={styles.controlPanel}
                animate={{

                }}
            >

                <motion.div className={styles.timeframe}
                    animate={{

                    }}
                >
                    <h3>How far back should we go?</h3>
                    <div>
                        <Slider
                            defaultValue={40}
                            getAriaValueText={sliderValue}
                            aria-labelledby="discrete-slider-custom"
                            step={5}
                            marks={marks}
                        />
                    </div>
                </motion.div>

                <motion.div className={styles.categories}
                    animate={{

                    }}
                >
                    <h3>What matters to you?</h3>
                    <Button
                        variant="contained"
                        color='primary'
                        style={{backgroundColor: '#5dc66b', margin: '1rem'}}
                        className={styles.categoriesBtn}
                        startIcon={<Mouse />}
                        disabled={!techStuff}
                        value='techStuff'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Tech Stuff
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{backgroundColor: '#aa134a', margin: '1rem'}}
                        className={styles.categoriesBtn}
                        startIcon={<People />}
                        disabled={!clients}
                        value='clients'
                    >
                        Clients & Customers
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{backgroundColor: '#318c3d', margin: '1rem'}}
                        className={styles.categoriesBtn}
                        startIcon={<Code />}
                        disabled={!programming}
                        value='programming'
                    >
                        Programming & Development
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{backgroundColor: '#0f93cc', margin: '1rem'}}
                        className={styles.categoriesBtn}
                        startIcon={<Palette />}
                        disabled={!creative}
                        value='creative'
                    >
                        Creative
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{backgroundColor: '#e8c111', margin: '1rem'}}
                        className={styles.categoriesBtn}
                        startIcon={<School />}
                        disabled={!education}
                        value='education'
                    >
                        Training & Education
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{backgroundColor: '#ee6120', margin: '1rem'}}
                        className={styles.categoriesBtn}
                        startIcon={<Explore />}
                        disabled={!interests}
                        value='interests'
                    >
                        Interests & Passions
                    </Button>
                </motion.div>

                <motion.div className={styles.sort}
                    animate={{

                    }}
                >
                    <h3>What format would you like?</h3>
                    <button>
                        Infographic
                    </button>
                    <button>
                        Storybook
                    </button>
                    <button>
                        Ole Standard
                    </button>
                    <button>
                        Plain Text
                    </button>
                </motion.div>
            </motion.div>

            <motion.div className={styles.content}
                animate={{

                }}
            >
                <motion.p
                    animate={{

                    }}
                >
                    Content
                </motion.p>
            </motion.div>
        </div>
    )
}

export default Resume;