import { useState, useEffect, useContext, Component } from 'react';
import Link from 'next/link'
import styles from './whatisthis.module.css'
import { Button } from '@material-ui/core';

const WhatIsThisBtn = ({ children, topic }) => {

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
            imagePath: 'https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png',
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
                    label: 'Redux,',
                    topic: 'redux',
                },
                {
                    label: 'JavaScript',
                    topic: 'javascript',
                },
                {
                    label: 'Hooks,',
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

    const [isWITModalOpen, setIsWITModalOpen] = useState(false);
    const [currentData, setCurrentData] = useState(topic);
    const [previousData, setPreviousData] = useState([]);

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

        if (typeof lookups === 'object') {
            
            for (let wordIndex = 0; wordIndex < wordArray.length; wordIndex++) {

                let isLookupWord = false;

                for (let lookupsIndex = 0; lookupsIndex < lookups.length; lookupsIndex++) {
                    
                    if ((wordArray[wordIndex] === lookups[lookupsIndex].label) && (isLookupWord === false)) {

                        isLookupWord = true;

                        // formatting, add space at end of text before btn
                        newWordsArray.push(' ');

                        newObjectsArray.push(<InternalWITText text={newWordsArray.join(' ')} />)
                        newWordsArray = [];

                        newObjectsArray.push(<InternalWITBtn text={lookups[lookupsIndex].label} topic={lookups[lookupsIndex].topic} />)

                    }

                }

                newWordsArray.push(' ');
                
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
            <span className={styles.WITBtn} onClick={() => { 
                setIsWITModalOpen(true); 
                setPreviousData(previousData.length > 0 ? [...previousData, currentData] : [currentData]); 
                getTopicData(topic); }}>
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

    const goBackBtn = () => {

        switch(previousData.length) {
            case 0: 
                //
                setCurrentData([]);
                setPreviousData([]);
                break;
            case 1: 
                //
                setCurrentData(previousData[previousData.length-1]);
                setPreviousData([]);
                break;
            default: 
                //
                setCurrentData(previousData[previousData.length-1]);

                let pData = previousData;
                pData.splice(-1,1);
                setPreviousData(pData);
        }

    }

    console.log(previousData);
    return (
        <>
            <span className={styles.WITBtn} onClick={() => { setIsWITModalOpen(true); getTopicData(topic); }}>
                {children}
            </span>
            {
                isWITModalOpen &&
                <div className={styles.fullscreenBase}>
                    <div className={styles.WITModal}>
                        <img className={styles.image} src={currentData.img}/>
                        <h2>What Is <span className={styles.title}>{currentData.title}</span>?</h2>
                        <div className={styles.description}>
                            <WITDescription description={currentData.description} lookups={currentData.lookups} />
                        </div>
                        <div className={styles.btnContainer}>
                            { previousData.length > 0 && <Button onClick={() => goBackBtn()}>Back</Button> }
                            <Link href={currentData.url}>
                                <Button>Visit Official Website</Button>
                            </Link>
                            <Button onClick={() => setIsWITModalOpen(false)}>Close</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default WhatIsThisBtn;