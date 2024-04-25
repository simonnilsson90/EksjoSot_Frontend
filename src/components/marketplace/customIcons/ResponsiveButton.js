// ResponsiveButton.js
import React from 'react';
import { Button, useTheme } from '@mui/material';
import { useStore } from '../stateManagement/store';

const ResponsiveButton = ({ label, ...props }) => {
  const theme = useTheme();
  const { clicked } = useStore()

  return (
    <Button
      {...props} // Spread the rest of the props to the Button component
      sx={{
        bgcolor: '#c8b6a1',
        color: '#000',
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        boxShadow: 'clicked ? #a96120 :  white',
        m: 1,
        flexWrap: 'wrap',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
        ...(theme.breakpoints.down('sm')) && {
          fontSize: '0.3rem',
          fontWeight: 'normal',
        },
        ...(theme.breakpoints.down('md')) && {
          fontSize: '0.8rem',
          fontWeight: 'bold',
        },
        ...(theme.breakpoints.up('md')) && {
            fontSize: '0.9rem',
            fontWeight: 'bold',
          },
        ...props.sx, // Allow for custom styles via props
      }}
    >
      {label}
    </Button>
  );
};

export default ResponsiveButton;
