import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './welcome.module.css'
import Image from 'next/image'

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

const Welcome = (props) => {

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
            setShowSecond(true)
        }, 2000)
    }, 3000)

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
                        duration: 2
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
                                                duration: 2
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: {
                                                duration: 2
                                            }
                                        }}
                                        className={styles.centered}
                                    >
                                        <Image src='/images/cammakesstuff.png'
                                            alt='Cam Makes Stuff Logo'
                                            width='540px'
                                            height='540px'
                                        />
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
                                            duration: 2
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            duration: 2
                                        }
                                    }}
                                >
                                    <h2>Where to, Pal?🚀</h2>
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
                                                <button className={styles.specialBtn} onClick={props.exitFunction}>
                                                    Take the Introduction/Tutorial<br />(Recommended)
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