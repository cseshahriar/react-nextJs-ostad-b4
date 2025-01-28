import React, {useEffect} from 'react'

const UserEffect = () => {
  // wright way
  const apiCall = async() => {
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
  }

  useEffect(() => {
    // data = apiCall();
    // console.log('data', data);

    // or
    (async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    })
  }, [])


  return (
    <div>UserEffect</div>
  )
}

export default UserEffect