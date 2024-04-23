import {Box, Typography, Button} from '@mui/material';
import ResponsiveButton from '../../../customIcons/ResponsiveButton';
import { useStore } from '../../../stateManagement/store';
import { useNavigate, Link } from 'react-router-dom';



export default function LicenceComponent() {
  const { setActiveLicense } = useStore();
  const navigate = useNavigate();


  const typeDescription = [{license: 'All'}, {license: 'Free'}, {license: 'Paid'}, {license: 'Custom'} ]

  function handleSortByLicense(license) {
    setActiveLicense(license);
    navigate(`/marketplace/licence/${license.toLowerCase()}`)
    console.log('license clicked!')
  }


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
        
        {typeDescription.map((item, i) => (
        <Link 
        to={`/marketplace/license/${item.license.toLowerCase()}`} 
        key={i} 
        style={{textDecoration: 'none', color: 'inherit' 
        }}>
          <ResponsiveButton
          label={item.license}
          onClick={() => handleSortByLicense(item.license)}
          variant="outlined"
          fullWidth={true}
        />
        </Link>
        ))}
        
      </Box>
       ) 
      }
 