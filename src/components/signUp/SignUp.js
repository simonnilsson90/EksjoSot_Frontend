import React, { useState } from "react";
import Styles from "./signUp.module.css";
import { Form, useActionData, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";

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

  return (
    <div className={Styles.signupContainer}>
      <div className={Styles.parent}>
        <p className={Styles.headline}>Sign Up for The EveryOne Store</p>
        <p className={Styles.smallText}>
          Unlock the full potential of The EveryOne Store by creating your
          account today.
          <br />
          Join our community of creators, innovators and visionaries to access
          exclusive data sets and resources.
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
                name="password"
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
            <span className={Styles.rePassword}>Re-enter Password</span>
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
                backgroundColor: "rgba(242, 139, 48, 1)",
                border: "0px",
                borderRadius: "0px",
                marginTop: "15px",
              }}
              type="submit"
              className={Styles.buttonStyle}
            >
              Create account
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
