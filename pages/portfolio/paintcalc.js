import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'
import NoSSR from 'react-no-ssr'

import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

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
            <Calculator />
        </Layout>
    );
};

export default PaintCalc;
