import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'

import Layout from '../components/layout/layout'

const Test = () => { 

  const pageTitle: string = 'Page title'

  return (
    <Layout home={false}>
      <Head>
        <title>{pageTitle}</title>
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