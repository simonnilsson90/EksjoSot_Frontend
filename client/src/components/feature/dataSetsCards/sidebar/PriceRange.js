import PropTypes from 'prop-types';
import { useState } from 'react'
import {Box, Typography, Grid, Button} from '@mui/material';
import Slider from '@mui/material/Slider';


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



export default function PriceRange() {
    const [value, setValue] =useState([0, 10000]);
    
function valuetext(value) {
    return `${value}$`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Typography level="h1" >Price Range</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }}>
          
            <Grid item xs={12}>
              <Item>
              <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
              </Item>
             
            </Grid>
          
        </Grid>


       </Box>
     
    </div>
  );
}