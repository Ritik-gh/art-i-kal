import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default function WriteArticle() {
  const history = useHistory();
  const refTitle = useRef();
  const refOpinion = useRef();

  function addArticle() {
    let post = {
      title: refTitle.current.value,
      opinion: refOpinion.current.value,
    };
    if (localStorage.posts) {
      const parsedArray = JSON.parse(localStorage.posts);
      parsedArray.push(post);
      localStorage.posts = JSON.stringify(parsedArray);
    } else {
      let postsArray = [];
      postsArray.push(post);
      localStorage.posts = JSON.stringify(postsArray);
    }
    history.push("/");
  }
  return (
    <>
      <div className="container header-space">
        <label class="article-input">
          Title
          <input
            type="email"
            id="title"
            ref={refTitle}
            placeholder="Type in the title here"
            autofocus
            autocomplete="off"
          />
        </label>

        <label className="article-input">
          Opinion
          <textarea
            placeholder="Leave a comment here"
            ref={refOpinion}
            id="opinion"
          ></textarea>
        </label>
        <article className="col-xl-3 col-md-4 col-sm-6 mx-auto">
          <button className="btn-def w-100" onClick={addArticle}>
            Submit
          </button>
        </article>
      </div>
    </>
  );
}
