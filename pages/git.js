import Head from 'next/head'
import { GetStaticProps } from 'next';
import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ThemeContext } from '../contexts/ThemeContext'

import Layout from '../components/layout/layout'
import { useEffect, useContext } from 'react';

// information taken from https://dzone.com/articles/top-20-git-commands-with-examples

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem',
  },
  description: {
    fontSize: 14,
    paddingTop: 14
  },
  pos: {
    marginBottom: 16,
  },
});

const data = [
  {
    title: 'git clone',
    command: 'git clone https://github.com/choozin/portfolio.git',
    description: 'Obtain a repository from an existing URL',
    link: 'http://www.google.com',
    keywords: [
      'from remote',
      'backups',
      'download',
    ]
  },
  {
    title: 'git add (file)',
    command: 'git add portfolio/pages/resume',
    description: 'Adds a file to the staging area',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git add (all)',
    command: 'git add *',
    description: 'Adds a adds one or more to the staging area',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git commit',
    command: 'git commit -a',
    description: 'Commits any files you’ve added with the git add command and also commits any files you’ve changed since then',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git diff',
    command: 'git diff',
    description: 'Shows the file differences which are not yet staged',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git reset',
    command: 'git reset 09bb8e3f99eaf9abcd...',
    description: 'Undoes all the commits after the specified commit and preserves the changes locally',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git log',
    command: 'git log',
    description: 'Lists the version history for the current branch',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git branch',
    command: 'git branch branch-name',
    description: 'Creates a new branch',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git checkout',
    command: 'git checkout branch-name',
    description: 'undoes all the commits after the specified commit and preserves the changes locally',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git merge',
    command: 'git merge branch-name',
    description: 'Merges the current branch with the branch specified',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git pull',
    command: 'git pull https://github.com/choozin/portfolio',
    description: 'Fetches and merges the version on github on to the local directory',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  },
  {
    title: 'git push',
    command: 'git push origin branch-name',
    description: 'Sends the branch commits to the github',
    link: 'http://www.google.com',
    keywords: [
      'staging',
      'update',
      'save',
      'saving',
    ]
  }
]

const GitCard = (data) => {

  const classes = useStyles();

  const { title, command, description, link, keywords } = data.data;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography className={classes.description} color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          <code>{command}</code>
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={link}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

const Git = () => {

  const { page } = useContext(ThemeContext);
  page.setPageTitle('Git Reference');

  return (
    <Layout
      nav='navbar'
      pageStyle='thin'
      returnHome={true}
    >
      <Head>
        <title>{page.pageTitle}{page.siteTitle}</title>
      </Head>
      <section>
        {data.map(dataObj =>
          <GitCard key={dataObj.title} data={dataObj} />
        )}
      </section>
    </Layout>
  )
}

export default Git;