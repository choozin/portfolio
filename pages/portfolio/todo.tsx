import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'

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
        <Layout home={false}>
            <Head>
                <title>{page.pageTitle}</title>
            </Head>
            <AppBar position='static'>
                <Tabs value={selectedTab} onChange={handleTabChange}>
                    <Tab value={0} label="Default List"/>
                    <Tab value={1} label="Public List"/>
                    <Tab value={2} label="Local Device List"/>
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <section>
                <h2>Default List</h2>
                <ToDos />
                <AddToDo />
            </section>}
            {selectedTab === 1 && <section>
                <h2>Public List</h2>
                <ToDosFirebase/>
            </section>}
            {selectedTab === 2 && <section>
                <h2>Local Device List</h2>
                <ToDosLocalStorage/>
            </section>}
        </Layout>
    );
};

export default Todo;
