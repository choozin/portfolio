import Head from 'next/head'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next';
import Link from 'next/link'
import Date from '../components/common/date'
import ActiveLink from '../components/common/active-link'

import Auth from '../components/auth/auth'
import WhatIsThisBtn from '../components/whatisthis/whatisthis'
import Welcome from '../components/welcome/Welcome'

import request from '../pages/api/mailjet'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string,
    title: string,
    id: string
  }[]
}) {

  /*let mailjet = request;

  console.log('mailjet: ', mailjet);*/

  const [showWelcome, setShowWelcome] = useState(true);

  const exitWelcome = () => {
    setShowWelcome(false)
  }

  setTimeout(() => {
    setShowWelcome(false);
  }, 30000)

  return (
    <Layout
      nav='navbar'
      pageStyle='thin'
      returnHome={true}
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AnimatePresence>
        {showWelcome && <motion.div exit={{opacity:0, transition: {duration: 2}}}><Welcome exitFunction={() => setShowWelcome(false)} /></motion.div>}
      </AnimatePresence>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample Active Link, it only goes red if the current url path matches the href.<br />
          <ActiveLink
            children='otherwise its green'
            href='https://nextjs.org/learn'
          />).<br />
          
          Use this for links in a nav where you want to signal which page or <WhatIsThisBtn topic='next'>subpage</WhatIsThisBtn> the user is on.
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

/*

      <section>
        <Auth/>
        <WhatIsThisBtn children='React' topic='react'/>
        <WhatIsThisBtn topic='hooks'>React Hooks</WhatIsThisBtn>
        <WhatIsThisBtn topic='javascript'>
          <img src='https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png'
            width='20px' height='20px'></img>
        </WhatIsThisBtn>
      </section>
*/