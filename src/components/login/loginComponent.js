import "./loginComponent.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Background from "../../assets/images/homepage/login-background.png";
import SignUp from "../signUp/SignUp";
import axios from 'axios';

function Login({ onClose }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [error, setError] = useState();

  const toggleForgotPasswordMenu = () => {
    setForgotPassword(!forgotPassword);
  };


  const handleLogin = async () => { 
    //console.log("Username", username),
    //console.log("password", password),
   
    try { 
        if (!username || !password) { 
            setError('Please enter both username and password.'); 
            return; 
        } 

        const response = await axios.post('http://localhost:8000/users/signin', { username, password }); 
        console.log('Login successful:', response.data); 
    } catch (error) { 
        console.error('Login failed:', error.response ? error.response.data : error.message); 
        setError('Invalid username or password.'); 
    } 
}; 


  const toggleSignUpDrawer = () => {
    setSignUpOpen(!signUpOpen);
  };

  const closeDrawer = () => {
    setSignUpOpen(false);
  }

  /*
  export const signUpAction = async ({ request }) => {
    const data = await request.formData();
  
    const email = data.get("email")
  const password = data.get("password")
  const confirmPassword = data.get("password_confirmation")
  
  if(password !== confirmPassword) {
    return { error: "Passwords do not match"}
  }
  
  
    const submission = {
      email: data.get("email"),
      password: data.get("password"),
    };
  
    console.log("Submission:", submission);
  
    const response = await fetch("http://localhost:8000/users/create", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(submission),
    });
  
    console.log("Response:", response);
  
    if (!response.ok) {
      throw Error("Could not create a new user");
    }
  
    console.log("Response status:", response.status);
  
    return response.json();
  };
  
  const SignUp = () => {
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
  
    const navigate = useNavigate();
  
    const handleShow = () => {
      setShow(!show);
    };
  
    const handleShowConfirmation = () => {
      setShowConfirmation(!showConfirmation);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
    
      try {
        const redirectUrl = await signUpAction({ request: { formData } });
        console.log("User created successfully");
        navigate(redirectUrl); 
      } catch (error) {
        setError(error.message);
      }
    };
*/
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
                          backgroundColor: "rgba(242, 139, 48, 1)",
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
              <p className=" headline">Sign in to The Everyone Store</p>
              <div className="smallText">
                <p>Welcome back to The Everyone Store!</p>
                <p>
                  Sign in to your account to continue exploring our diverse{" "}
                </p>
                <p>collection of human data and resources.</p>
              </div>
              <p className="email">Email</p>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
              ></input>
              <p className="passwordInput">Password</p>
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
                <p className="rpassword">Remember Password</p>
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
                    Forgot Password?
                  </Button>
                </div>
              </div>
              <Stack marginTop={4} spacing={2} direction="row">
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: "rgba(242, 139, 48, 1)",
                    border: "0px",
                    borderRadius: "0px",
                  }}
                  onClick={handleLogin}
                  className="buttonStyle"
                  variant="contained"
                >
                  Login
                </Button>
              </Stack>
              <p className=" headline2">New to The Everyone Store?</p>
              <div className="smallText">
                <p>Join our community and create your account</p>
                <p>to access exclusive data sets and resources. </p>
              </div>
             
             <Stack marginTop={2} spacing={2} direction="row">
                <Button
                  sx={{
                    textTransform: "none",
                    width: "100%",
                    color: "black",
                    marginBottom: "10px",
                    backgroundColor: "rgba(242, 139, 48, 1)",
                    border: "0px",
                    borderRadius: "0px",
                  }}
                  onClick={toggleSignUpDrawer}
                  className="buttonStyle"
                  variant="contained"
                  >
                  Create account
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
                Private policy
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
      <div
        className={forgotPassword ? "line forgotPasswordLine" : "line"}
      ></div>
      <img src={Background} alt="Background" className="backgroundImg" />
    </div>
  );
}

export default Login;
