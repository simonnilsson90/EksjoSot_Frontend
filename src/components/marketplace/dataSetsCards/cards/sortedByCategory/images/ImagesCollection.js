import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Box, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import data from '../../../../../../data/dataArray';
import { FaCamera } from "react-icons/fa";
import HeartIcon from '../../../../customIcons/HeartIcon';
import theme from '../../../theme/Theme'
import ResponsiveIcon from '../../../../customIcons/ResponsiveIcon';

function ImagesCollection() {
  const [favorite, setFavorite] = useState({});

  const imageData = data.filter(item => item.type === 'Images');

  const toggleFavorite = (i) => {

    setFavorite(prevFavorite => ({
      ...prevFavorite,
      [i]: !prevFavorite[i]
    }) );
  }; 



  return (
    <Box sx={{
      position: 'reltive', width: '90%', m: 5, pb: 10, mt: 2, mr: 5
      }}>
    <Grid container spacing={5}  >  
    <Grid item xs={12} sx={{ height: '100%' }}>
    <ResponsiveIcon Icon={FaCamera} style={{ marginTop: '25px', marginLeft: '20px'}} text={<Typography sx={{ fontWeight: 'bold' }}>IMAGES</Typography>}
    textStyle={{fontSize: theme.typography.body1.fontSize}}/>
    </Grid>
               
      {imageData.map((item, i) => (
        
        <Grid item xs={12} sm={6} md={4} lg={2.3} key={i} overflow-y={'hidden'} display={'block'}>
  <Card 
    sx={{ 
        width: 'auto',
        borderRadius: 3, 
        overflow: 'hidden', 
        objectFit: 'cover', 
        height: 250, 
        alignItems: 'center', 
        bgcolor: theme.palette.background.default,
        mb: 3, 
        mt: 3,
        ml: 5,
        mr: 5
        }}
        >

     <CardContent sx={{maxHeight: 150, m: 1, }}>
      <CardMedia
        component="img"
        image={item.image}
        alt="faces"
        sx={{ borderRadius: 3, 
          objectFit: 'cover', 
          width: '100%', 
          maxHeight: 95 }}
      />
     <Typography variant="body2" sx={{color: 'text.primary', mt: 3,fontFamily: 'fontFamily', fontSize: (theme) => theme.typography.body1.fontSize}} >
        {item.description} 
        </Typography>
      </CardContent>
      <Box sx={{display: 'flex',  mt: 12, justifyContent: 'space-between', bottom: 2}}>
        <CardContent>
      <Typography sx={{color: "primary.main"}} >
        {item.price}
        </Typography>
         </CardContent>
      <CardActions disableSpacing>
      
      <HeartIcon
              onClick={() => toggleFavorite(i)}
              fillColor={favorite[i] ? 'red' : 'none'}
              strokeColor={theme.palette.primary.main}
              strokeWidth="2"
              size="24"
              />       
     </CardActions>
      
      </Box>
     
       
    
    </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
}

export default ImagesCollection;

 