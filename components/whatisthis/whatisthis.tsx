import { useState, useEffect, useContext, Component } from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FullscreenExitTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    WITBtn: {
        color: 'red',
        fontWeight: 'bold',
    },
    root: {
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
        zIndex: 1,
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    openModalBtn: {
        color: 'red',
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        border: 'solid 0.5rem black',
        borderRadius: '1rem',
        backgroundColor: 'white',
        padding: '1rem',
        zIndex: 2,
        minWidth: '15rem',
        maxWidth: '38rem',
        minHeight: '10rem',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3rem auto 6rem',
    },
    title: {
        flexGrow: 1,
        color: 'red',
    },
    description: {

    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    urlBtn: {

    },
    closeBtn: {

    }
}));

const WhatIsThisBtn = ({ text, topic }) => {

    const classes = useStyles();

    // lookups array should contain strings that match the part of the text
    // to be made into a lookup component, including any punctuation
    const topics = [
        {
            topic: 'error',
            title: 'GOING ON!?!',
            description: `
                A problem has occured with my WhatIsThis? Button
            `,
            url: 'http://google.com',
            imagePath: 'https://spng.subpng.com/20180604/iqs/kisspng-react-javascript-angularjs-ionic-atom-5b154be64e7965.3537065815281223423214.jpg',
            lookups: [
                {
                    label: 'error',
                    topic: 'error',
                },
            ]
        },
        {
            topic: 'javascript',
            title: 'JavaScript',
            description: `
                JavaScript is a high-level programming language which has existed since 1995.
                It is used primarily to provide programatic logic to web pages, and can be used 
                in an extensive array of applications. Modern JavaScript utilizes the power of 
                node.js to compile more complex custom applications using libraries / frameworks such as Vue, React or Angular.
            `,
            url: 'https://www.javascript.com/',
            imagePath: 'https://spng.subpng.com/20180604/iqs/kisspng-react-javascript-angularjs-ionic-atom-5b154be64e7965.3537065815281223423214.jpg',
            lookups: [
                {
                    label: 'React',
                    topic: 'react',
                },
                {
                    label: 'Vue',
                    topic: 'vue',
                },
                {
                    label: 'Angular',
                    topic: 'angular',
                },
                {
                    label: 'library',
                    topic: 'library',
                },
                {
                    label: 'framework',
                    topic: 'framework',
                },
            ]
        },
        {
            topic: 'react',
            title: 'React',
            description: `
                React is a front-end JavaScript Library developed and maintained 
                by a dedicated team at Facebook. It gained popularity over the past 
                7 years as a developer-favourite resource for building complex UI environments.
                As a library only, React can be mixed and matched with any number of other 
                JavaScript libraries, along with various frameworks and types of back-ends. 
                In recent years, the power of React has been greatly expanded as Redux, Hooks, Nextjs, 
                and several other features and frameworks have drasticly improved both the programming 
                experience, and the quality of the products which can be developed.
            `,
            url: 'http://reactjs.org',
            imagePath: 'https://spng.subpng.com/20180604/iqs/kisspng-react-javascript-angularjs-ionic-atom-5b154be64e7965.3537065815281223423214.jpg',
            lookups: [
                {
                    label: 'Redux',
                    topic: 'redux',
                },
                {
                    label: 'JavaScript',
                    topic: 'javascript',
                },
                {
                    label: 'Hooks',
                    topic: 'hooks',
                },
            ]
        },
        {
            topic: 'hooks',
            title: 'React Hooks',
            description: `
                Hooks are a newer addition to the React library. It is built using the JavaScript programming language.
            `,
            url: 'http://reactjs.org',
            imagePath: 'https://spng.subpng.com/20180604/iqs/kisspng-react-javascript-angularjs-ionic-atom-5b154be64e7965.3537065815281223423214.jpg',
            lookups: [
                {
                    label: 'Redux',
                    topic: 'redux',
                },
                {
                    label: 'JavaScript',
                    topic: 'javascript',
                },
                {
                    label: 'React',
                    topic: 'react',
                },
                {
                    label: 'library',
                    topic: 'library',
                }
            ]
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentData, setCurrentData] = useState(topic);

    const getTopicData = (topic) => {
        let topicData = topics[0];
        topics.map((obj, index) => {
            if (obj.topic === topic) {
                topicData = obj
            }
        })
        setCurrentData(topicData);
    }

    const WITDescription = ({ description, lookups }) => {

        let wordArray = description.split(' ');
        let newWordsArray = [];
        let newObjectsArray = []
        const [isLookupWord, setIsLookupWord] = useState(false)

        // returns punctuation at end of string if it exists, otherwise returns false
        /*const isPunctuated = (word) => {

            let code = word.charCodeAt(word.length-1);
            if ((code > 32 && code < 48) ||
                (code > 57 && code < 65) ||
                (code > 90 && code < 97)) {
                    console.log('is punctuated: ', word.slice(-1));
                    return word.slice(-1);
            } else {
                return false;
            }
        }*/
        
        if (typeof lookups === 'object') {
            
            for (let wordIndex = 0; wordIndex < wordArray.length; wordIndex++) {

                //let currentWord = wordArray[wordIndex];
                let isLookupWord = false;

                //console.log('pre-formatting: ', wordArray[wordIndex])

                // find out if word is followed by a punctuation mark of some kind
                // if so, store it and remove it form the word so that it's not included in the string comparison below
                /*let punctuation = isPunctuated(wordArray[wordIndex]);
                console.log('punctuation: ', punctuation);
                console.log('word: ', currentWord);
                (punctuation !== false) && currentWord.replace(punctuation, '');
                
                console.log('modifiedWord: ', currentWord)//.replace(punctuation, ''));
                */
                
                for (let lookupsIndex = 0; lookupsIndex < lookups.length; lookupsIndex++) {
                    
                    if ((wordArray[wordIndex] === lookups[lookupsIndex].label) && (isLookupWord === false)) {

                        isLookupWord = true;

                        // formatting, add space at end of text before btn
                        newWordsArray.push(' ');

                        newObjectsArray.push(<InternalWITText text={newWordsArray.join(' ')} />)
                        newWordsArray = [];

                        newObjectsArray.push(<InternalWITBtn text={lookups[lookupsIndex].label} topic={lookups[lookupsIndex].topic} />)

                        //console.log('isLookup: ', isLookupWord)
                        //console.log('wordArray[wordIndex]: ', wordArray[wordIndex])
                    }

                }

                // if punctuation was attached to word, put it back on,
                // attach a space at the beginning
                //punctuation && newWordsArray.push(punctuation);
                newWordsArray.push(' ');
                //punctuation = false;

                !isLookupWord && newWordsArray.push(wordArray[wordIndex]);
                isLookupWord = false;

            }

            // words remaining in string after Lookups
            newObjectsArray.push(<InternalWITText text={newWordsArray.join(' ')} />)

        }



        return (
            <div>
                {newObjectsArray.map((obj, index) => obj)}
            </div>
        );

    }

    const InternalWITBtn = ({ text, topic }) => {

        return (
            <span className={classes.WITBtn} onClick={() => { setIsModalOpen(true); getTopicData(topic); }}>
                {text}
            </span>
        )
    }

    const InternalWITText = ({ text }) => {

        return (
            <span>
                {text}
            </span>
        )
    }


    return (
        <>
            <span className={classes.WITBtn} onClick={() => { setIsModalOpen(true); getTopicData(topic); }}>
                {text}
            </span>
            {
                isModalOpen &&
                <div className={classes.root}>
                    <div className={classes.modal}>
                        <h2>What Is <span className={classes.title}>{currentData.title}</span>?</h2>
                        <div className={classes.description}>
                            <WITDescription description={currentData.description} lookups={currentData.lookups} />
                        </div>
                        <div className={classes.btnContainer}>
                            <Link href={currentData.url}>
                                <Button>Visit Official Website</Button>
                            </Link>
                            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default WhatIsThisBtn;