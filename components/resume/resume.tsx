import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion';

import styles from './resume.module.css'

import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider'
import { Code, School, People, Explore, Mouse, Palette, BubbleChart, Assignment, MenuBook, TextFormat } from '@material-ui/icons';

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

    const [infographic, setInfographic] = useState(true);
    const [storybook, setStorybook] = useState(true);
    const [oleStandard, setOleStandard] = useState(true);
    const [plainText, setPlainText] = useState(true);
    const [binary, setBinary] = useState(true);


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
                break;
            case 'clients':
                setClients(!clients)
                break;
            case 'programming':
                setProgramming(!programming)
                break;
            case 'creative':
                setCreative(!creative)
                break;
            case 'education':
                setEducation(!education)
                break;
            case 'interests':
                setInterests(!interests)
                break;
        }
    }

    const formatButtonClick = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        switch (e.currentTarget.value) {
            case 'infographic':
                setInfographic(!infographic)
                break;
            case 'storybook':
                setStorybook(!storybook)
                break;
            case 'oleStandard':
                setOleStandard(!oleStandard)
                break;
            case 'plainText':
                setPlainText(!plainText)
                break;
            case 'binary':
                setBinary(!binary)
                break;
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
                        style={{
                            color: techStuff ? '#fff' : '#ddd',
                            backgroundColor: techStuff ? '#5dc66b' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.categoriesBtn}
                        startIcon={<Mouse />}
                        value='techStuff'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Tech Stuff
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: clients ? '#fff' : '#ddd',
                            backgroundColor: clients ? '#aa134a' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.categoriesBtn}
                        startIcon={<People />}
                        value='clients'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Clients & Customers
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: programming ? '#fff' : '#ddd',
                            backgroundColor: programming ? '#318c3d' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.categoriesBtn}
                        startIcon={<Code />}
                        value='programming'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Programming & Development
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: creative ? '#fff' : '#ddd',
                            backgroundColor: creative ? '#0f93cc' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.categoriesBtn}
                        startIcon={<Palette />}
                        value='creative'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Creative
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: education ? '#fff' : '#ddd',
                            backgroundColor: education ? '#e8c111' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.categoriesBtn}
                        startIcon={<School />}
                        value='education'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Training & Education
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: interests ? '#fff' : '#ddd',
                            backgroundColor: interests ? '#ee6120' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.categoriesBtn}
                        startIcon={<Explore />}
                        value='interests'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Interests & Passions
                    </Button>
                </motion.div>

                <motion.div className={styles.sort}
                    animate={{

                    }}
                >
                    <h3>What format would you like?</h3>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: infographic ? '#fff' : '#ddd',
                            backgroundColor: infographic ? '#ee6120' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.formatBtn}
                        value='infographic'
                        onClick={(e) => formatButtonClick(e)}
                    >
                        <BubbleChart />
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: storybook ? '#fff' : '#ddd',
                            backgroundColor: storybook ? '#ee6120' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.formatBtn}
                        value='storybook'
                        onClick={(e) => formatButtonClick(e)}
                    >
                        <MenuBook />
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: oleStandard ? '#fff' : '#ddd',
                            backgroundColor: oleStandard ? '#ee6120' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.formatBtn}
                        value='oleStandard'
                        onClick={(e) => formatButtonClick(e)}
                    >
                        <Assignment />
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: plainText ? '#fff' : '#ddd',
                            backgroundColor: plainText ? '#ee6120' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.formatBtn}
                        value='plainText'
                        onClick={(e) => formatButtonClick(e)}
                    >
                        <TextFormat />
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: binary ? '#fff' : '#ddd',
                            backgroundColor: binary ? '#ee6120' : '#bbb',
                            margin: '1rem'
                        }}
                        className={styles.formatBtn}
                        value='binary'
                        onClick={(e) => formatButtonClick(e)}
                    >
                        <Explore />
                    </Button>
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