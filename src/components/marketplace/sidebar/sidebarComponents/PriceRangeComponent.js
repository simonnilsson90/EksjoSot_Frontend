import PropTypes from 'prop-types';
import { useState } from 'react'
import {Box, Typography} from '@mui/material';
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';
import { useStore } from '../../stateManagement/store';



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
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
};



export default function PriceRange() {

  const theme = useTheme();
 
  const { value, setValue } = useStore( state => ({
    value: state.value,
    setValue: state.setValue
  }));
 
    
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
          bottom: 0,
          p: 0,
          height: 'auto'
        }}
      >
        <Box sx={{p:2}} >
           <Typography level="h1" sx={{fontWeight: 700, textTransform: 'uppercase'}}>Price Range</Typography>
        </Box>
       
       <Item sx={{p: 2}}>
              <Slider
          getAriaLabel={() => 'Price range'}
          max={300}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            color: '#f28b30', width: '80%',
            '& .MuiSlider-track': { bgcolor: theme.palette.primary.main },
            '& .MuiSlider-rail': {
                color: 'transparent',
                bgcolor: 'transparent',
            },
            '& .MuiSlider-thumb': {
                bgcolor: '#f28b30',
            },
            '& .MuiSlider-root': {
                color: 'transparent',
                bgcolor: '#f28b30',
            }
        }}
    />
       
        <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        }}>
          <Typography >{value[0]}</Typography>
          <Typography>{value[1]}</Typography>
            </Box>
       
          </Item>
          </Box>
   
  );
}