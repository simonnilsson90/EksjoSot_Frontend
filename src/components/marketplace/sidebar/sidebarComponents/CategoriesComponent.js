import { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { AiFillAudio } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";
import { IoIosFilm } from "react-icons/io";
import { useMediaQuery, useTheme } from '@mui/material';
import ResponsiveIcon from '../../customIcons/ResponsiveIcon';
import { useStore } from '../../stateManagement/store';
import { useNavigate, NavLink } from 'react-router-dom';
import StyledNavLink from '../../customIcons/StyledNavLink';




const typeIcons = [
  { Icon: FaCamera, type: 'Images' },
  { Icon: IoIosFilm, type: 'Video' },
  { Icon: AiFillAudio, type: 'Audio' },
  { Icon: HiDotsHorizontal, type: 'Other' }
];

export default function CategoriesComponent() {

  const { clicked, setClicked, setActiveCategory } = useStore();
  const navigate = useNavigate();

  const theme = useTheme();
  const matchesTypeTypography = useMediaQuery(theme.breakpoints.up('md'));

  function handleSortByCategory(type) {
    setActiveCategory(type);
    navigate(`/marketplace/category/${type.toLowerCase()}`);
    console.log('handleSortByCategory clicked!')
    setClicked(true)
  }


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'inherit',
        borderRadius: 1,
        width: '90%',
        p: 0,
      }}
    >
      <Typography level="h1" fontWeight={700} sx={{ p: 2, textTransform: 'uppercase' }}>
        Categories
      </Typography>
      {typeIcons.map((item, index) => (
        <StyledNavLink
          to={`/marketplace/category/${item.type.toLowerCase()}`}
          key={index}
        >
          <Grid container
            onClick={() => handleSortByCategory(item.type)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '90%',
              backgroundColor: '#fff',
              borderColor: clicked ? '#a96120' : 'black',
              p: 1,
              m: 1,
              borderWidth: 1,
              borderStyle: clicked ? '#a96120 solid 5px' : 'solid',

              borderRadius: 2
            }}
          >
            <Grid sx={{ display: 'flex', mr: 4, ml: 2 }}>
              <ResponsiveIcon Icon={item.Icon} />
            </Grid>
            {
              matchesTypeTypography &&
              <Typography level="h1" fontWeight={500}>{item.type}</Typography>
            }

          </Grid>
        </StyledNavLink>

      ))}
    </Box>
  );
}
