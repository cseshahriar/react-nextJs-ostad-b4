import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    }
    const decrementCount = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    }
    return (
        <>
            <h1>State Counter</h1>
            <p>Counter: { count }</p>
            <button onClick={incrementCount}>+</button> &nbsp;
            <button onClick={decrementCount}>-</button>
        </>
    )
}

export default Counter