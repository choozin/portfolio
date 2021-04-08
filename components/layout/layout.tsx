import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'

import Navbar from '../navbar/Navbar'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


export const siteTitle = `Cam's Portfolio`;

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
      break;
    
    case 'full-width' :
      page = 
            <div className={styles.fullWidth}>
              {children}
            </div>
      break;


    case 'landingPage' :
      page = 
            <div className={styles.landingPage}>

              <section className={styles.showcase}>
                <header>
                  <h2 className={styles.logo}>Travel</h2>
                  <div className={styles.toggle}>

                  </div>
                </header>
                
                <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=W0LHTWG-UmQ"></iframe>               
                <div className={styles.overlay}></div>

                <div className={styles.text}>
                  <h2>Never Stop</h2>
                  <h3>Exploring The World</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur debitis ullam ipsa laborum saepe? Esse cupiditate temporibus suscipit id tempora provident beatae deleniti assumenda veniam dolorem, repellendus aut, asperiores omnis?</p>
                </div>

                <ul className={styles.social}>
                  <li>
                    <a href='#'><img src='facebook.png' alt=''/></a>
                    <a href='#'><img src='twitter.png' alt=''/></a>
                    <a href='#'><img src='instagram.png' alt=''/></a>
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