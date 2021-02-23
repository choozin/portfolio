import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion';

import styles from './resume.module.css'

import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider'
import { Code, School, People, Explore, Mouse, Palette, BubbleChart, Assignment, MenuBook, TextFormat, PictureAsPdf } from '@material-ui/icons';

import useWindowDimensions from '../hooks/useWindowDimensions'

const FormatButton = ({ label, color, click, currentlyClicked, icon }) => {

    const [mouseOver, setMouseOver] = useState(false)

    return (
        <div style={{ height: '7rem' }}>
            <Button
                variant="contained"
                color="secondary"
                style={{
                    color: currentlyClicked === label ? '#fff' : '#ddd',
                    backgroundColor: currentlyClicked === label ? color : '#bbb',
                    margin: '1rem'
                }}
                className={styles.formatBtn}
                value={label}
                onClick={click}
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
            >
                {icon}
            </Button>
            {mouseOver && <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 100,
                    transition: {
                        duration: 7.0
                    },
                }}
            >
                <span style={{
                    color: color,
                    fontWeight: 'bold',
                    position: 'relative',
                    top: '-0.5rem',
                    textShadow: '0px 0px 1.5px '+color,
                }}>
                    {label}
                </span>
            </motion.div>}
        </div>
    )
}

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

    const [selectedFormat, setSelectedFormat] = useState('Infographic')

    const updateSelectedFormat = (value) => {

    }


    const marks = [
        {
            value: 0,
            label: `High School`,
        },
        {
            value: 30,
            label: 'University',
        },
        {
            value: 60,
            label: 'College',
        },
        {
            value: 100,
            label: 'Present',
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

    const formatFontSize = '3rem'
    const formatOptions = [
        {
            label: 'Infographic',
            color: '#d48',
            icon: <BubbleChart style={{ fontSize: formatFontSize }} />,
        },
        {
            label: 'Storybook',
            color: '#d0d',
            icon: <MenuBook style={{ fontSize: formatFontSize }} />,
        },
        {
            label: 'Ole Standard',
            color: '#40d',
            icon: <Assignment style={{ fontSize: formatFontSize }} />,
        },
        {
            label: 'Plain Text',
            color: '#d80',
            icon: <TextFormat style={{ fontSize: formatFontSize }} />,
        },
        {
            label: 'PDF',
            color: '#d00',
            icon: <PictureAsPdf style={{ fontSize: formatFontSize }} />,
        },
    ]

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
                    Please use the control panel below to generate a resume that's relevant for you!
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
                            step={10}
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

                <motion.div className={styles.format}
                    animate={{

                    }}
                >
                    <h3>What format would you like?</h3>
                    <div className={styles.formatBtns}>
                        {formatOptions.map(format =>
                            <FormatButton
                                label={format.label}
                                color={format.color}
                                click={() => setSelectedFormat(format.label)}
                                currentlyClicked={selectedFormat}
                                icon={format.icon}
                            />
                        )}
                    </div>
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