import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

export default function Article({ match }) {
  const [activePost, setActivePost] = useState(null);
  const posts = JSON.parse(localStorage.posts);
  console.log(match);
  const id = match.params.articleId;
  return (
    <>
      <div className="container header-space">
        {/* {posts.map((post)=>(
            <article className="article">
            <p>{post.title}</p>
            <p>{post.opinion}
            </p>
        </article>
        ))} */}

        <article className={`article mb-5 active`}>
          <p>{posts[id].title}</p>
          <p>{posts[id].opinion}</p>
        </article>
        {/* <Accordion defaultActiveKey="0">
        {posts.map((post, index)=>(
  <>
  <Card className="mb-3">
    <Accordion.Toggle as={Card.Header} eventKey={index}>
    {post.title}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={index}>
      <Card.Body>{post.opinion}</Card.Body>
    </Accordion.Collapse>
  </Card>
 {console.log(index)}</>))}
</Accordion> */}
      </div>
    </>
  );
}
