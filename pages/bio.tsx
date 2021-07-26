import React, {useContext} from 'react';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import { ThemeContext } from '../contexts/ThemeContext'

import StarWars from '../components/layout/starwars/starwars';

const Bio = () => {
    
    const { page } = useContext(ThemeContext);
    page.setPageTitle('Bio');

    return (
        <Layout
            nav='none'
            pageStyle='full-screen'
            returnHome={true}
        >
            <Head>
                <title>{page.pageTitle}{page.siteTitle}</title>
            </Head>
            <StarWars/>
        </Layout>
    )
}


export default Bio;