import {Box, Typography, Button, Paper} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';




export default function CategoriesComponent() {
  const typeDescription = ['All', 'Free', 'Paid', 'Custom' ]
  return (
  
     <Box
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          backgroundColor: 'transparent',
          width: '90%'
        }}
      >
        <Box sx={{p: 2}}>
          <Typography level="h1" fontWeight={700} >Licence</Typography>
        </Box>

         {typeDescription.map((Label, i) => (
        <Button
      key={i}
      variant="outlined"
      sx={{
        bgcolor: '#c8b6a1', // Use the theme's primary main color
        color: '#000', // Text color
        borderColor: 'white',
        borderWidth: 1, 
        borderStyle: 'solid',
        m: 1,
      
        flexWrap: 'wrap',
        fontSize: '.8rem', // Text size
        '&:hover': {
          bgcolor: 'primary.dark', // Change background color on hover
        },
        
      }}
    >
                    {Label}
                </Button>
           
   ))}
       </Box>
       ) }
 