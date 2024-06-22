import "./loginComponent.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import SignUp from "../signUp/SignUp";
import axios from 'axios';

function Login({ onClose }) {
  // eslint-disable-next-line
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
// eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [forgotPassword, setForgotPassword] = useState(false);
  // eslint-disable-next-line
  const [signUpOpen, setSignUpOpen] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState();
// eslint-disable-next-line
  const toggleForgotPasswordMenu = () => {
    setForgotPassword(!forgotPassword);
  };


  const handleLogin = async () => { 
   
   
    try { 
        if (!email || !password) { 
            setError('Please enter both email and password.'); 
            return; 
        } 

        const response = await axios.post('http://localhost:8000/users/signin', { email, password }); 
        console.log('Login successful:', response.data); 
    } catch (error) { 
        console.error('Login failed:', error.response ? error.response.data : error.message); 
        setError('Invalid email or password.'); 
    } 
}; 


  const toggleSignUpDrawer = () => {
    setSignUpOpen(!signUpOpen);
  };

  const closeDrawer = () => {
    setSignUpOpen(false);
  }

  return (
    <div className="loginBody">
      <div className="parentDiv">
        <div>
          {forgotPassword ? (
            <>
              <div className="closeButtonContainer">
                <div className="iconArrow">
                  <Button onClick={toggleForgotPasswordMenu}>
                    <ArrowBackIosIcon
                      fontSize="medium"
                      className="arrow"
                    ></ArrowBackIosIcon>
                  </Button>
                </div>
                <div>
                  <Button className="closeButton" onClick={onClose}>
                    <CloseIcon fontSize="large" className="close" />
                  </Button>
                </div>
              </div>
              <div className="fpasswordpage">
                <h1 className="headline">Forgot password?</h1>
                <p className="smallText">
                  Please enter the email address you used to create your account
                  and we will send you a link to reset your password.
                </p>

                <div className="formParent">
                  <form className="form">
                    <p className="smallText">Email</p>
                    <input type="emailForgot" className="input"></input>
                    <br />
                    <div className="alignForgotButton">
                      <Button
                        sx={{
                          textTransform: "none",
                          width: "40%",
                          color: "black",
                          backgroundColor: "#e05f33",
                          border: "0px",
                          borderRadius: "0px",
                          marginTop: "15%",
                        }}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="closeButtonContainer">
                <Button className="closeButton" onClick={onClose}>
                  <CloseIcon fontSize="large" className="close" />
                </Button>
              </div>

            {!signUpOpen && 
            <>
              <p className=" headline">Logga in</p>
             
              <p className="email">Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              ></input>
              <p className="passwordInput">Lösenord</p>
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              ></input>
              <div className="forgot">
                <Checkbox
                  sx={{
                    marginLeft: "-9px",
                    color: "white",
                    borderWidth: "1px",
                  }}
                  {...label}
                />
                <p className="rpassword">Kom ihåg lösenordet</p>
                <div className="fpassword">
                  <Button
                    sx={{
                      color: "white",
                      textTransform: "none",
                      textDecoration: "underline",
                      fontSize: "9px",
                    }}
                    onClick={toggleForgotPasswordMenu}
                  >
                    Glömt lösenord?
                  </Button>
                </div>
              </div>
              <Stack marginTop={4} spacing={2} direction="row">
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: "#e05f33",
                    border: "0px",
                    borderRadius: "0px",
                  }}
                  onClick={handleLogin}
                  className="buttonStyle"
                  variant="contained"
                >
                  Logga in
                </Button>
              </Stack>
              <p className=" headline2">Ny kund?</p>
              <div className="smallText">
                <p>skapa konto för att se </p>
                <p>dina beställningar. </p>
              </div>
             
             <Stack marginTop={2} spacing={2} direction="row">
                <Button
                  sx={{
                    textTransform: "none",
                    width: "100%",
                    color: "black",
                    marginBottom: "10px",
                    backgroundColor: "#e05f33",
                    border: "0px",
                    borderRadius: "0px",
                  }}
                  onClick={toggleSignUpDrawer}
                  className="buttonStyle"
                  variant="contained"
                  >
                  Skapa konto
                </Button>
                <Drawer 
                  open={signUpOpen} 
                  onClose={closeDrawer} anchor="right">
                  <Box sx={{ width: 390, height: 844 }} role="presentation">
                    <SignUp onClose={closeDrawer} />
                  </Box>
              </Drawer>
            </Stack>
              
              
              <a className="policy" href="/endpoint">
                Privat policy
              </a>
          </>
          }

          {signUpOpen &&
            <SignUp onClose={setSignUpOpen} />
          }
          </>
          )}
        </div>
      </div>
     
     
    </div>
  );
}

export default Login;
