import { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [incrementFrom, setIncrementFrom] = useState();
    const [decrementFrom, setDecrementFrom] = useState();

    const incrementCount = () => {
      setCount(count + incrementFrom);
    }
    const decrementCount = () => {
        if (count > 0) {
          setCount(count - decrementFrom);
        }
    }

    const handleCounterInitialForm = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      setCount(parseInt(parseInt(data?.count)));
      setIncrementFrom(parseInt(data?.incrementFrom));
      setDecrementFrom(parseInt(data?.decrementFrom));
    }

    useEffect(() => {
        console.log('Counter component re-rendering')
    }, [count]);

    return (
        <>
            <div>
              <h1>Set Counter</h1>
              <fieldset>
                <legend>Set initial counter</legend>
                <form onSubmit={handleCounterInitialForm} style={{display: "flex", flexDirection: 'column', gap: '10px'}}>
                  <input type="number" name='count' id='count'  placeholder='Initial counter value'  />
                  <input type="number" name='incrementFrom' id='incrementFrom'  placeholder='initial increment value' />
                  <input type="number" name='decrementFrom' id='decrementFrom'  placeholder='initial decrement value' />
                  <button style={{padding: "5px", border: "1px solid #000"}}>Set Initial counter value</button>
                </form>
              </fieldset>
            </div>

            <div>
              <h1>State Counter</h1>
              <h3>Counter: { count }</h3>
              <div style={{margin: '6px', display: "flex", gap: "4px"}}>
                <button onClick={incrementCount} style={{padding: "5px", border: "1px solid #000"}}>Increment</button> &nbsp;
                <button onClick={decrementCount} style={{padding: "5px", border: "1px solid #000"}}>Decrement</button>
              </div>
            </div>
        </>
    )
}

export default Counter