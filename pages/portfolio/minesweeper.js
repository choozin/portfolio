import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'
import NoSSR from 'react-no-ssr'

import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import Layout from '../../components/layout/layout'

import MineSweeperWindow from '../../components/minesweeper/MineSweeperWindow'

const MineSweeper = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle(`MineSweeper`);

    return (
        <Layout home={false}>
            <Head>
                <title>{page.pageTitle}</title>
            </Head>
            <MineSweeperWindow/>
        </Layout>
    );
};

export default MineSweeper;
