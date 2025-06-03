import React, { useRef } from 'react'

const Caching = () => {
    let APIData = useRef(null);
    let myPTag = useRef(null);

    const fetchData = async() => {
        const response = await fetch("https://dummyjson.com/products")
        APIData.current = await response.json();
    }

    const showData = () => {
        myPTag.current.innerText = JSON.stringify(APIData.current);
    }

    return (
        <div className='container'>
            <p ref={myPTag}></p>
            <button onClick={fetchData}>Call API</button>
            <button onClick={showData}>ShowData</button>
        </div>
    )
}

export default Caching