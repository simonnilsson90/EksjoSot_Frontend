import { useState } from 'react';
import { Card, CardMedia, Typography, Grid, Box, CardActions, CardContent } from '@mui/material';
import data from '../../../../../../data/dataArray'; // Ensure path is correct
import HeartIcon from '../../../../customIcons/HeartIcon';
import { useParams } from 'react-router-dom';
import theme from '../../../theme/Theme';
import ResponsiveIcon from '../../../../customIcons/ResponsiveIcon';
import { FaCamera } from "react-icons/fa";
import { IoIosFilm } from "react-icons/io";
import { AiFillAudio } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";

const audio = AiFillAudio
const video = IoIosFilm
const image = FaCamera
const other = HiDotsHorizontal

export default function CategoryDisplay() {
  const [favorite, setFavorite] = useState({});
  const { categoryType } = useParams();
  
  const filteredData = data.filter(item => item.type.toLowerCase() === categoryType.toLowerCase())
   
  console.log("Category Type from URL:", categoryType);

  const toggleFavorite = (i) => {
    setFavorite(prevFavorite => ({
      ...prevFavorite,
      [i]: !prevFavorite[i]
    }));
  };

  // Check if there's any data to display
  if (!filteredData.length) {
    return <Typography variant="h5" sx={{ mt: 4, textAlign: 'center' }}>No data available for this category.</Typography>;
  }

  

  return (

      <Box sx={{
        position: 'relative', width: '90%', m: 5, pb: 10, mt: 2, mr: 5, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'
      }}>
            
   <Grid container spacing={5}>
        <Grid item xs={12} sx={{ height: '5%' }}>
          {/* <ResponsiveIcon Icon={filteredData.icon} style={{ marginTop: '25px', marginLeft: '20px'}} text={ */}
          <Typography sx={{ fontWeight: 'bold' }}>{filteredData.type}</Typography>
        {/* }
          textStyle={{fontSize: theme.typography.body1.fontSize}}/> */}

        </Grid>   
        {filteredData.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={2.3} key={i}>
            <Card sx={{ 
              width: 'auto',
              borderRadius: 3, 
              overflow: 'hidden', 
              objectFit: 'cover', 
              height: 250, 
              alignItems: 'center', 
              bgcolor: theme.palette.background.default,
              mb: 3, 
              mt: 3,
              ml: 3,
              mr: 3
            }}>
             <CardContent sx={{ maxHeight: 150, m: .5 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.type}
                  sx={{ borderRadius: 3, objectFit: 'cover', width: '100%', height: 120,  }}
                />
                <Typography variant="body2" sx={{ color: 'text.primary', mt: 3, fontFamily: 'fontFamily', fontSize: theme.typography.body1.fontSize }}>
                  {item.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', mt: 12, justifyContent: 'space-between', bottom: 2 }}>
                <CardContent>
                  <Typography sx={{ color: "primary.main" }}>
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

