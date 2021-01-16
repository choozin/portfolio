import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import Layout from '../../components/layout/layout'

import ToDos from '../../components/todo/ToDos'
import AddToDo from '../../components/todo/AddToDo';

const Todo = () => {

    const { page } = useContext(ThemeContext);
    page.setPageTitle(`Cam's To Do List`);

    return (
        <Layout home={false}>
            <Head>
                <title>{page.pageTitle}</title>
            </Head>
            <section>
                <h2>Cam's To Do List</h2>
                <ToDos />
                <AddToDo />
            </section>
        </Layout>
    );
};

export default Todo;
