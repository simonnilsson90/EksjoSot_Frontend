import {Box, Typography, Grid} from '@mui/material';
import PriceRange from './sidebarComponents/PriceRangeComponent';
import LicenceComponent from './sidebarComponents/LicenceComponent';
import CategoriesComponent from './sidebarComponents/CategoriesComponent';






export default function Sidebar() {
  return (
    // <div style={{ width: '20%' }}>
    <Box sx={{ flexGrow: 1, width: '25%' }}>   
<Grid container spacing={1} sx={{ maxHeight: '100vh', overflow: 'hidden' }}>
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
}