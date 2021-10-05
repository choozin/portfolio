import React, { useState, useEffect } from 'react';
import Link from 'next/link'
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
            setShowSecond(!showedSecond)
            setTimeout(() => {
                setShowSecond(false)
                setTimeout(() => {
                    setShowedThird(true)
                    setShowThird(true)
                }, 2800)
            }, 5000)
        }, 2800)
    }, 5000)

    const closeWelcome = () => {
        setShowWelcome(false)
        setTimeout(() => {
            window.location.href = '/portfolio'
        }, 3000)
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
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div style={{ display: 'flex', float: 'right', maxWidth: '90vw', fontSize: '4rem', fontWeight: 'bold', backgroundColor: 'none', padding: '0.75rem', marginBottom: '-1rem', borderRadius: '3rem', textShadow: '2px 2px 2px white, -2px 2px 2px white, 2px -2px 2px white, -2px -2px 2px white' }}>
                                            <span style={{ color: 'red', display: 'inline' }}>Code</span>
                                            <span style={{ color: 'white', textShadow: '2px 2px 2px black, -2px 2px 2px black, 2px -2px 2px black, -2px -2px 2px black', display: 'inline' }}>Works</span>
                                            <span style={{ color: 'red', display: 'inline' }}>Canada</span>
                                        </div>
                                        <div style={{ display: 'flex', float: 'right', maxWidth: '90vw', fontSize: '3rem', backgroundColor: 'none', paddingLeft: '3rem', marginBottom: '-1rem', borderRadius: '3rem' }}>
                                            <span style={{ color: 'gray', display: 'inline' }}>A.K.A. Cam Makes Stuff</span>
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
                                    <h2>So, why are you here?</h2>
                                    <motion.div className={styles.container}
                                        variants={container}
                                        initial='hidden'
                                        animate='show'
                                    >
                                        <motion.div variants={item}>Let's get you</motion.div>
                                        <motion.div variants={item}>pointed in the</motion.div>
                                        <motion.div variants={item}>right direction...</motion.div>
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
                                    <h2>Where would you like to start?</h2>
                                    <motion.div className={styles.container}
                                        variants={container}
                                        initial='hidden'
                                        animate='show'
                                    >
                                        <motion.div
                                            variants={item}
                                            whileTap='tap'
                                            whileHover='hover'
                                        >
                                            <Link href='/portfolio'>
                                                <button className={styles.btn} onClick={props.exitFunction}>
                                                    Take the Introduction/Tutorial<br/>(Recommended)
                                                </button>
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            variants={item}
                                            whileTap='tap'
                                            whileHover='hover'
                                        >
                                            <Link href='/portfolio'>
                                                <button className={styles.btn} onClick={props.exitFunction}>
                                                    Check Out Some Projects
                                                </button>
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            variants={item}
                                            whileTap='tap'
                                            whileHover='hover'
                                        >
                                            <Link href='/portfolio'>
                                                <button className={styles.btn} onClick={props.exitFunction}>
                                                    Browse Cam's Virtual Resume
                                                </button>
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            variants={item}
                                            whileTap='tap'
                                            whileHover='hover'
                                        >
                                            <Link href='/contact'>
                                                <button className={styles.btn} onClick={props.exitFunction}>
                                                    Send Cam a Message
                                                </button>
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            variants={item}
                                            whileTap='tap'
                                            whileHover='hover'
                                        >
                                            <Link href='/portfolio'>
                                                <button className={styles.btn} onClick={props.exitFunction}>
                                                    Take Me To The Main Menu
                                                </button>
                                            </Link>
                                        </motion.div>
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