import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMod] = useState(false);

  return (
    <>
      {/** hover, focus and other states */}
      <div>
        <h1 className='text-[50px]'>TailwindCSS</h1> {/** 50px font size */}
      </div>

      <div className='p-4 bg-gray-200'> {/**  padding x, y */}
        <h1 className='font-bold text-blue-600 mb-4'>We are learning TailwindCSS</h1>
        <button className='bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-900'>Button</button> {/** 900 intensity */}
      </div>

      <form>
        <input type="text" placeholder='Enter your name' className="p-4 ml-2 outline-none border border-gray-300 focus:ring-4 focus:ring-red-500"/>
        <button className="mt-4 bg-green-300 text-white rounded hover:bg-green-700 p-4 ml-2" type="submit">Submit</button>
      </form>

      {/** grid sm md lg for responsive design */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 m-4 shadow'>
        <div className="bg-red-500 h-20 m-2 p-2 shadow">    Col 1</div>
        <div className="bg-green-500 h-20 m-2 p-2">  Col 2</div>
        <div className="bg-blue-500 h-20 m-2 p-2">   Col 3</div>
        <div className="bg-yellow-500 h-20 m-2 p-2"> Col 4</div>
      </div>

      {/** dark mode toggle */}
      <div className={`${darkMode ? "dark" : ""} dark:bg-gray-500 h-screen p-4`}>
        <div>
          <p className={`${darkMode ? "text-white" : ""}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore incidunt eos minima perferendis eaque laboriosam, illo obcaecati sed fuga soluta hic quam ratione labore molestiae earum tempore molestias! Saepe, magnam.</p>
          <button
            onClick={() => setDarkMod(!darkMode)}
            className='p-4 rounded text-white bg-green-500 mt-2'
          >Toggle</button>
        </div>
      </div>

      <div>
        <button className='my-btn'>Button</button> 
      </div>

    </>
  )
}

export default App
