import React, { Component, useState, useContext, useEffect } from 'react';
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

import { 
    MenuBook,
    Face,
    AssignmentInd,
    ImportantDevices,
    Memory,
    Brightness4,
    FormatPaint,
    FlightLand,
    AssignmentTurnedIn,
    GitHub,
    Create,
} from '@material-ui/icons'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import "@fontsource/mate-sc"
import "@fontsource/zen-tokyo-zoo"
import "@fontsource/bebas-neue"
import "@fontsource/shadows-into-light"
import "@fontsource/lobster"
import "@fontsource/special-elite"
import "@fontsource/satisfy"
import "@fontsource/pacifico"
import "@fontsource/tourney"
import "@fontsource/orbitron"
import "@fontsource/press-start-2p"
import "@fontsource/dotgothic16"



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
            'Introduction',
            'Biography',
            'Resume',
            'Portfolio',
            'Contact'
        ],
        links: [
            '/introduction',
            '/biography',
            '/resume',
            '/portfolio',
            '/contact',
        ],
        icons: [
            <MenuBook />,
            <Face/>,
            <AssignmentInd/>,
            <ImportantDevices/>,
            <MailIcon/>,
        ]
    });

    const [secondaryNavElements, setSecondaryNavElements] = useState({
        titles: [
            'Retro Game',
            'Helio-Tour',
            'Pro Painting Estimator',
            'Video Landing Page',
            'Grocery List',
            'Git Reference',
            'Blog',
            'don\'t click this',
        ],
        links: [
            '/portfolio/minesweeper',
            'https://r3f-next.vercel.app/planets',
            '/portfolio/paintcalc',
            '/landingpage',
            '/portfolio/todo',
            '/git',
            '/posts',
            '/isaiddontclickthat'
        ],
        font: [
            'DotGothic16',
            'Tourney',
            'Mate SC',
            'Bebas Neue',
            'Mate SC',
            'Mate SC',
            'Mate SC',
            'Special Elite'
        ],
        icons: [
            <Memory/>,
            <Brightness4/>,
            <FormatPaint/>,
            <FlightLand/>,
            <AssignmentTurnedIn/>,
            <GitHub/>,
            <Create/>,
        ]
    });

    const classes = useStyles();

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={navbarStyles.root}>
            <AppBar position="static" style={{ background: 'rgba(32, 32, 32, '+ (scrollY/400) +')', boxShadow: 'none'}}>
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
                                    <Link 
                                        href={primaryNavElements.links[index]} 
                                        key={index}
                                    >
                                        <ListItem button key={text}>
                                            <ListItemIcon>{primaryNavElements.icons[index]}</ListItemIcon>
                                            <ListItemText><span style={{ fontFamily: 'Special Elite', fontSize: '1.2rem' }}>{text}</span></ListItemText>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                            <Divider />
                            <List style={{ color: '#888'}}>
                                {secondaryNavElements.titles.map((text, index) => (
                                    <Link href={secondaryNavElements.links[index]} key={index}>
                                        <ListItem button key={text}>
                                            <ListItemIcon>{secondaryNavElements.icons[index]}</ListItemIcon>
                                            <ListItemText><span style={{ fontFamily: secondaryNavElements.font[index] }}>{text}</span></ListItemText>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </div>
                    </Drawer>
                    <Typography className={navbarStyles.title} variant="h6" noWrap>
                        {page.pageTitle} <Link href='/'><span style={{ color: 'white', fontFamily: 'Special Elite', fontSize: '1.2rem' }}>@CamMakesStuff</span></Link>
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