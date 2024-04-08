import {Box, Typography, Button} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';




export default function CategoriesComponent() {
  const typeDescription = ['All', 'Free', 'Paid', 'Custom' ]
  return (
  
     <Box
        sx={{
          alignItems: 'flex-start',
          bgcolor: 'background.paper',
          borderRadius: 1,
          p: 1,

        }}
      >
        <Typography level="h1" >Licence</Typography>
       
          {typeDescription.map((Label, i) => (
                         
              <ButtonGroup size="small" aria-label="Small button group">
              <Button
      variant="text"
      key={i}
      sx={{
        bgcolor: 'primary.main', // Use the theme's primary main color
        color: 'white', // Text color
        m: 1,
        flexWrap: 'wrap',
        fontSize: '1rem', // Text size
        '&:hover': {
          bgcolor: 'primary.dark', // Change background color on hover
        },
        
      }}
    >
                    {Label}
                </Button>
              </ButtonGroup>  
             
           
          ))}
       </Box>
       ) }
 