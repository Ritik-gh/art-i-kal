import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "./Auth.jsx";
import { getReadingTime } from "../helper.js";

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
                <p className="">Write the future with your ideas</p>
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
      <div className="container mt-5">
        <p className="heading">Articles for you</p>
        <section className="row">
          {posts.map((post, index) => (
            <aside className="col-lg-6">
              <article
                className="post"
                onClick={() => {
                  // setActivePost(index);
                  history.push(`/article/${index}`);
                }}
              >
                <p>{post.title.split(" ").slice(0, 5).join(" ")}</p>
                <p>{post.opinion.slice(0, 80)}...read more</p>
                <p> {getReadingTime(post.opinion)} read</p>
              </article>
            </aside>
          ))}
        </section>
      </div>
    </>
  );
}
