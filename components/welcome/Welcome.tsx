import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import styles from './welcome.module.css'

const Welcome = (): JSX.Element => {

    const [content, setContent] = useState(null);
    //let content: JSX.Element;

    const btn = () => {
        console.log('hello world')
    }

    // INVITATION
    const invitation = (
        <div className={styles.introduction}>
            <h3>Welcome</h3>
            <p>
                Thanks for visiting!
            </p>
            <p>
                If this is your first time here, please read through this brief tutorial.
            </p>
            <button onClick={() => setContent(introduction)}>Continue</button>
            <button>Skip Tutorial</button>
        </div>
    )

    // INTRODUCTION
    const introduction = (
        <div className={styles.introduction}>
            <h3>What Even IS This?!?</h3>
            <p>
                So what's the deal this website? What is the point?
            </p>
            <p>
                Well, there isn't one! The entire site is meant to be a showcase of my skills.
            </p>
            <p>
                So whether you're a prospective client, a potential employer, or a future collaborator, this mix-match of randomness has something for you! You might even have some fun...
            </p>
            <button>So How Exactly Do I Browse This Site Without Wasting My Precious Time?</button>
            <button>Skip Tutorial</button>
        </div>
    )

    
    useEffect(() => setContent(invitation), [])

    return (
        <div className={styles.welcome}>
            {content}
        </div>
    )

}

export default Welcome