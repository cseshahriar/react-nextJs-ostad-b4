import { useRef, useState } from 'react'

const ExampleRef = () => {
    /*
    useRef is a React Hook that lets you reference a value that’s not
    needed for rendering.
    return ref object, that has current value
    mutable object / changeable
    why use ?
      react element access & manipulate, without rerendering task, dom animation control

      1. useRef React Hook
        - useRef return a mutable object, which has a 'current' property
        - in current property , store useRef(<initValue>) or useRef(<undefine>)
        - accessing & manipulate DOM elements, jsx element
        - store mutable value without re-rendering component
        - element animation behavior

        # how useRef works internally?

    */

  const inputRef = useRef(null);
  const renderCounter = useRef(0);

  const [text, setText] = useState('');

  const handleFocus = () => {
    inputRef.current.focus();
  }

  const handleFocusOut = () => {
    inputRef.current.onFocusOut();
  }

  {/** storing mutable value */}
  renderCounter.current += 1;

  return (

    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <input
        ref={inputRef} type="text" name="" placeholder="Test useRef"
        style={{border: '1px solid #000'}}
      />

      <button onClick={handleFocus}>focus Input</button>
      <button onClick={handleFocusOut}>focus Out</button>

      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{border: '1px solid #000'}}
      />
      <p>Component Rendered: {renderCounter.current}</p>
    </div>
  )
}

export default ExampleRef