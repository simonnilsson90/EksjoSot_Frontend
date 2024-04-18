import {Box, Typography, Button} from '@mui/material';
import ResponsiveButton from '../../../customIcons/ResponsiveButton';



export default function LicenceComponent() {
  const typeDescription = ['All', 'Free', 'Paid', 'Custom' ]
  return (
 
      <Box
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          backgroundColor: 'transparent',
          width: '90%',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography level="h1" fontWeight={700}>Licence</Typography>
        </Box>
        
        {typeDescription.map((label, i) => (
          <ResponsiveButton
            key={i}
            label={label}
            variant="outlined"
            fullWidth={true}
          />
        ))}
      </Box>
       ) 
      }
 