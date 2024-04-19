import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography, Grid, Box } from '@mui/material';
import data from '../../../../../../data/dataArray';
import { FaCamera } from "react-icons/fa";
import theme from '../../../theme/Theme';
import ResponsiveIcon from '../../../../customIcons/ResponsiveIcon';


export default function ImagesPage() {
  const imageData = data.filter(item => item.type === 'Images');

  return (
    <>
   <Box alignItems="center"  mt={8} p={2} display={'block'}>
  <ResponsiveIcon Icon={FaCamera} />  
  </Box>  
 <Grid container spacing={3} >
 
  
    {imageData.map((item, i) => (
     
        <Grid item sm={6} md={3} lg={3} m={4}>
      <Card
      key={i}
      sx={{ 
        width: '15em',   
        height: '16em',
        backgroundColor: theme.palette.background.default, 
        mb: 3, 
        alignItems: 'center', 
        p: 1,
        marginTop: 3, 
        borderRadius: 2
      }}
      >
        <CardMedia
              component="img"
              height={'10em'}
              image={item.image}
              alt="people"
              sx={{p: 1, borderRadius: 3, objectFit: 'cover', 
              display: 'block', 
              margin: 'auto', 
              width: '100%', 
              maxHeight: '100%',}}
              
            />
             <Box sx={{height: '6em', mt: 5}}>
             <Typography variant="body2" color="#fff" align='center'>
              {item.description} 
            </Typography> 
            </Box>

            <Grid container justifyContent="space-between" alignItems="center" mb={1} >
              <Grid item sx={{height: '100%'}}>
                <Typography variant="body2" color="primary.main">
                  {item.price}
                </Typography>
              </Grid>
              <Grid item sx={{height: '100%'}}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon style={{ color: theme.palette.primary.main, fontSize: 20 }}/>
                </IconButton>
              </Grid>
            </Grid>
   
    </Card>
        </Grid>
   
    ))}
     </Grid> 
    
</>
  )
}