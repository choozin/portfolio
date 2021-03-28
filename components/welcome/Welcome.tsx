import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import styles from './welcome.module.css'

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
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
    show: { opacity: 1, transition: { duration: 4 } },
    tap: {
        scale: 0.9
    },
    hover: {
        scale: 1.2
    }
}

const Welcome = (props): JSX.Element => {

    const [showWelcome, setShowWelcome] = useState(true)

    const [showFirst, setShowFirst] = useState(true);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);

    const [showedFirst, setShowedFirst] = useState(true);
    const [showedSecond, setShowedSecond] = useState(false);
    const [showedThird, setShowedThird] = useState(false);

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

    const closeWelcome = () => {
        setShowWelcome(false)
    }

    return (
        <AnimatePresence> {showWelcome &&
            <motion.div className={styles.welcome}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 3
                    }
                }}>
                <div className={styles.fixedStaticArea}>
                    <button onClick={() => closeWelcome()}>Skip</button>
                </div>

                <motion.div className={styles.welcomeContainer}
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <AnimatePresence>
                        {
                            showFirst && (
                                <>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
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
                                        className={styles.topLeft}
                                    >
                                        <p>Welcome to...</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: -1400,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
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
                                        className={styles.bottomRight}
                                    >
                                        <div style={{display: 'flex', float: 'right', maxWidth: '90vw', fontSize: '4rem', fontWeight: 'bold', backgroundColor: 'none', padding: '0.75rem', marginBottom: '-1rem', borderRadius: '3rem', textShadow: '2px 2px 2px white, -2px 2px 2px white, 2px -2px 2px white, -2px -2px 2px white'}}>
                                            <span style={{color: 'red', display: 'inline'}}>Code</span>
                                            <span style={{color: 'white', textShadow: '2px 2px 2px black, -2px 2px 2px black, 2px -2px 2px black, -2px -2px 2px black', display: 'inline'}}>Works</span>
                                            <span style={{color: 'red', display: 'inline'}}>Canada</span>
                                        </div>
                                    </motion.div>
                                </>
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
                                        <motion.div variants={item} whileTap='tap' whileHover='hover'><button className={styles.optionsBtn} onClick={props.exitFunction}>First Time Here</button></motion.div>
                                        <motion.div variants={item} whileTap='tap' whileHover='hover'><button className={styles.optionsBtn} onClick={props.exitFunction}>Prospective Client</button></motion.div>
                                        <motion.div variants={item} whileTap='tap' whileHover='hover'><button className={styles.optionsBtn} onClick={props.exitFunction}>Potential Employer</button></motion.div>
                                        <motion.div variants={item} whileTap='tap' whileHover='hover'><button className={styles.optionsBtn} onClick={props.exitFunction}>Just Take Me To The Home Page</button></motion.div>
                                    </motion.div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        } </AnimatePresence>
    )

}

export default Welcome