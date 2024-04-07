import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Grid, Box } from '@mui/material';


function CardsComponent({index, item}) {
  
  return (
    <Box  mx="auto" mt={4}>
        
        <div> 
          <Card sx={{ width: 209 }}>
            <CardMedia
              component="img"
              height={94.59}
              image={item.image}
              alt="people"
            />
            <Typography variant="body2" color="text.secondary" align='center'>
              {item.description} 
            </Typography>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Card>
        </div>
  
    </Box>
  );
}

export default CardsComponent;
