import { useMemo, useState } from 'react'

const ExampleUseMemo = () => {
  const items = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Alice Doe', age: 35 },
  ]
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log('running expensive calculation');
    return num * 2;
  }

  const memoizedValue = useMemo(
    () => expensiveCalculation(count), [count]
  );

  const total = useMemo(() => {
    console.log('call total')
    return items.reduce((sum, item) => sum + item.age, 0);
  }, [])

  /*
    useRef is a React Hook that lets you reference a value that’s not
    needed for rendering.
    return ref object, that has current value
    mutable object / changeable
    why use ?
      react element access & manipulate, without rerendering task, dom animation control
      2. useMemo React Hook
       - useMemo(<ComputeFunction> <dependencies-array>)
       - prevent re calculating
       - when we have expensive computations result in public component
       - not trigger re-rendering, while value is not updated.
       - prevent re-rendering

       How useMemo works internally?
       - when react renders a component, it execute the function pass to useMemo
       - if value is the dependencies  array have't change  or update since last render, skip executing the callback and return the previous memoized value
       - memorization computational value
       - dashboard or analytics calculation

       when use useMemo
       - when we have expensive computation result in public component
       - prevent unnecessary re-rendering
      */

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <p>Count: {count}</p>
      <p>Result: {memoizedValue}</p>
      <p>Total: {total}</p>
      <button onClick={() => setCount(count + 1)} style={{border: "1px solid #000", padding: '5px'}}>Increment</button>
    </div>
  )
}

export default ExampleUseMemo