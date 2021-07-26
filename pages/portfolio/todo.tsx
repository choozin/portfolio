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
    page.setPageTitle(`Cam's To Do List`);

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
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '17px',
                }}>
                <AppBar position='static'>
                    <Tabs value={selectedTab} onChange={handleTabChange}>
                        <Tab value={0} label="Sample List" />
                        <Tab value={1} label="Public List" />
                        <Tab value={2} label="Local Device List" />
                    </Tabs>
                </AppBar>
                <div
                    style={{
                        padding: '1rem',
                    }}>
                    {selectedTab === 0 && <section>
                        <h2>Default List</h2>
                        <ToDos />
                        <AddToDo />
                    </section>}
                    {selectedTab === 1 && <section>
                        <h2>Public List</h2>
                        <ToDosFirebase />
                    </section>}
                    {selectedTab === 2 && <section>
                        <h2>Local Device List</h2>
                        <NoSSR onSSR={<section />}>
                            <ToDosLocalStorage />
                        </NoSSR>
                    </section>}
                </div>
            </div>
        </Layout>
    );
};

export default Todo;
