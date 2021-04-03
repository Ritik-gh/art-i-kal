import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";

export default function Auth(props) {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [firstNameError, setFirstNameError] = useState(false);
  const [emailOneError, setEmailOneError] = useState(false);
  const [emailTwoError, setEmailTwoError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  let users;
  let loggedIn = false;

  if (localStorage.users) {
    users = JSON.parse(localStorage.users);
  } else {
    users = [];
  }

  let errors = {
    firstName: "First Name is a must!",
    emailOne: "Email is a must!",
    emailTwo: "Enter a Valid email",
    password: "Enter a valid Password",
  };

  function handleSignup(e) {
    e.preventDefault();
    let user = {};
    user.firstName = firstNameRef.current.value;
    user.lastName = lastNameRef.current.value;
    user.email = emailRef.current.value;
    user.password = passwordRef.current.value;
    setFirstNameError(false);
    setEmailOneError(false);
    setEmailTwoError(false);
    setPasswordError(false);
    if (firstNameRef.current.value === "") {
      setFirstNameError(true);
    } else if (emailRef.current.value === "") {
      setEmailOneError(true);
    } else if (
      !emailRef.current.value.includes("@") ||
      !emailRef.current.value.includes(".")
    ) {
      setEmailTwoError(true);
    } else if (
      passwordRef.current.value === "" ||
      passwordRef.current.value.length < 8
    ) {
      setPasswordError(true);
    } else {
      users.push(user);
      localStorage.users = JSON.stringify(users);
      props.closeFunc(false);
      loggedIn = true;
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    setEmailTwoError(false);
    setPasswordError(false);
    if (users.length) {
      users.forEach(function (user) {
        if (user.email === emailRef.current.value) {
          if (user.password === passwordRef.current.value) {
            loggedIn = true;
          } else {
            setPasswordError(true);
          }
        } else {
          setEmailTwoError(true);
        }
      });
    }
    if (loggedIn) {
      props.closeFunc(false);
    }
  }
  return (
    <Modal
      show={props.show}
      onHide={() => props.closeFunc(false)}
      aria-labelledby="contained-modal-title-vcenter"
      className="auth-popup"
      centered
    >
      <div className="wrapper">
        <form action="">
          {props.signup && (
            <>
              <article>
                <input
                  type="text"
                  name=""
                  ref={firstNameRef}
                  placeholder="First Name"
                  autofocus
                />
                <p className="error">{firstNameError && errors.firstName}</p>
              </article>
              <article>
                <input
                  type="text"
                  name=""
                  ref={lastNameRef}
                  placeholder="Last Name"
                />
                <p className="error">
                  {/*
                   {errors.firstName.invalidity && errors.firstName.msg} 
                   */}
                </p>
              </article>
            </>
          )}
          <article>
            <input
              type="email"
              name=""
              ref={emailRef}
              placeholder="Email"
              autofocus
            />
            <p className="error">
              {(emailOneError && errors.emailOne) ||
                (emailTwoError && errors.emailTwo)}
            </p>
          </article>
          <article>
            <input
              type="password"
              name=""
              ref={passwordRef}
              placeholder="Password"
              autocomplete="new-password"
            />
            <p className="error">{passwordError && errors.password}</p>
          </article>
          <button
            className="btn-def mx-auto"
            onClick={props.signup ? handleSignup : handleLogin}
          >
            {props.signup ? "Register" : "Login"}
          </button>
        </form>
      </div>
    </Modal>
  );
}
