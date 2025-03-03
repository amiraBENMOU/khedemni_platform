import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dropdown from 'react-bootstrap/Dropdown';
import '../src/Pages/App.css';
import { Typography } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

 const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'white', // Set custom background color
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Navbar_khedmouni() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [signinText, setSigninText] = useState('Sign in');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    setSigninText(isAuthenticated ? 'Sign Out' : 'Sign In');
  }, []);

  {/*
  const toggleLightDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  */}

  const handleSignInClick = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      localStorage.removeItem('userName');
      localStorage.removeItem('isAuthenticated');
      setSigninText('Sign In');
      navigate('/signIn');
    } else {
      setSigninText('Sign Out');
      navigate('/signIn');
    }
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  const navItemStyle = { fontSize: '20px' };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
          </IconButton>
          <Navbar.Brand href="/" style={{
                ...navItemStyle,
                color: "black",
              }} >Khedemni</Navbar.Brand>
          <Nav className="ms-auto" style={{ display: 'flex', alignItems: 'center' }}>
            <Nav.Link
              href="/"
              style={{
                ...navItemStyle,
                color: location.pathname === "/" ? "#5FA0FF" : "black",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#opportunities"
              style={{
                ...navItemStyle,
                color: location.hash === "#opportunities" ? "#5FA0FF" : "black",
              }}
            >
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} style={{ ...navItemStyle, color: location.hash === "#opportunities" ? "#5FA0FF" : "black" }}>
                Our Opportunities
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Remote Jobs</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Part-Time Jobs</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Internships</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
           

            </Nav.Link>
            <Nav.Link
              href="/openPositions"
              style={{
                ...navItemStyle,
                color: location.pathname === "/openPositions" ? "#5FA0FF" : "black",
              }}
            >
              Join Our Team
            </Nav.Link>
            <Nav.Link
              href="/admin"
              style={{
                ...navItemStyle,
                color: location.pathname === "/admin" ? "#5FA0FF" : "black",
              }}
              onClick={handleAdminClick}
            >
              Admin
            </Nav.Link>
            {/* 
             <Nav.Link onClick={toggleLightDarkMode} style={navItemStyle}>
              {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
            </Nav.Link>
            */}
            <Nav.Link
              onClick={handleSignInClick} // Toggle text on click
              style={{
                ...navItemStyle
              }}
            >
            
              <Button variant="primary">{signinText}</Button>
            </Nav.Link>
          </Nav>
        </Toolbar>
      </AppBar>
       
      

         </Box>
  );
}

export default Navbar_khedmouni;