import Head from 'next/head'
import Link from 'next/link'

import { ThemeContext } from '../contexts/ThemeContext'

import Layout from '../components/layout/layout'
import React, { useState, useEffect, useContext } from 'react';

import PortfolioComponent from '../components/portfolio/Portfolio'
import Image from 'next/image';

//import MyForm from './contact/myform';

import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    TextField,
    Paper,
    Select,
    MenuItem,
    Checkbox,
    ListItemText,
    Button,
    Icon,
} from '@material-ui/core'

const Portfolio = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle('Portfolio');


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
                <PortfolioComponent />
            </section>
        </Layout>
    )
}

export default Portfolio;