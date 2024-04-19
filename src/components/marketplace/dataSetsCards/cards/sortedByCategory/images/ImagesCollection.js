import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Box, IconButton, CardActions } from '@mui/material';
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
    <Grid container spacing={5} sx={{position: 'reltive', width: '100%', justifyContent: 'center', mb: 5, overflow: 'scroll'}} >  
    <Grid item xs={12} sx={{ height: '100%' }}>
    <ResponsiveIcon Icon={FaCamera} style={{ marginTop: '25px', marginLeft: '20px'}} text={<Typography sx={{ fontWeight: 'bold' }}>Images</Typography>}
    textStyle={{fontSize: theme.typography.body1.fontSize}}/>
    </Grid>
               
      {imageData.map((item, i) => (
        
        <Grid item xs={10} sm={6} md={4} key={i}>
  <Card 
    sx={{ 
        maxWidth: 209, 
        borderRadius: 3, 
        overflow: 'hidden', 
        objectFit: 'cover', 
        height: 230, 
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
      <Box sx={{display: 'flex',  mt: 2, justifyContent: 'space-between'}}>
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
  );
}

export default ImagesCollection;

 