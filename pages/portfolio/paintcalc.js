import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'
import NoSSR from 'react-no-ssr'

import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import "@fontsource/special-elite"

import Layout from '../../components/layout/layout'

import Calculator from '../../components/paintcalc/calculator'

const PaintCalc = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle(`Painting Cost Estimator`);

    return (
        <Layout
            nav='navbar'
            pageStyle='thin'
            returnHome={true}
        >
            <Head>
                <title>{page.pageTitle}{page.siteTitle}</title>
            </Head>
            <div
            style={{
                padding: '1rem',
                paddingTop: '4rem',
                color: '#FFF',
                textAlign: 'center', 
                fontFamily: 'Special Elite',
            }}>
                <h2>Interior Painting Price Estimate App</h2>
                <p>
                    This custom calculator allows employees or even potential customers 
                    to get a quick quote for professional interior painting. No paperwork, 
                    and the data can be immediately available anywhere it's needed. Of course, 
                    every variable and cost effect can be modified to provide the most accurate 
                    estimate possible. How could your business benefit from having an app like 
                    this working for you?
                </p>
            </div>
            <Calculator />
        </Layout>
    );
};

export default PaintCalc;
