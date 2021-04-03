import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "./Auth.jsx";

let fetchedData = null;
fetch("https://pokeapi.co/api/v2/contest-type")
  .then((response) => response.json())
  .then((data) => (fetchedData = JSON.stringify(data.results[0])));

console.log(fetchedData);

export default function Home() {
  const history = useHistory();
  const [activePost, setActivePost] = useState(null);
  const posts = JSON.parse(localStorage.posts);
  const [auth, setAuth] = useState(false);
  return (
    <>
      <Auth show={auth} closeFunc={setAuth} signup />
      {/* full width landing section */}
      <div className="hero-section">
        <figure className="hero-img"></figure>
        <aside className="hero-text align-items-center">
          <div className="container">
            <section className="row">
              <article className="col-md-10 col-lg-8 col-xl-7">
                <p className="">Share your Ideas with the world</p>
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
                  dolores esse vero cum optio dolor. Dolore pariatur, magnam,
                  veritatis nam, facilis perferendis maxime sequi doloremque
                  voluptatum at nulla! Pariatur, vero?
                </p>
                <button
                  className="btn-def"
                  onClick={() => {
                    setAuth(true);
                  }}
                >
                  Get Started
                </button>
              </article>
            </section>
          </div>
        </aside>
      </div>
      {/*  */}
      <div className="container">
        <p className="heading">Articles for you</p>
        {posts.map((post, index) => (
          // <article
          //   className={``}

          // >
          <p
            className="post"
            onClick={() => {
              // setActivePost(index);
              history.push(`/article/${index}`);
            }}
          >
            {index + 1}.{post.title}
          </p>
          /* {activePost === index && <p>{post.opinion}</p>} */
          // </article>
        ))}
      </div>
    </>
  );
}
