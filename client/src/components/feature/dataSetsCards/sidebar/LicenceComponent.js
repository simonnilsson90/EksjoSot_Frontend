import PropTypes from 'prop-types';
import {Box, Typography, Grid, Button} from '@mui/material';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        width: '80%',
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};


const typeDescription = ['All', 'Free', 'Paid', 'Custom' ]

export default function CategoriesComponent() {
  return (
    <div style={{ width: '100%' }}>
    
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 2,
          m: 1,
          height: '100vh',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography level="h1" >Licence</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {typeDescription.map((Icon, i) => (
            <Grid item xs={12} key={i}>
              <Item>
                
                <Button variant="text">
                    <Typography>{Icon}</Typography>
                </Button>
              </Item>
             
            </Grid>
          ))}
        </Grid>


       </Box>
     
    </div>
  );
}