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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const pages = [
  {
    name: 'Tjänster',
    link: '/tjanster',
    subLinks: [
      { name: 'Alla tjänster', link: '/tjanster' },
      { name: 'Sotning', link: '/tjanster/sotning/rengorning' },
      { name: 'Besiktningar', link: '/tjanster/besiktningar' },
      { name: 'Övriga tjänster', link: '/tjanster/ovrigatjanster' },
    ],
  },
  { name: 'Taxor', link: '/taxor' },
  { name: 'Om oss', link: '/om' },
  { name: 'Hållbarhet', link: '/hallbarhet' },
  { name: 'Kontakt', link: '/kontakt' },
];



function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseServicesMenu = () => {
    // Stäng menyn
    setAnchorElServices(null);
  };
/* */
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
            <Image className='border border-white rounded-full invisible lg:visible lg:w-9'
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
  className=' '
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
    display: { xs: 'block', md: 'none'  },
    '.MuiMenu-paper': {
      width: '200px', // Justera denna bredd så att den matchar
      left: 'calc(50% - 100px)', // Centrera menyn relativt till AppBarens bredd
      borderRadius: 0, 
    },
  }}
>
  {pages.map((page) =>
    page.subLinks ? (
      <MenuItem
  key={page.name}
  onMouseEnter={handleOpenServicesMenu}
  onMouseLeave={handleCloseServicesMenu}
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
>
  <Typography textAlign="center">
    {page.name}
  </Typography>
  <ArrowDropDownIcon
    sx={{
      marginLeft: '-10px', // Justera efter behov
      '.MuiSvgIcon-root': {
        marginLeft: '-10px', // Specifik stil för MuiSvgIcon-root om det behövs
      },
    }}
  />
</MenuItem>

    
    ) : (
      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
        <Typography textAlign="center">
          <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            {page.name}
          </Link>
        </Typography>
      </MenuItem>
    )
  )}
</Menu>

          </Box>

          <Link to="/">
            <Image className='border border-white rounded-full'
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) =>
              page.subLinks ? (
                <Box
                  key={page.name}
                  onMouseEnter={handleOpenServicesMenu}
                  onMouseLeave={handleCloseServicesMenu}
                  sx={{ position: 'relative' }}
                >
                  <Button
                    sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    {page.name}
                  </Button>
                  <Menu
                
  id="menu-services"
  anchorEl={anchorElServices}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
    borderRadius: 0, 
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
    borderRadius: 0, 
  }}
  open={Boolean(anchorElServices)}
  onClose={handleCloseServicesMenu}
  className='ml-16  mt-24 rounded-none'
  sx={{
   
    '.MuiMenu-paper': {
      width: '200px', // Använd samma bredd som för hamburgermenyn
      left: 'calc(50% - 100px)', // Centrera menyn relativt till AppBarens bredd
    },
    borderRadius: 0, 
  }}
>
  {pages.find(page => page.name === 'Tjänster')?.subLinks.map((subLink) => (
    <MenuItem key={subLink.name} onClick={handleCloseServicesMenu}>
      <Typography textAlign="center">
        <Link to={subLink.link} style={{ textDecoration: 'none', color: 'inherit' }}>
          {subLink.name}
        </Link>
      </Typography>
    </MenuItem>
  ))}
</Menu>

                </Box>
              ) : (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {page.name}
                  </Link>
                </Button>
              )
            )}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
