import React, { useRef, useState, Suspense } from "react";
import TryError from "./TryError";
import ErrorBoundry from "./ErrorBoundry";
const Form = React.lazy(() => import("./Form"));
export default function Blog() {
  const [count, setCount] = useState(1);
  const [commentsList, setCommentsList] = useState([
    {
      title: "first",
      content: "first comment",
    },
  ]);
  const newComment = (comment) => {
    setCommentsList([...commentsList, comment]);
    setCount(count + 1);
  };
  return (
    <div>
      <h1>welcome to the Blog</h1>
      <p>Content...</p>
      {commentsList.map((comment) => {
        return (
          <>
            <div>title: {comment.title}</div>
            <div>content: {comment.content}</div>
          </>
        );
      })}

      <Suspense fallback={<h1>wait</h1>}>
        <ErrorBoundry>
          <Form newComment={newComment} />
        </ErrorBoundry>
      </Suspense>
      <ErrorBoundry>
        <TryError />
      </ErrorBoundry>
    </div>
  );
}
