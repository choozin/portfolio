import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
//import milkyway from '../../public/images/milkyway.jpeg'

import styles from './layout.module.css'

import Navbar from '../navbar/Navbar'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { motion } from 'framer-motion'
import Footer from './Footer'


export const siteTitle = `Cam's Portfolio`;

const bgImages = [
  '/images/milkyway.jpeg',
  '/images/sombrero.jpg',
  '/images/andromeda.jpg',
]

export default function Layout({ children, nav, pageStyle, returnHome, header }: { children: React.ReactNode, nav: string, pageStyle: string, returnHome?: boolean, header?: boolean }) {

  let navigation;
  switch (nav) {

    case 'navbar':
      navigation = <Navbar />;
      break;

    case 'navball':
      navigation = 'navball';
      break;

    case 'none':
      navigation = '';
      break;
  }

  let page;
  switch (pageStyle) {

    case 'thin':
      page =
        <>
          <div style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            zIndex: -10
          }}>
            <Image src={bgImages[0]} //Math.round(Math.random() * (bgImages.length - 1))]}
              alt='Picture of the Milky Way'
              layout='fill'
              objectFit='cover'
              objectPosition='center' />
          </div>
          <div className={styles.container}>



            {header &&
              <header className={styles.header}>
                This is the header.
              </header>
            }

            <main className={styles.main}>
              {children}
            </main>

            {!returnHome && (
              <div className={styles.backToHome}>
                <p>This is the footer.</p>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
                <div className={styles.icons}>
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
              </div>
            )}


          </div>
          <Footer />
        </>
      break;

    case 'wide':
      page =
        <>
          <div style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: -10
          }}>
            <Image src={bgImages[0]} //Math.round(Math.random() * (bgImages.length - 1))]}
              alt='Picture of the Milky Way'
              layout='fill' />
          </div>
          <div className={styles.wideContainer}>



            {header &&
              <header className={styles.header}>
                This is the header.
              </header>
            }

            <main className={styles.wideMain}>
              {children}
            </main>

            {!returnHome && (
              <div className={styles.backToHome}>
                <p>This is the footer.</p>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
                <div className={styles.icons}>
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
              </div>
            )}


          </div>
          <Footer />
        </>
      break;

    case 'full-width':
      page =
        <div className={styles.fullWidth}>
          {children}
        </div>
      break;

    case 'full-screen':
      page =
        <div className={styles.fullScreen}>
          {children}
        </div>
      break;


    case 'landingPage':
      page =
        <div className={styles.landingPage}>

          <section className={styles.showcase}>
            <header>
              <button onClick={() => window.history.back}><h2 className={styles.logo}>SPACE</h2></button>
              <div className={styles.toggle}>

              </div>
            </header>

            <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=W0LHTWG-UmQ"></iframe>
            <div className={styles.overlay}></div>

            <div className={styles.text}>
              <h2>Always Keep</h2>
              <h3>Reaching Higher</h3>
              <p>It's amazing what some discolouration along with a bold font can do. Look at this landing page. My God... it's gorgeous!</p>
            </div>

            <ul className={styles.social}>
              <li>
                <a href='#'><img src='facebook.png' alt='' /></a>
                <a href='#'><img src='twitter.png' alt='' /></a>
                <a href='#'><img src='instagram.png' alt='' /></a>
              </li>
            </ul>

          </section>

          <div className={styles.menu}>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>News</a></li>
              <li><a href='#'>Destinations</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Pricing</a></li>
            </ul>

          </div>
        </div>
      break;
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta
          name="Cam's Portfolio"
          content="Learn about Cam's Skills, Accomplishments and Goals"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {navigation}
      {page}
    </>
  )
}