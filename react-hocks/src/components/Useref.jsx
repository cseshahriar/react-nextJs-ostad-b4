import React, { useRef, useEffect } from 'react';

const Useref = () => {
  const myHeadLineRef = useRef();

  // ✅ JS DOM manipulation (runs after component is mounted)
  useEffect(() => {
    const myHeadLine = document.getElementById('myHeadLine');
    if (myHeadLine) {
      myHeadLine.innerText = "Updated Headline!";
      myHeadLine.classList.add('highlight');
      myHeadLine.style.color = 'red';
      myHeadLine.setAttribute('data-info', 'important');
    }
  }, []);

  const updateHeadline = () => {
    if (myHeadLineRef.current) {
      myHeadLineRef.current.textContent = "Updated Headline!";
      myHeadLineRef.current.classList.add("highlight");
      myHeadLineRef.current.style.color = "red";
      myHeadLineRef.current.innerText = "Hi Shahriar";
    }
  };

  return (
    <div>
      <h1 id="myHeadLine">getElementById</h1>
      <h1 ref={myHeadLineRef}>useRef</h1>
      <button onClick={updateHeadline}>Update Headline</button>
    </div>
  );
};

export default Useref;
