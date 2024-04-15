import "./loginComponent.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Background from "../../assets/images/homepage/login-background.png";
import { Link } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

function Login({ onClose }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const toggleForgotPasswordMenu = () => {
    setForgotPassword(!forgotPassword);
  };

  const handleLogin = () => (
    console.log("Username", username),
    console.log("password", password),
    onClose
  );

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
                <form>
                  <p>Email</p>
                  <input type="email" className="input"></input>
                  <br />
                  <Button
                    sx={{
                      textTransform: "none",
                      width: "30%",
                      color: "black",
                      backgroundColor: "rgba(242, 139, 48, 1)",
                      border: "0px",
                      borderRadius: "0px",
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="closeButtonContainer">
                <Button className="closeButton" onClick={onClose}>
                  <CloseIcon fontSize="large" className="close" />
                </Button>
              </div>
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
                  className="buttonStyle"
                  variant="contained"
                >
                  Create account
                </Button>
              </Stack>
              <a className="policy" href="#">
                Private policy
              </a>
            </>
          )}
        </div>

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
  );
}
export default Login;
