import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'
import NoSSR from 'react-no-ssr'

import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import Layout from '../../components/layout/layout'

import ToDos from '../../components/todo/ToDos'
import AddToDo from '../../components/todo/AddToDo';

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import ToDosFirebase from '../../components/firebase/ToDosFirebase';
import ToDosLocalStorage from '../../components/todo/ToDosLocalStorage';
const Todo = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle(`Grocery List`);

    const [selectedTab, setSelectedTab] = useState(0)

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
    };

    return (
        <Layout
            nav='navbar'
            pageStyle='thin'
            returnHome={true}
        >
            <Head>
                <title>{page.pageTitle}{page.siteTitle}</title>
            </Head>
            <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                <div
                    style={{
                        padding: '1rem',
                        paddingTop: '4rem',
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Special Elite',
                    }}>
                    <h2>Grocery List</h2>
                    <p>
                        I made this app to function as an easy way for my girlfriend and I to
                        keep a shared grocery list that we could both access easily. It was originally developed
                        as an Android App to be used on our phones using the React-Native Library. Likewise,
                        any app you see on my site can be ported to become a native Android or iPhone app - after some tweaking.
                    </p>
                </div>
                <div
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '17px',
                    }}>
                    <AppBar position='static'>
                        <Tabs value={selectedTab} onChange={handleTabChange}>
                            <Tab value={0} label="Sample" />
                            <Tab value={1} label="Public" />
                            <Tab value={2} label="Local Device" />
                        </Tabs>
                    </AppBar>
                    <div
                        style={{
                            padding: '1rem',

                        }}>
                        {selectedTab === 0 && <section>
                            <h2 style={{ textAlign: 'center' }}>Sample List</h2>
                            <p>
                                Try out the basics of the app here.
                            </p>
                            <p>
                                The data for this list is provided statically from the server (through CDN) and loads the same every time the page is loaded or refreshed.
                            </p>
                            <p>
                                This is accomplished using React's <code>useContext</code> hook to access the data, and performs all CRUD and sorting actions via the Context API. It draws the static data from a lib folder, which gets dispatched through the Vercel CDN.
                            </p>
                            <p>
                                If you're wondering, the ingredients before are for some delicious swiss mushroom sliders. 
                            </p>
                            <ToDos />
                            <AddToDo />
                        </section>}
                        {selectedTab === 1 && <section>
                            <h2 style={{ textAlign: 'center' }}>Public List</h2>
                            <p>
                                This list is available online for anyone to access and edit. (Disclaimer:
                                It's possible that someone random on the internet has modified the list on this tab without my noticing.
                                I'll be keeping an eye on it, but I cannot guarantee that there won't be anything offensive here.)
                                You can give it a try by adding, modifying or deleting items on the list, and check on another device
                                to see the changes update in real time.
                            </p>
                            <p>
                                The data for this list is kept on a Firebase NoSQL database and loaded dynamically on the client device.
                            </p>
                            <ToDosFirebase />
                        </section>}
                        {selectedTab === 2 && <section>
                            <h2 style={{ textAlign: 'center' }}>Local Device List</h2>
                            <p>
                                The data for this list is stored locally on the device you are currently using. The data on this list
                                is automatically saved and reloaded on every time you visit this tab and modify the list.
                            </p>
                            <NoSSR onSSR={<section />}>
                                <ToDosLocalStorage />
                            </NoSSR>
                        </section>}
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default Todo;
