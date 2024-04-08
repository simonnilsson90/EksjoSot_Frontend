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


const typeIcons = [FaCamera , AiFillAudio , IoIosFilm , HiDotsHorizontal ]

export default function FlexDirection() {
  return (
    <div style={{ width: '15%' }}>
    
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
        <Typography level="h1" >Categories</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {typeIcons.map((Icon, i) => (
            <Grid item xs={12} key={i}>
              <Item>
                <Typography></Typography>
                <Icon />
              </Item>
             
            </Grid>
          ))}
        </Grid>


       </Box>
     
    </div>
  );
}