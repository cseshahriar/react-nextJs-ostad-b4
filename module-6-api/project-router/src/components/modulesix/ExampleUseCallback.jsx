import React from 'react'

const ExampleUseCallback = () => {
     {/**
        The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
      */}
      const items = ['01', '02', '03'];

      const [selectIten, setSelectItem] = useState(null);

      const handleClick = useCallback((item) => {
        console.log('Button clicked using useCallback')
        setSelectItem(item);
      }, [])

  return (
    <div>
        <ul>
        { items.map((item) => (
            <li key={item} onClick={() => handleClick(item)}>{item}</li>
        ))}
        </ul>
    </div>
  )
}

export default ExampleUseCallback