import React, { useState, useRef, useEffect } from "react";


export default function Form(props) {
  // const [title,setTitle] = useState(null);
  const titleRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    titleRef.current.focus();
  }, []);
  const titleKeyUp = (e) => {
    if (e.key === "Enter") {
      contentRef.current.focus();
    }
  };
  const onSubmit = () => {
    props.newComment({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
    titleRef.current.value = "";
    contentRef.current.value = "";
  };
  return (
    <div>
      <input
        ref={titleRef}
        onKeyUp={(e) => titleKeyUp(e)}
        placeholder="title:"
      />
      <input ref={contentRef} placeholder="content:" />
      <button onClick={() => onSubmit()}>SUBMIT</button>
    </div>
  );
}
