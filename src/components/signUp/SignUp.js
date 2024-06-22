import React, { useState } from "react";
import Styles from "./signUp.module.css";
import { Form,  useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";
// eslint-disable-next-line
export const signUpAction = async ({ request }) => {
  const data = await request.formData();
// eslint-disable-next-line
  const email = data.get("email")
  // eslint-disable-next-line
const password = data.get("password")
// eslint-disable-next-line
const confirmPassword = data.get("password_confirmation")
// eslint-disable-next-line
if(password !== confirmPassword) {
  return { error: "Passwords do not match"}
}

// eslint-disable-next-line
  const submission = {
    email: data.get("email"),
    password: data.get("password"),
  };
  // eslint-disable-next-line

  console.log("Submission:", submission);
// eslint-disable-next-line
  const response = await fetch("http://localhost:8000/users/create", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(submission),
  });
// eslint-disable-next-line
  console.log("Response:", response);
// eslint-disable-next-line
  if (!response.ok) {
    throw Error("Could not create a new user");
  }
// eslint-disable-next-line
  console.log("Response status:", response.status);
// eslint-disable-next-line
  return response.json();
};

const SignUp = () => {
  // eslint-disable-next-linevvvv
  const [ setError] = useState("");
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
  
   
  };

  return (
    <div className={Styles.signupContainer}>
      <div className={Styles.parent}>
        <p className={Styles.headline}>Skapa konto hos Sotarna i Eksjö</p>
        <p className={Styles.smallText}>
          Se dina bokningar och fakturor.
          <br />
          Allt samlade på samma ställe.
        </p>

        <Form method="post" action="/SignUp" className={Styles.form}>
          <div className={Styles.groupStyle}>
            
            <span className={Styles.email}>Email</span>
            <input
              type="text"
              name="email"
              id="email"
              required
              className={Styles.input}
            />
          </div>
          <div className={Styles.groupStyle}>
            <span className={Styles.password}>Password</span>
            <div className={Styles.passwordContainer}>
              <input
                type={show ? "text" : "password"}
                name="lösenord"
                id="password"
                required
                className={Styles.input}
              />
              <div className={Styles.passwordIcons} onClick={handleShow}>
                {show ? <ImEye /> : <TbEyeClosed />}
              </div>
            </div>
          </div>
          <div className={Styles.groupStyle}>
            <span className={Styles.rePassword}>Upprepa lösenordet</span>
            <div className={Styles.passwordContainer}>
              <input
                type={showConfirmation ? "text" : "password"}
                name="password_confirmation"
                id="password_confirmation"
                required
                className={Styles.input}
              />
              <div className={Styles.passwordIcons} onClick={handleShowConfirmation}>
                {showConfirmation ? <ImEye /> : <TbEyeClosed />}
              </div>
            </div>
          </div>
          <div>
            <Button
              sx={{
                textTransform: "none",
                width: "100%",
                color: "black",
                backgroundColor: "#e05f33",
                border: "0px",
                borderRadius: "0px",
                marginTop: "15px",
              }}
              type="submit"
              className={Styles.buttonStyle}
            >
              Skapa konto
            </Button>
          </div>
          {/* {data && data.error && <p>{data.error}</p>} */}
        </Form>
        <div className={Styles.policy}>Privacy Policy</div>
      </div>
    </div>
  );
};

export default SignUp;
