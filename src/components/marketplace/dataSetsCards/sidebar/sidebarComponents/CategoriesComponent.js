import { Box, Typography, Grid } from '@mui/material';
import { AiFillAudio } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";
import { IoIosFilm } from "react-icons/io";
import { useMediaQuery, useTheme } from '@mui/material';
import ResponsiveIcon from '../../../customIcons/ResponsiveIcon';
import { useStore } from '../../../stateManagement/store';
import { useNavigate, Link } from 'react-router-dom';




const typeIcons = [
  { Icon: FaCamera, type: 'Images'},
  { Icon: IoIosFilm, type: 'Video'},
  { Icon: AiFillAudio, type: 'Audio'},
  { Icon: HiDotsHorizontal, type: 'Other'}
];

export default function CategoriesComponent() {
  const { setActiveCategory } = useStore();
  const navigate = useNavigate();

  const theme = useTheme();
  const matchesTypeTypography = useMediaQuery(theme.breakpoints.up('md'));

  function handleSortByCategory(type) {
    setActiveCategory(type);
    navigate(`/marketplace/category/${type.toLowerCase()}`);
    console.log('handleSortByCategory clicked!')
  }


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        borderRadius: 1,
        width: '90%',
        p: 0,
        }}
    >
        <Typography level="h1" fontWeight={700} sx={{ p: 2 }}>
          Categories
        </Typography>
      {typeIcons.map((item, index) => (
  <Link to={`/marketplace/category/${item.type.toLowerCase()}`} key={index} style={{textDecoration: 'none', color: 'inherit' }}>
           <Grid container
            onClick={() => handleSortByCategory(item.type)}
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
