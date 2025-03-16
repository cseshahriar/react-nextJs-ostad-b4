import React, {useEffect, useRef, useState} from 'react'

const options = [
    "Apple", "Orange", "Banana", "Strawberry", "Mango", "Cherry", "Berry", "gaps"
];

const Searchable = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState(options);
  const dropDownRef = useRef(null);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    setFilterOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsOpen(true);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
        if(dropDownRef.current && !dropDownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
        document.addEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <div className='relative w-64' ref={dropDownRef}>
        <input
            onChange={handleSearch}
            onFocus={() => setIsOpen(true)}
            value={search}
            type='text'
            placeholder='Search'
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-amber-500" />
            { isOpen && filterOptions.length > 0 && (
                <ul className='absolute w-full mt-1 bg-white border p-1 border-gray-300 rounded-lg max-h-32 overflow-auto'>
                    {filterOptions.map((option, index) => (
                        <li key={index}
                        className='cursor-pointer hover:bg-blue-300 hover:text-white px-4 py-2 font-semibold'

                        onClick={() => {
                            setSearch(option)
                            setIsOpen(false)
                        }}
                        >{option}</li>
                    ))}
                </ul>
            )}
    </div>
  )
}

export default Searchable