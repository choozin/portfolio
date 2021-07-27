import Head from 'next/head'
import Link from 'next/link'

import { ThemeContext } from '../contexts/ThemeContext'
import styles from './contact.module.css'

import Layout from '../components/layout/layout'
import React, { useState, useEffect, useContext } from 'react';

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
                
            </section>
        </Layout>
    )
}

export default Portfolio;