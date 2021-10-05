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
        <div style={{ height: '7rem', width: '5.5rem', textAlign: 'center' }}>
            <motion.div
                whileTap={{ scale: 0.9 }}
            >
                <Button
                    variant="contained"
                    color="secondary"
                    style={{
                        color: currentlyClicked === label ? '#fff' : '#ddd',
                        backgroundColor: currentlyClicked === label ? color : '#bbb',
                        marginBottom: '1rem'
                    }}
                    className={styles.formatBtn}
                    value={label}
                    onClick={click}
                    onMouseEnter={() => setMouseOver(true)}
                    onMouseLeave={() => setMouseOver(false)}
                >
                    {icon}
                </Button>
            </motion.div>
            {currentlyClicked === label &&
                <div>
                    <span style={{
                        color: color,
                        fontWeight: 'bold',
                        position: 'relative',
                        top: '-0.5rem',
                        textShadow: '0px 0px 1.5px ' + color,
                    }}>
                        {label}
                    </span>
                </div>
            }
            {(mouseOver && !(currentlyClicked === label)) && <motion.div
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
                    textShadow: '0px 0px 1.5px ' + color,
                }}>
                    {label}
                </span>
            </motion.div>}
        </div>
    )
}

const ResumeGenerator = (props) => {

    const headerH3 = {

    }

    let viewHeight, viewWidth = 0;

    useEffect(() => {
        viewHeight = window.innerHeight;
        viewWidth = window.innerWidth;
        console.log(viewHeight, viewWidth);
        //const {viewHeight, viewWidth } = useWindowDimensions() 
    })

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
                props.setTechStuff(!props.techStuff)
                break;
            case 'clients':
                props.setClients(!props.clients)
                break;
            case 'problemSolving':
                props.setProblemSolving(!props.problemSolving)
                break;
            case 'programming':
                props.setProgramming(!props.programming)
                break;
            case 'creative':
                props.setCreative(!props.creative)
                break;
            case 'education':
                props.setEducation(!props.education)
                break;
            case 'interests':
                props.setInterests(!props.interests)
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

    let transitionDuration = 2.0

    const variants = {
        farLeft: {
            opacity: 0.1,
            x: -1400,
            scale: 0.1,
            transition: {
                duration: transitionDuration
            }
        },
        nearLeft: {
            opacity: 0.0,
            x: 0,
            scale: 0.4,
            transition: {
                duration: transitionDuration,
            }
        },
        center: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: transitionDuration,
                delay: 1.0
            }
        },
        nearRight: {
            opacity: 0.0,
            x: 0,
            scale: 0.4,
            transition: {
                duration: transitionDuration,

            }
        },
        farRight: {
            opacity: 0.1,
            x: 0,
            scale: 0.1,
            transition: {
                duration: transitionDuration
            }
        },
    }

    return (
        <div className={styles.resume}>
            <div>
                <h3 className={styles.headers}>What matters to you?</h3>
                <div className={styles.categories}>
                    <Button
                        variant="contained"
                        color='primary'
                        style={{
                            color: props.techStuff ? '#fff' : '#ddd',
                            backgroundColor: props.techStuff ? '#5dc66b' : '#bbb',
                            margin: '0.5rem 1rem'
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
                            color: props.clients ? '#fff' : '#ddd',
                            backgroundColor: props.clients ? '#aa134a' : '#bbb',
                            margin: '0.5rem 1rem'
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
                            color: props.problemSolving ? '#fff' : '#ddd',
                            backgroundColor: props.problemSolving ? '#aa134a' : '#bbb',
                            margin: '0.5rem 1rem'
                        }}
                        className={styles.categoriesBtn}
                        startIcon={<People />}
                        value='problemSolving'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Problem Solving
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            color: props.programming ? '#fff' : '#ddd',
                            backgroundColor: props.programming ? '#318c3d' : '#bbb',
                            margin: '0.5rem 1rem',
                            padding: '0.5rem',
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
                            color: props.creative ? '#fff' : '#ddd',
                            backgroundColor: props.creative ? '#0f93cc' : '#bbb',
                            margin: '0.5rem 1rem'
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
                            color: props.education ? '#fff' : '#ddd',
                            backgroundColor: props.education ? '#e8c111' : '#bbb',
                            margin: '0.5rem 1rem'
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
                            color: props.interests ? '#fff' : '#ddd',
                            backgroundColor: props.interests ? '#ee6120' : '#bbb',
                            margin: '0.5rem 1rem'
                        }}
                        className={styles.categoriesBtn}
                        startIcon={<Explore />}
                        value='interests'
                        onClick={(e) => categoriesButtonClick(e)}
                    >
                        Interests & Hobbies
                    </Button>
                </div>
            </div>

            <div>
                <h3 className={styles.headers}>How far back should we go?</h3>
                <div className={styles.timeframe}>
                    <Slider
                        defaultValue={0}
                        getAriaValueText={sliderValue}
                        aria-labelledby="discrete-slider-custom"
                        step={10}
                        marks={marks}
                        track="inverted"
                        onChange={(e, val) => props.setPeriod(val)}
                    />
                </div>
            </div>

            <div>
                <h3 className={styles.headers}>What format would you like?</h3>
                <div className={styles.formatBtns}>
                    {formatOptions.map(format =>
                        <FormatButton
                            label={format.label}
                            color={format.color}
                            click={() => props.setSelectedFormat(format.label)}
                            currentlyClicked={props.selectedFormat}
                            icon={format.icon}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResumeGenerator;