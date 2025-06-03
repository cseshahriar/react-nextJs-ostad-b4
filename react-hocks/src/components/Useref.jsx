import React, { useRef, useEffect } from 'react';

const Useref = () => {
  const myHeadLineRef = useRef();
  const firstName = useRef();
  const lastName = useRef();

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

  const change = () => {
    let firstName = firstName.current.value;
    let lastName = lastName.current.value;
  }

  return (
    <div className='container mt-5'>
      <h1 id="myHeadLine">getElementById</h1>
      <h1 ref={myHeadLineRef}>useRef</h1>
      <button onClick={updateHeadline} className='btn btn-primary mb-2'>Update Headline</button>

      <input ref={firstName} placeholder='First Name' className='form-control' /> <br/>
      <input ref={lastName} placeholder='Last Name' className='form-control' /> <br/>
    </div>
  );
};

export default Useref;
