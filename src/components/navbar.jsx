'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import personalLogo from '../assets/logo.png'
import Link from 'next/link';

const pages = [
  {title:"Home", href:'/'},
  {title:"About", href:'/about'},
  {title:"Portofolio", href:'/portofolio'},
  {title:"Contact", href:'/contact'},
];


export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
   const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar sx={{backgroundColor:"transparent", boxShadow:"none"}} position="static">
      <Container maxWidth="l">
        <Toolbar disableGutters>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
        <Link href="/">
        <Image alt='logo' src={personalLogo.src} width={200} height={200}  />
        </Link>
        </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Link style={{textDecoration:"none", color:"#2a2c39"}} href={page.href}>
                    <Typography textAlign="center">{page.title}</Typography>
                    </Link>
                  </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{display:{xs:"block", md:"none"}}}>
          <Image alt='logo' src={personalLogo.src} width={100} height={100}/>
          </Box>
                <Box sx={{ flexGrow: 1,gap:4,display: { xs: 'none', md: 'flex' }, justifyContent:"end" }}>
            <Toolbar>
                <IconButton >
                    <Link href="https://github.com/farhatareek">
                    <GitHubIcon  sx={{color:"#fff"}}/>
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href="https://www.linkedin.com/in/farha-tareek-7a027421b">
                    <LinkedInIcon  sx={{color:"#fff"}}/>
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href="https://www.facebook.com/fofa.tareek?mibextid=2JQ9oc">
                    <FacebookIcon  sx={{color:"#fff" ,boredr:"1px solid #fff"}}/>
                    </Link>
                </IconButton>
            </Toolbar>
            <Link href="/contact">
            <Button sx={{ paddingRight:" 40px",height:" 65px",
            lineHeight: "60px", color:"#fff",
            border: "1px solid #3b3d49",
            borderRadius:" 35px",
            paddingLeft: "40px",}}  className='hireMeBtn'>
            Hire Me
            <DoubleArrowIcon/>
            </Button> 
            </Link>
            </Box>
        </Toolbar>
        </Container>
    </AppBar>
    );
}
