import React, { useRef } from "react";
import { Modal } from "react-bootstrap";

export default function Auth(props) {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  let users;
  let loggedIn = false;

  if (localStorage.users) {
    users = JSON.parse(localStorage.users);
  } else {
    users = [];
  }

  function handleSignup(e) {
    e.preventDefault();
    console.log("entry");
    let user = {};
    user.firstName = firstNameRef.current.value;
    user.lastName = lastNameRef.current.value;
    user.email = emailRef.current.value;
    user.password = passwordRef.current.value;
    users.push(user);
    localStorage.users = JSON.stringify(users);
    console.log("exit");
    props.closeFunc(false);
  }

  function handleLogin(e) {
    e.preventDefault();
    let email = false;
    if (users.length) {
      users.forEach(function (user) {
        if (user.email === emailRef.current.value) {
          email = true;
          if (user.password === passwordRef.current.value) {
            loggedIn = true;
          }
        }
      });
    }
    if (!email) {
      emailRef.current.style.color = "red";
    } else {
      passwordRef.current.style.color = "red";
    }
    if (loggedIn) {
      console.log({ loggedIn });
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
              <input
                type="text"
                name=""
                ref={firstNameRef}
                placeholder="First Name"
                autofocus
                required
              />
              <input
                type="text"
                name=""
                ref={lastNameRef}
                placeholder="Last Name"
                required
              />
            </>
          )}
          <input
            type="email"
            name=""
            ref={emailRef}
            placeholder="Email"
            autofocus
            required
          />
          <input
            type="password"
            name=""
            ref={passwordRef}
            placeholder="Password"
            required
            autocomplete="new-password"
          />
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
