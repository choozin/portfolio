import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { ThemeContext } from '../contexts/ThemeContext'

import Layout from '../components/layout/layout'
import React, { useState, useEffect, useContext } from 'react';

import ResumeGenerator from '../components/resume/resume'
import GeneratedResume from '../components/resume/generatedResume'


const Resume = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle('Resume-ish');

    const [techStuff, setTechStuff] = useState(true);
    const [clients, setClients] = useState(true);
    const [problemSolving, setProblemSolving] = useState(true);
    const [programming, setProgramming] = useState(true);
    const [creative, setCreative] = useState(true);
    const [education, setEducation] = useState(true);
    const [interests, setInterests] = useState(true);

    const [categoriesArray, setCategoriesArray] = useState([]);

    const [period, setPeriod] = useState(0);

    const [selectedFormat, setSelectedFormat] = useState('Infographic')

    return (
        <Layout
            nav='navbar'
            pageStyle='thin'
            returnHome={true}
        >
            <Head>
                <title>{page.pageTitle}{page.siteTitle}</title>
            </Head>
            <section>
                <div style={{
                    width: '100%',
                    textAlign: 'center',
                    margin: '0 auto',
                    paddingTop: '3rem',
                }}>
                    <Image src='/images/cammakesstuff.png'
                        alt='Cam Makes Stuff Logo'
                        width='340px'
                        height='340px'
                    />
                </div>
                <ResumeGenerator
                    setTechStuff={(techStuff) => setTechStuff(techStuff)}
                    setClients={setClients}
                    setProblemSolving={setProblemSolving}
                    setProgramming={setProgramming}
                    setCreative={setCreative}
                    setEducation={setEducation}
                    setInterests={setInterests}
                    setCategoriesArray={setCategoriesArray}
                    setSelectedFormat={setSelectedFormat}
                    setPeriod={setPeriod}
                    techStuff={techStuff}
                    clients={clients}
                    problemSolving={problemSolving}
                    programming={programming}
                    creative={creative}
                    education={education}
                    interests={interests}
                    categoriesArray={categoriesArray}
                    selectedFormat={selectedFormat}
                />
                <GeneratedResume
                    techStuff={techStuff}
                    clients={clients}
                    problemSolving={problemSolving}
                    programming={programming}
                    creative={creative}
                    education={education}
                    interests={interests}
                    categoriesArray={categoriesArray}
                    selectedFormat={selectedFormat}
                    period={period}
                />
            </section>
        </Layout>
    )
}

export default Resume;