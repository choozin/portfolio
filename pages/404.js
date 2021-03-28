import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'

import { motion } from 'framer-motion';

import { ThemeContext } from '../contexts/ThemeContext'

import Layout from '../components/layout/layout'
import { useEffect, useContext } from 'react';
import { Autorenew } from '@material-ui/icons';

// information taken from https://dzone.com/articles/top-20-git-commands-with-examples

const FourOhFour = () => {

  const { page } = useContext(ThemeContext);
  page.setPageTitle('Four-Oh-Four');

  const flash = {
    color: [
      '#F00',
      '#FFF',
      '#F00',
    ],
    transition: {
        duration: 2,
        stiffness: 100,
        type: 'tween',
        repeat: Infinity,
    }
  }

  return (
    <Layout
      nav='navbar'
      pageStyle='full-width'
      returnHome={true}
    >
      <Head>
        <title>404 Error</title>
      </Head>

      <section style={{margin: '0 auto', marginTop: '-3.5rem', textAlign: 'center', backgroundColor: 'black', paddingBottom: '100vh'}}>
        <motion.p 
          animate={
            flash
          }
        style={{marginTop: '-2rem', fontSize: '2rem', fontFamily: 'Arial', fontWeight: 'bold'}} >ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 4,
              delay: 2,
            }
          }}
          style={{color: 'white'}}
        >
          <p>Don't be alarmed, this page doesn't exist though. Sorry.</p>
          <button onClick={() => window.history.back()}>Go Back</button>
        </motion.div>
        <motion.p 
          animate={
            flash
          }
        style={{fontSize: '2rem', fontFamily: 'Arial', fontWeight: 'bold'}} >ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! </motion.p>
      </section>
    </Layout>
  )
}

export default FourOhFour;