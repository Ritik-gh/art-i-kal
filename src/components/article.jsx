import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

export default function Article() {
  const [activePost, setActivePost] = useState(null);
  const posts = JSON.parse(localStorage.posts);
  console.log(posts);
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

        {posts.map((post, index) => (
          <article
            className={`article mb-5 ${activePost === index && "active"}`}
            onClick={() => setActivePost(index)}
          >
            <p>
              {index + 1}.{post.title}
            </p>
            {activePost === index && <p>{post.opinion}</p>}
          </article>
        ))}
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
