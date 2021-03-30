import React, {useEffect, useRef} from 'react'
import {useHistory} from 'react-router-dom'

export default function WriteArticle() {
    const history = useHistory();
    const refTitle = useRef();
    const refOpinion = useRef();

    function addArticle() {
        let post = {title: refTitle.current.value, opinion: refOpinion.current.value};
        if(localStorage.posts){
            const parsedArray = JSON.parse(localStorage.posts);
            parsedArray.push(post);
            localStorage.posts = JSON.stringify(parsedArray)
        }
        else{
            let postsArray=[] 
            postsArray.push(post);
            localStorage.posts = JSON.stringify(postsArray);
        }
        history.push("/article");
    }
    return (
        <>
            <div className="container header-space">
            <div class="form-floating mb-3">
  <input type="email" class="form-control bg-dark text-light" id="title" ref={refTitle} placeholder="Type in the title here" autofocus/>
  <label for="title">Title</label>
</div>
            <div class="form-floating">
  <textarea class="form-control bg-dark text-light mb-3" placeholder="Leave a comment here" ref={refOpinion} id="opinion"></textarea>
  <label for="opinion">Opinion</label>
</div>
            <article className="col-xl-3 col-md-4 col-sm-6 mx-auto">
            <button className="btn-def w-100" onClick={addArticle}>Submit</button>
            </article>
            </div>
        </>
    )
}
