import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Image } from 'mui-image';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Taxor', link: '/taxor' },
  { name: 'Om oss', link: '/om' },
  { name: 'Hållbarhet', link: '/hallbarhet' },
  { name: 'Kontakt', link: '/kontakt' },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log('Opening menu:', event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log('Closing menu');
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: '#2b2f32 !important;',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Image
              width={65}
              src={`${process.env.PUBLIC_URL}/eksjo-new-logo.png`}
              sx={{
                mr: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            />
          </Link>
          <Link to="/">
            <Typography
              variant="h8"
              noWrap
              component="a"
              sx={{
                ml: 2,
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                lineHeight: 1.2,
              }}
            >
              Sotning &<br />
              Ventilation<br />
              Eksjö AB
            </Typography>
          </Link>

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
              <Box id="days" className="mx-auto flex items-center justify-center lg:invisible md:visible mb-2 ">
                <div className="group relative cursor-pointer ">
                  <div className="flex items-center justify-between space-x-5 bg-white px-4">
                    <p className="menu-hover  text-base font-medium text-inherit lg:mx-4">
                      Tjänster
                    </p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>
                  <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                    <Link to={'/tjanster'}>
                      <a className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2">
                        Alla tjänster
                      </a>
                    </Link>
                    <Link to={'/tjanster/sotning/rengorning'}>
                      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        Sotning
                      </a>
                    </Link>
                    <Link to={'/tjanster/besiktningar'}>
                      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        Besiktningar
                      </a>
                    </Link>
                    <Link to={'/tjanster/besiktningar'}>
                      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        Övriga tjänster
                      </a>
                    </Link>
                  </div>
                </div>
              </Box>
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link to="/">
            <Image
              width={50}
              src={`${process.env.PUBLIC_URL}/eksjo-new-logo.png`}
              sx={{
                borderRadius: '100%',
                borderColor: 'grey.100',
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.0rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            />
          </Link>
          <Link to="/">
            <Typography
              variant="h8"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                lineHeight: 1.2,
              }}
            >
              Sotning &<br />
              Ventilation<br />
              Eksjö AB
            </Typography>
          </Link>
          <Box id="days" className="mx-auto flex items-center justify-center invisible lg:visible mr-2 ">
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between">
                <a className="menu-hover my-2 py-2 text-xs font-semibold text-white">
                  TJÄNSTER
                </a>
                <span className="px-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
              <div className=" lg:w-40 invisible absolute z-50 flex w-full flex-col bg-white mr-4 text-gray-800 shadow-xl group-hover:visible">
                <Link to={'/tjanster'} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Alla tjänster
                </Link>
                <Link to={'/tjanster/sotning/rengorning'} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Sotning
                  </Link>
                <Link to={'/tjanster/besiktningar'} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Besiktningar
                  </Link>
                  <Link to={'/tjanster/besiktningar'} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Övriga tjänster
                  </Link>
              </div>
            </div>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.name} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Image
              width={50}
              src={`${process.env.PUBLIC_URL}/sveriges-sk.png`}
              sx={{
                borderRadius: '100%',
                borderColor: 'grey.100',
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.0rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
