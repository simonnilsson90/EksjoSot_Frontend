import {Box, Typography, Grid} from '@mui/material';
import PriceRange from './sidebarComponents/PriceRangeComponent';
import LicenceComponent from './sidebarComponents/LicenceComponent';
import CategoriesComponent from './sidebarComponents/CategoriesComponent';


export default function Sidebar() {
  return (
    
    <Box sx={{ 
      flexGrow: 1, 
      width: '80%',
      height: '100%',
      p:0, 
      bottom:0,
      pl: 2, 
      pr: 2,
      position: 'relative',  // Ensures the border line is positioned relative to this box
      '::after': {  // CSS pseudo-element for adding the vertical line
        content: '""',  // Required for pseudo-elements
        position: 'absolute',
        right: 0,  // Aligns the line to the right side of the Box
        top: '50%',  // Starts at the middle of the box
        transform: 'translateY(-50%)',  // Centers the line at the middle
        height: '40%',  // Sets the height to 30% of the Box height
        width: '1px',  // Line thickness
        backgroundColor: '#B06624', 
        margin: 2 // Line color, you can customize it
      }
     }}>   

<Grid container spacing={10} sx={{ maxHeight: '100vh', overflow: 'hidden', p: 3}}>
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