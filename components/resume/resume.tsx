import React from 'react'

import { motion } from 'framer-motion';

import styles from './resume.module.css'

const Resume = () => {

    const headerH3 = {

    }

    const viewWidth = document.Window.innerWidth;

    return (
        <div className={styles.resume}>
            <motion.div className={styles.header}>
                <motion.h3
                    initial={{
                        x: viewWidth,
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
                </motion.h3>
                <motion.span
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 100,
                        transition: {
                            delay:  1,
                            duration: 10.0
                        }
                    }}
                >
                    We're not here to waste time.
                <br />Please use the control panel below to generate a resume that's relevant for you!
            </motion.span>
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