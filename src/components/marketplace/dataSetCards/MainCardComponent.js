import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import theme from '../theme/Theme';
import { Box } from '@mui/material';
import HeartIcon from '../customIcons/HeartIcon';


export default function CardsComponent({ item }) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const CustomHeartIcon = (<HeartIcon
  fillColor={favorite ? 'red' : 'none'}  // Fill color changes on click
  strokeColor= {theme.palette.primary.main} // Stroke color changes on click
  strokeWidth="2"
  size="24"
  onClick={toggleFavorite}
/>)


  return (
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
      
    {CustomHeartIcon}
       
     </CardActions>
      
      </Box>
     
       
    
    </Card>
  );
}
