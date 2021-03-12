import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import styles from './welcome.module.css'

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 3,
        }
    }
}

const staggeredVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 3,
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 2,
        }
    }
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: {duration: 4}}
}

const Welcome = (props): JSX.Element => {

    const [showFirst, setShowFirst] = useState(true);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showFourth, setShowFourth] = useState(false);

    const [showedFirst, setShowedFirst] = useState(true);
    const [showedSecond, setShowedSecond] = useState(false);
    const [showedThird, setShowedThird] = useState(false);
    const [showedFourth, setShowedFourth] = useState(false);
    
    setTimeout(() => {
        setShowFirst(false);
        setTimeout(() => {
            setShowedSecond(true)
            setShowSecond(!showedSecond ? true : false)
            setTimeout(() => {
                setShowSecond(false)
                setTimeout(() => {
                    setShowedThird(true)
                    setShowThird(!showedThird ? true : false)
                }, 2800)
            }, 5000)
        }, 2800)
    }, 5000)

    return (
        <div className={styles.welcome}>
            <motion.div className={styles.welcomeContainer}
                variants={containerVariants}
                initial='hidden'
                animate='visible'
            >
                <AnimatePresence>
                    {
                        showFirst && (
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 3
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 3
                                    }
                                }}
                            >
                                <h2>Welcome!</h2>
                                <motion.div className={styles.container}
                                    variants={container}
                                    initial='hidden'
                                    animate='show'
                                >
                                    <motion.div variants={item}>Please</motion.div>
                                    <motion.div variants={item}>enjoy</motion.div>
                                    <motion.div variants={item}>your</motion.div>
                                    <motion.div variants={item}>stay</motion.div>
                                </motion.div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {
                        showSecond && (
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 3
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 3
                                    }
                                }}
                            >
                                <h2>Before we start...</h2>
                                <motion.div className={styles.container}
                                    variants={container}
                                    initial='hidden'
                                    animate='show'
                                >
                                    <motion.div variants={item}>Please tell me</motion.div>
                                    <motion.div variants={item}>a bit about</motion.div>
                                    <motion.div variants={item}>who you are?</motion.div>
                                </motion.div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {
                        showThird && (
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 3
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 3
                                    }
                                }}
                            >
                                <h2>Please Select One...</h2>
                                <motion.div className={styles.container}
                                    variants={container}
                                    initial='hidden'
                                    animate='show'
                                >
                                    <motion.div variants={item}><button className={styles.optionsBtn} onClick={props.exitFunction}>First Time Here</button></motion.div>
                                    <motion.div variants={item}><button className={styles.optionsBtn} onClick={props.exitFunction}>Prospective Client</button></motion.div>
                                    <motion.div variants={item}><button className={styles.optionsBtn} onClick={props.exitFunction}>Potential Employer</button></motion.div>
                                    <motion.div variants={item}><button className={styles.optionsBtn} onClick={props.exitFunction}>Just Take Me To The Home Page</button></motion.div>
                                </motion.div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.div>
        </div>
    )

}

export default Welcome