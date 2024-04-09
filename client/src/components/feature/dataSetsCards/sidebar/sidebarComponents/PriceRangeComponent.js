import PropTypes from 'prop-types';
import { useState } from 'react'
import {Box, Typography} from '@mui/material';
import Slider from '@mui/material/Slider';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        width: '100%',      
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
     <Box
        sx={{
          display: 'flex',
         flexDirection: 'column',
          backgroundColor: 'transparent',
          borderRadius: 1,
          bottom: 0
        }}
      >
        <Box sx={{p:2}} >
           <Typography level="h1" fontWeight={700}>Price Range</Typography>
        </Box>
       
       
              <Item sx={{p: 2}}>
              <Slider
         getAriaLabel={() => 'Temperature range'}
       max={10000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{color: '#f28b30', backgroundColor: '#fff', width: '80%','& .MuiSlider-track': {
          bgcolor: '#f28b30', // Changes track background color
        },
        '& .MuiSlider-rail': {
          color: 'transparent',
          bgcolor: 'transparent', // Optional: Changes the rail (the part not filled by the track) background color
        },
        '& .MuiSlider-thumb': {
          bgcolor: '#f28b30', // Optional: Changes the thumb color
        },
        '& .MuiSlider-root.MuiSlider': {
          color: 'transparent',
          bgcolor: '#f28b30',
        }
       }}
      />
       <Typography >
                ${value[0]} - ${value[1]}
       </Typography>
              </Item>
          </Box>
   
  );
}