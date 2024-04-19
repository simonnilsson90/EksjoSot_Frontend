import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography, Grid, Box } from '@mui/material';
import data from '../../../../../../data/dataArray';

function VideoPage() {
  const videoData = data.filter(item => item.type === 'Video');

  return (
    <Grid container spacing={3}> 
      {videoData.map((item, i) => (
        <Grid item xs={12} sm={3} md={3} key={i}> 
          <Card
            sx={{
              backgroundColor: '#2F2A29',
              mb: 3,
              alignItems: 'center',
              p: 1,
              height: '11em',
              width: '100%', 
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              height={94.59}
              image={item.image}
              alt="people"
              sx={{
                p: 1,
                borderRadius: 3,
                objectFit: 'cover',
                display: 'block',
                margin: 'auto',
                width: '100%', // Ensure the image also takes the full width of the card
                maxHeight: '100%',
              }}
            />
            <Box sx={{ height: '2em', m: 0.5 }}>
              <Typography variant="body2" color="#fff" align='center'>
                {item.description}
              </Typography>
            </Box>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ height: '3em' }}>
              <Grid item sx={{ height: '100%' }}>
                <Typography variant="body2" color="#fff">
                  {item.price}
                </Typography>
              </Grid>
              <Grid item sx={{ height: '100%' }}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon style={{ color: '#fff', fontSize: 20 }} />
                </IconButton>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default VideoPage;
