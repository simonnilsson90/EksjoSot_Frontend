import "./loginComponent.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";


import Background from "../../assets/images/homepage/login-background.png"



function Login({ onClose }){

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const handleLogin = () => (
  console.log("Username", username),
  console.log("password", password),
  onClose
 )


return (
    <div className="loginBody">

    
    <div  className="parentDiv"> 

    <div  className="closeButtonContainer">
  <Button className="closeButton" onClick={onClose}>
    <CloseIcon fontSize="large" className="close" />
  </Button>
</div>
        <p className=" headline">Sign in to The Everyone Store</p>

        <div className="smallText">
        <p >Welcome back to The Everyone Store!</p>
<p  >Sign in to your account to continue exploring our diverse </p>
<p>collection of human data and resources.</p>
        </div>

       

<p className="email">Email</p>
<input value={username} 
onChange={(e) => setUsername(e.target.value)} className="input"></input>


<p className="passwordInput">Password</p>
<input value={password} 
type="password"
onChange={(e) => setPassword(e.target.value)} className="input"></input>
    
    <div className="forgot">
 
    <Checkbox sx={{
      marginLeft: '-9px',
       color: 'white',
       borderWidth: '1px' }}  {...label}  />

    <p className="rpassword"  >Remember Password</p>
     <a className="remember" href="#">Forgot Password?</a>

</div>


    



<Stack marginTop={4} spacing={2} direction="row"> 
      <Button sx={{
        color: 'black',backgroundColor: 'rgba(242, 139, 48, 1)',
        border: '0px',
         borderRadius: '0px'}} onClick={handleLogin}  className="buttonStyle" variant="contained">Login</Button>
    </Stack>

    <p className=" headline2">New to The Everyone Store?</p>

    <div className="smallText">
        <p >Join our community and create your account</p>
<p  >to access exclusive data sets and resources. </p>

        </div>

   


    <Stack  marginTop={2} spacing={2} direction="row"> 
      <Button sx={{
        textTransform: 'none',
        width: '100%', 
        color: 'black' , 
        marginBottom: '10px',
        backgroundColor: 'rgba(242, 139, 48, 1)',
         border: '0px',
         borderRadius: '0px',}}
         className="buttonStyle"
          variant="contained">Create account</Button>
    </Stack>


<a className="policy" href="#">Private policy</a>



<img
                    src={Background}
                    width={250}
                    height={504}
                    alt="Background"
               className="backgroundPos"  
                  />

<div className="line"></div>

    </div>
    </div>
)
    
}
export default Login