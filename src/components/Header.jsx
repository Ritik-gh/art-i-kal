import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "./Auth.jsx";

export default function Header() {
  const refHeader = useRef();
  const history = useHistory();
  const [auth, setAuth] = useState(false);
  const [loggedIn, setLoggedIn] = useState(localStorage.loggedIn);

  useEffect(function () {
    window.addEventListener("scroll", function (e) {
      if (window.scrollY > 50) refHeader.current?.classList.add("scrolled");
      else if (window.scrollY < 50)
        refHeader.current?.classList.remove("scrolled");
    });
  });

  return (
    <>
      <Auth show={auth} closeFunc={setAuth} />
      <header ref={refHeader}>
        <div className="container">
          <section className="row w-100">
            <article className="col-4">
              <p className="brand-logo" onClick={() => history.push("/")}>
                ARTiकल
              </p>
            </article>
            <article className="col-8">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <p onClick={() => history.push("/article")}>Contents</p>
                </li>
                {/* <li className="list-inline-item">
                  <p>About Us</p>
                </li> */}
                <li className="list-inline-item">
                  <button
                    className="btn-def"
                    onClick={(e) => {
                      if (e.target.innerText === "Login") {
                        setAuth(true);
                      } else {
                        setLoggedIn("no");
                        localStorage.loggedIn = "no";
                      }
                    }}
                  >
                    {loggedIn === "yes" ? "Logout" : "Login"}
                  </button>
                </li>
                {/* <li className="list-inline-item">
                  <button className="btn-def">Sign Up</button>
                </li> */}
              </ul>
            </article>
          </section>
        </div>
      </header>
    </>
  );
}
