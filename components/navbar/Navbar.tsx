import React, { Component, useState, useContext } from 'react';
import Link from 'next/link'

import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import navbarStyles from './navbar.module.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles((theme) => ({
    /*root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },*/
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    /*list: {
        width: 250,
    },*/
}));

const Navbar = () => {
    const { status, user } = useContext(AuthContext);
    const { page, theme } = useContext(ThemeContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const [primaryNavElements, setPrimaryNavElements] = useState({
        titles: [
            'Home',
            'Biography',
            'Resume',
            'Portfolio',
            'Interests & Goals',
            'Contact'
        ],
        links: [
            '/',
            'Biography',
            '/resume',
            'Portfolio',
            'Interests',
            '/contact',
        ]
    });

    const [secondaryNavElements, setSecondaryNavElements] = useState({
        titles: [
            'Test Webpage',
            'To Do List',
            'Git Reference',
            'Posts',
            'MineSweeper',
        ],
        links: [
            '/test',
            '/portfolio/todo',
            '/git',
            '/posts',
            '/portfolio/minesweeper',
        ]
    });

    const classes = useStyles();

    return (
        <div className={navbarStyles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={navbarStyles.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor='left' open={Boolean(anchorEl)} onClose={handleClose}>
                        <div
                            className={navbarStyles.list}
                            role="presentation"
                            onClick={handleClose}
                            onKeyDown={handleClose}
                        >
                            <List>
                                {primaryNavElements.titles.map((text, index) => (
                                    <Link href={primaryNavElements.links[index]} key={index}>
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                            <Divider />
                            <List>
                                {secondaryNavElements.titles.map((text, index) => (
                                    <Link href={secondaryNavElements.links[index]} key={index}>
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </div>
                    </Drawer>
                    <Typography className={navbarStyles.title} variant="h6" noWrap>
                        {page.pageTitle}
                    </Typography>
                    <div className={navbarStyles.search}>
                        <div className={navbarStyles.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            className={navbarStyles.searchInput}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

/* SEARCH BAR */
/*
<div className={navbarStyles.search}>
    <div className={navbarStyles.searchIcon}>
        <SearchIcon />
    </div>
    <InputBase
        placeholder="Search…"
        classes={{
            root: navbarStyles.inputRoot,
            input: navbarStyles.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
    />
</div>
*/


export default Navbar;