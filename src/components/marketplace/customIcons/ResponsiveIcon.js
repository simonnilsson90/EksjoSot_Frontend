import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

// ResponsiveIconComponent that takes an Icon and props
const ResponsiveIcon = ({ Icon, style = {}, iconProps = {}, text, textStyle = {} }) => {
  
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  // xl is everything larger than 'lg', no need for a specific query

  let size = 24; // Default size for 'xl' screens and above
  if (lg) size = 22; // 'lg' screen size
  if (md) size = 20; // 'md' screen size
  if (sm) size = 18; // 'sm' screen size
  if (xs) size = 16; // 'xs' screen size

  // Return the Icon with the responsive size and any additional props
  return (
    <Box display="flex" alignItems="center" style={style}>
     
      <Icon size={size} {...iconProps} />
      {/* Optionally render text if provided */}
      {text && <Box style={{ marginLeft: 8, ...textStyle }}>{text}</Box>}
    </Box>
  );
};

export default ResponsiveIcon;
