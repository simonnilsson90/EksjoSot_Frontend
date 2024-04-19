// import {Box, Typography, Grid} from '@mui/material';
// import PriceRange from './sidebarComponents/PriceRangeComponent';
// import LicenceComponent from './sidebarComponents/LicenceComponent';
// import CategoriesComponent from './sidebarComponents/CategoriesComponent';


// export default function Sidebar() {
//   return (
    
//     <Box sx={{ 
//       flexGrow: 1, 
//       width: '80%',
//       height: '100%',
//       p:0, 
//       bottom:0,
//       pl: 2, 
//       pr: 2,
//       position: 'relative',  // Ensures the border line is positioned relative to this box
//       '::after': {  // CSS pseudo-element for adding the vertical line
//         content: '""',  // Required for pseudo-elements
//         position: 'absolute',
//         right: 0,  // Aligns the line to the right side of the Box
//         top: '50%',  // Starts at the middle of the box
//         transform: 'translateY(-50%)',  // Centers the line at the middle
//         height: '40%',  // Sets the height to 30% of the Box height
//         width: '1px',  // Line thickness
//         backgroundColor: '#B06624', 
//         margin: 2 // Line color, you can customize it
//       }
//      }}>   

// <Grid container spacing={10} sx={{ maxHeight: '100vh', overflow: 'hidden', p: 3}}>
// <Grid item xs={12}>

// <CategoriesComponent />
// </Grid>

// <Grid item xs={12}>
// <LicenceComponent />
// </Grid>
// <Grid item xs={12}>
// <PriceRange />

// </Grid>

// </Grid>

//    </Box>  

//   );
// }


import React, { useState } from 'react';
import { Box, Grid, Drawer, IconButton, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PriceRange from './sidebarComponents/PriceRangeComponent';
import LicenceComponent from './sidebarComponents/LicenceComponent';
import CategoriesComponent from './sidebarComponents/CategoriesComponent';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjusts to less than 600px
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} color={'#000'}>
      <Grid container spacing={2} sx={{ maxHeight: '100vh', overflow: 'auto', p: 3 }}>
        <Grid item xs={12}>
          <CategoriesComponent />
        </Grid>
        <Grid item xs={12}>
          <LicenceComponent />
        </Grid>
        <Grid item xs={12}>
          <PriceRange />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: isMobile ? 'block' : 'none', top: 30, left: 15 }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Box sx={{ 
          flexGrow: 1, 
          width: '80%',
          height: '100%',
          p: 0,
          pl: 2,
          pr: 2,
          position: 'relative',
          '::after': {
            content: '""',
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            height: '40%',
            width: '1px',
            backgroundColor: '#B06624',
            margin: 2,
           }
        }}>
          <Grid container spacing={10} sx={{ maxHeight: '100vh', overflow: 'hidden', p: 3 }}>
            <Grid item xs={12}>
              <CategoriesComponent />
            </Grid>
            <Grid item xs={12}>
              <LicenceComponent />
            </Grid>
            <Grid item xs={12}>
              <PriceRange />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
