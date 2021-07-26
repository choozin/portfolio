import Head from 'next/head'
import Link from 'next/link'

import { ThemeContext } from '../contexts/ThemeContext'

import Layout from '../components/layout/layout'
import React, { useState, useEffect, useContext } from 'react';

import ResumeComponent from '../components/resume/resume'


const Resume = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle('Resume-ish');



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
                <ResumeComponent />
            </section>
        </Layout>
    )
}

export default Resume;