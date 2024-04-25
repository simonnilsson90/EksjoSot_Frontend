import React, { useState } from "react";
import Styles from "./signUp.module.css";
import { Form, redirect, useActionData } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";

export const signUpAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    password: data.get("password"),
    password_confirmation: data.get("password_confirmation"),
  };

  console.log(submission);

  // send post request
  if (submission.password !== submission.password_confirmation) {
    return { error: "Password is not the same" };
  }

  const response = await fetch("http://localhost:8000/users/create", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ submission }),
  });

  // if(!response.ok) {
  //     const {message} = await response.json();

  //     return {message}
  // }
  console.log(response.status);

  if (!response.ok) {
    throw Error("Could not create a new user");
  }

  //redirect the user
  // return redirect('/')

  onclose(false);
};

const SignUp = ({ onClose }) => {
  const data = useActionData();

  const [signUp, setSignUp] = useState(false);
  const [show, setShow] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleSignUp = () => {
    setSignUp(!signUp);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleShowConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  return (
    <div className={Styles.signupContainer}>
      <div className={Styles.parent}>
        <div>
          <p className={Styles.headline}>Sign Up for The EveryOne Store</p>
        </div>
        <div>
          <p className={Styles.smallText}>
            Unlock the full potential of The EveryOne Store by creating your
            account today.
            <br />
            Join our community of creators, innovators and visionaries to access
            exclusive data sets and resources.
          </p>
        </div>

        <Form method="post" action="/SignUp" className={Styles.form}>
          <div>
            <span className={Styles.name}>
              User Name (Not needed right now)
            </span>
            <input
              type="text"
              name="username"
              id="username"
              className={Styles.input}
            />
          </div>
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
              <div
                className={Styles.passwordIcons}
                onClick={handleShowConfirmation}
              >
                {showConfirmation ? <ImEye /> : <TbEyeClosed />}
              </div>
            </div>
          </div>
          <div className={Styles.forgot}>
            <div className={Styles.clickRemember}>
              <input
                type="checkbox"
                name="remember_password"
                id="remember_password"
                unchecked
                className={Styles.checkbox}
              />
              <span>Remember Password</span>
            </div>
            <div>
              <div>Why sign up?</div>
            </div>
          </div>
          <div>
            <Stack marginTop={4} spacing={2} direction="row">
              <Button
                sx={{
                  textTransform: "none",
                  width: "100%",
                  color: "black",
                  backgroundColor: "rgba(242, 139, 48, 1)",
                  border: "0px",
                  borderRadius: "0px",
                  marginTop: "15%",
                }}
                type="submit"
                className={Styles.buttonStyle}
              >
                Create account
              </Button>
            </Stack>
          </div>
          {/* {data && data.error && <p>{data.error}</p>} */}
        </Form>
        <div className={Styles.policy}>Privacy Policy</div>
      </div>
    </div>
  );
};

export default SignUp;
