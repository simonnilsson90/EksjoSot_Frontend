import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Grid, Box } from '@mui/material';


function CardsComponent({ item}) {
  
  return (
  <Card sx={{ 
  width: '80%', 
  backgroundColor: '#2F2A29', 
  mb: 3, 
  alignItems: 'center', 
  p: 1, 
  height: '11em',
  borderRadius: 2
}}
  >
            <CardMedia
              component="img"
              height={94.59}
              image={item.image}
              alt="people"
              sx={{p: 1, borderRadius: 3, objectFit: 'cover', 
              display: 'block', 
              margin: 'auto', 
              width: '100%', 
              maxHeight: '100%',}}
              
            />
            <Box sx={{height: '2em', m: .5}}>
             <Typography variant="body2" color="#fff" align='center'>
              {item.description} 
            </Typography> 
            </Box>
            
            <Grid container justifyContent="space-between" alignItems="center" sx={{height: '3em'}}>
              <Grid item sx={{height: '100%'}}>
                <Typography variant="body2" color="#fff">
                  {item.price}
                </Typography>
              </Grid>
              <Grid item sx={{height: '100%'}}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon style={{ color: '#fff',fontSize: 20 }}/>
                </IconButton>
              </Grid>
            </Grid>
          </Card>
   
  );
}

export default CardsComponent;
