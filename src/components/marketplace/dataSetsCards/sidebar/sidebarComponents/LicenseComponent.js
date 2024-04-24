import {Box, Typography, Button} from '@mui/material';
import ResponsiveButton from '../../../customIcons/ResponsiveButton';
import { useStore } from '../../../stateManagement/store';
import { useNavigate, Link } from 'react-router-dom';
import StyledNavLink from '../../../customIcons/StyledNavLink';



export default function LicenceComponent() {
  const { setActiveLicense, setClicked } = useStore();
  const { setCustomLicenseClicked } = useStore(state => 
    ({ setCustomLicenseClicked: state.setCustomLicenseClicked
    }));
  const navigate = useNavigate();


  const typeDescription = [{license: 'All'}, {license: 'Free'}, {license: 'Paid'}, {license: 'Custom'} ]

  function handleSortByLicense(license) {
    setActiveLicense(license);
    navigate(`/marketplace/licence/${license.toLowerCase()}`)
    console.log('license clicked!')
    setClicked(true) 
    if(license.toLowerCase() === 'custom') {
      setCustomLicenseClicked(true)
    } else {
      setCustomLicenseClicked(false)
    }
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
          <Typography level="h1" sx={{fontWeight: 700, textTransform: 'uppercase'}} >License</Typography>
        </Box>
        
        {typeDescription.map((item, i) => (
        <StyledNavLink 
        to={`/marketplace/license/${item.license.toLowerCase()}`} 
        key={i} 
        >
          <ResponsiveButton
          label={item.license}
          onClick={() => handleSortByLicense(item.license)}
          variant="outlined"
          fullWidth={true}
        />
        </StyledNavLink>
        ))}
        
      </Box>
       ) 
      }
 