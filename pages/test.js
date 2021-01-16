import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'

import { ThemeContext } from '../contexts/ThemeContext'

import Layout from '../components/layout/layout'
import { useContext } from 'react';

const Test = () => { 

  const { page } = useContext(ThemeContext);
  page.setPageTitle('Test Page');

  return (
    <Layout home={false}>
      <Head>
        <title>{page.pageTitle}</title>
      </Head>
      <section>
        <div style={{width: '100%', height: '100%', border: 'solid 1px silver'}}>
          <p>This is a test.</p>
        </div>
      </section>
    </Layout>
  )
}

export default Test;