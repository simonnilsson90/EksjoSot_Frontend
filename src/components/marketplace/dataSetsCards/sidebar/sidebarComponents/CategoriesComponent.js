import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { AiFillAudio } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";
import { IoIosFilm } from "react-icons/io";
import { useMediaQuery, useTheme } from '@mui/material';
import ResponsiveIcon from '../../../customIcons/ResponsiveIcon';

const typeIcons = [
  { Icon: FaCamera, type: 'Images', path: '/marketplace/images' },
  { Icon: IoIosFilm, type: 'Video', path: '/marketplace/video' },
  { Icon: AiFillAudio, type: 'Audio', path: '/marketplace/audio' },
  { Icon: HiDotsHorizontal, type: 'Other', path: '/marketplace/other' }
];

export default function CategoriesComponent() {
  const theme = useTheme();
  const matchesArrows = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesTypeTypography = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        borderRadius: 1,
        width: '90%',
        p: 0
      }}
    >
      {matchesArrows && (
        <Typography level="h1" fontWeight={700} sx={{ p: 2 }}>
          Categories
        </Typography>
      )}
      {typeIcons.map((item, i) => (
        <Link to={item.path} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Grid 
            sx={{ display: 'flex', 
            alignItems: 'center', 
            width: '90%',  
            backgroundColor: '#fff', 
            borderColor: 'black',
            p: 1,
            m: 1,
            borderWidth: 1, 
            borderStyle: 'solid',
            borderRadius: 2}}
          >
            <Grid sx={{ display: 'flex', mr: 4, ml: 2 }}>
              <ResponsiveIcon Icon={item.Icon} />
            </Grid>
            {
              matchesTypeTypography &&
               <Typography level="h1" fontWeight={500}>{item.type}</Typography>
            }
            
          </Grid>
        </Link>
      ))}
    </Box>
  );
}
