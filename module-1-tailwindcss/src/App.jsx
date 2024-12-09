import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [darkmod, setDarkMod] = useState(false);

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
    </>
  )
}

export default App
