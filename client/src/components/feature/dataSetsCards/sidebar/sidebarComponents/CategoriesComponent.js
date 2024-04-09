import PropTypes from 'prop-types';
import {Box, Typography, Grid} from '@mui/material';
import { AiFillAudio } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";
import { IoIosFilm } from "react-icons/io";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
      
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 3,
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


const typeIcons = [{icon: FaCamera, type: 'Images'} ,{icon: IoIosFilm, type: 'Video'} , {icon: AiFillAudio, type: 'Audio'},  {icon: HiDotsHorizontal, type: 'Other'} ]

export default function CategoriesComponent() {
  return (
  <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'transparent',
          borderRadius: 1,   
          width: '90%'       
        }}
      >
        <Box sx={{p: 2}}>
          <Typography level="h1" fontWeight={700}>Categories</Typography>
        </Box>
        
          {typeIcons.map((Icon, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', width: '90%',  backgroundColor: '#fff', borderColor: 'black',
            p: 1,
            m: 1,
            borderWidth: 1, 
            borderStyle: 'solid',
            borderRadius: 2}}>
              <Box sx={{display: 'flex', mr: 2, ml: 1}}>
                <Icon.icon />
              </Box>
                
                <Box>
                   <Typography>{Icon.type}</Typography>
                </Box>
               
              </Box>
            ))}



       </Box>
   
  );
}