//  <div className="relative h-dvh bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';

export default function BokaPage() {
  const [service, setService] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [dateDesired, setDateDesired] = React.useState('');
  const [adress, setAdress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');


  const handleSubmit = async () => {
    const data = {
      fields: {
        service: { stringValue: service },
        message: { stringValue: message },
        adress: { stringValue: adress },
        fullName: { stringValue: fullName },
        phone: { stringValue: phone },
        dateDesired: { stringValue: dateDesired },
        email: { stringValue: email },
      }
    };

    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/eksjosot/databases/(default)/documents/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Bokningen har skickats!');
      } else {
        alert('Något gick fel, vänligen försök igen.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Något gick fel, vänligen försök igen.');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }} >
      <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen"> 
        <div className=' pb-20 justify-center flex flex-col align-middle items-center '>
          <h1 className='mt-10 text-gray-100 text-4xl'>Boka tid</h1>
        
          <div className=' bg-sot px-4 rounded-md pb-4  '> 
            <div className=' mx-auto mt-6 mb-4 w-80 flex flex-col  '>
            <div className=' text-gray-100'>
                  <Label >Välj tjänst</Label>
                  </div>
              <Box sx={{ minWidth: 40,backgroundColor: "white"  }}>
            
                <FormControl fullWidth>
                <div className=' text-gray-100'>
                  <InputLabel sx={{ color: "black", backgroundColor: "white" }} id="demo-simple-select-label">Välj tjänst</InputLabel>
           </div>
                  
                  <Select 
                    sx={{ color: "white" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={service}
                    label="Age"
                    onChange={(e) => setService(e.target.value)}
                  >
                    <MenuItem value={"Sotning"}>Sotning</MenuItem>
                    <MenuItem value={"Besiktning"}>Besiktning</MenuItem>
                    <MenuItem value={"Sotning och brandskyddskontroller"}>Sotning och brandskyddskontroller</MenuItem>
                    <MenuItem value={"Övriga tjänster"}>Övriga tjänster</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className='mb-6'>
              <div className='flex flex-col space-y-2'>
                <FormControl  defaultValue="" required>
                  <div className=' text-gray-100'>
                  <Label >Namn</Label>
                  </div>
                 
                  <StyledInput
                    placeholder="För och efternamn"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <HelperText />
                </FormControl>

                <FormControl defaultValue="" required>
                <div className=' text-gray-100'>
                  <Label sx={{ color: "white" }}>Önskemål om datum/tid</Label>
                  </div>
                  <StyledInput
                    placeholder="Välj datum/tid"
                    value={dateDesired}
                    onChange={(e) => setDateDesired(e.target.value)}
                  />
                  <HelperText />
                </FormControl>
                <FormControl defaultValue="" required>
                <div className=' text-gray-100'>
                  <Label sx={{ color: "white" }}>Adress</Label>
                  </div>
                  <StyledInput
                    placeholder="Din adress"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                  <HelperText />
                </FormControl>
                <FormControl defaultValue="" required>
                <div className=' text-gray-100'>
                  <Label sx={{ color: "white" }}>Telefon</Label>
                  </div>
                  <StyledInput
                    placeholder="Ditt telefonnummer"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <HelperText />
                </FormControl>
                <Box>
                  <FormControl defaultValue="" required>
                  <div className=' text-gray-100'>
                    <Label sx={{ color: "white" }}>E-post</Label>
                    </div>
                    <StyledInput
                      placeholder="Din E-post"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <HelperText />
                  </FormControl>
                </Box>
              </div>
              <div className='mt-4'>
                <Box>
                <div className=' text-gray-100'>
                  <Label sx={{ color: "white" }}>Ärende</Label>
                  </div>
                  <TextField
                    id="outlined-multiline-static"
                    label="Beskriv ditt ärende"
                    multiline
                    rows={4}
                    placeholder='Ärende'
                    sx={{
                      marginTop: "1rem",
                      textTransform: "none",
                      width: "20rem",
                      marginBottom: "2px",
                      backgroundColor: 'white'
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Box>
              </div>
            </div>
            <div className='mx-auto'> 
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: "20rem",
                  color: "white",
                  marginBottom: "2px",
                  backgroundColor: "rgb(224, 95, 51)",
                  border: "0px",
                  fontSize: "1.4rem",
                  lineHeight: "2rem",
                  borderRadius: "0.5rem"
                }}
                onClick={handleSubmit}
              >
                Skicka förfrågan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `
    .${inputClasses.input} {
      width: 320px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      &:hover {
        border-color: ${blue[400]};
      }
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      }
    }
  `,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;
  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};
