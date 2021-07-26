import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'

import { ThemeContext } from '../contexts/ThemeContext'

import Layout from '../components/layout/layout'
import { useContext } from 'react';

const LandingPage = () => {

  const { page } = useContext(ThemeContext);
  page.setPageTitle('Epic Space Landing Page');

  return (
    <Layout
      nav='none'
      pageStyle='landingPage' // Entire page is generated in the layout component
      returnHome={true}
    >
      <Head>
        <title>{page.pageTitle}{page.siteTitle}</title>
      </Head>
    </Layout>
  )
}

export default LandingPage;