import SideNav from "../sideNav/sideNavComponent";
import "./createDatasetComponent.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function CreateDataset() {

    const [category, setCategory] = React.useState('');
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleChange = (event) => {
      setCategory(event.target.value);
    };

  

    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
     
      overflow: 'hidden',
  
     
      
      whiteSpace: 'nowrap',
      width: 1,
      textTransform: 'none'
    });


    return (
        <div className="parentDiv" >
            <SideNav/> 
            
            
            
            <div className="padding-left-1">
<h1>Create a data set</h1>
        <p className="text">Upload and manage your data to use in Data Studio.
             You can add a description and tags to help others find your data set.</p>
           
             <Box 
      component="form"
      sx={{
        '& > :not(style)': {  width: '450px' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className="box"> 
      <TextField id="outlined-basic" label="Data set name" variant="outlined" />
      <TextField multiline rows={4} id="outlined-basic" label="Description" variant="outlined" />
      </div>
    </Box>
    <Box sx={{ minWidth: 100, marginTop: 3, width:450 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"Photo"}>Face image</MenuItem>
          <MenuItem value={"Voice"}>Voice</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    <h4>Privacy</h4>
    <Box sx={{ minWidth: 100, marginTop: 3, width:450 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Public</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"Photo"}>Public</MenuItem>
          <MenuItem value={"Voice"}>Private</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    
    <div className="flex">
    <p  >I agree to the  <Link className="terms"
      to="/termsOfService" >
      Terms of Service
    </Link> </p>
      <Checkbox  {...label}  />
    </div>
    
    
    <Button
  sx={{
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    textTransform: 'none',
    color: 'black',
    backgroundColor: 'rgba(232, 237, 245, 1)',
    borderColor: 'transparent',
    borderRadius: '10px',
    width: '200px', // Justera bredden här
    padding: '5px 10px', // Lägg till padding här för att justera utrymmet runt ikonen och texten
    overflow: 'hidden',
    '& input[type=file]': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      cursor: 'pointer',
      zIndex: 2,
    },
    '& svg': {
     
      marginRight: '1px', // Minska avståndet mellan ikonen och texten
    },
    '&::after': {
      content: '"Choose file"',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      zIndex: 1,
      paddingRight: '60px'
    }
  }}
  startIcon={<InsertDriveFileOutlinedIcon />}
>
  <input type="file" />
</Button>






    <p> The file you upload should be a CSV, TSV, or Google Sheet. The maximum file size is 10MB.</p>
   
    <div className="buttonMargin-1 ">

                <Link  to="/myAccount/dataSets">
                <Button variant="outlined" disableElevation className="custom-button-gray-1">Cancel
                   </Button>
                </Link>
                  
                
                 <Link to="/myAccount/dataSets/createDataset">
                  <Button  variant="contained" disableElevation className="custom-button-blue"> Next
                    </Button>
                    </Link>
                           </div>
                           
        </div>

        </div>
        
    )
}

export default CreateDataset