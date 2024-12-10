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
              <button className='bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-900'>Button</button>
              {/** 900 intensity */}
          </div>

          <form>
              <input type="text" placeholder='Enter your name'
                     className="p-4 ml-2 outline-none border border-gray-300 focus:ring-4 focus:ring-red-500"/>
              <button className="mt-4 bg-green-300 text-white rounded hover:bg-green-700 p-4 ml-2"
                      type="submit">Submit
              </button>
          </form>

          {/** grid sm md lg for responsive design */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 m-4 shadow'>
              <div className="bg-red-500 h-20 m-2 p-2 shadow"> Col 1</div>
              <div className="bg-green-500 h-20 m-2 p-2"> Col 2</div>
              <div className="bg-blue-500 h-20 m-2 p-2"> Col 3</div>
              <div className="bg-yellow-500 h-20 m-2 p-2"> Col 4</div>
          </div>

          {/** dark mode toggle */}
          <div className={`${darkMode ? "dark" : ""} dark:bg-gray-500 p-4`}>
              <div>
                  <p className={`${darkMode ? "text-white" : ""}`}>Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Dolore incidunt eos minima perferendis eaque laboriosam, illo obcaecati sed fuga soluta hic
                      quam ratione labore molestiae earum tempore molestias! Saepe, magnam.</p>
                  <button
                      onClick={() => setDarkMod(!darkMode)}
                      className='p-4 rounded text-white bg-green-500 mt-2'
                  >Toggle
                  </button>
              </div>
          </div>
          <div className="m-4">
              <h1>Text Styling</h1>
              <p className="text-red-500 font-bold text-left">This text is colored</p>
              <p className="text-red-200 font-semibold text-center">This text is colored</p>
              <p className="text-red-800 font-light text-right">This text is colored</p>
              <p className="text-blue-900 font-italic">This text is colored</p>
              <p className="text-green-500 bg-opacity-50"> This element has a semi-transparent blue background.</p>
          </div>

          <div
              className="p-4 mt-4 bg-[url('https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg')] bg-center bg-no-repeat bg-cover bg-opacity-75">
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
          </div>

          <div
              className="p-4 bg-gradient-to-r from-blue-300 via-purple-500 to-pink-300 mt-4">
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
          </div>

          <div className="m-4 p-8 w-1/2 h-32">
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
          </div>

          <div className="m-2 p-2 w-80 h-24 min-w-40"> {/* rem */}
              This element has a centered background image that covers the entire area.
              This element has a centered background image that covers the entire area.
          </div>

          <div className="aspect-16/9 bg-yellow-500 mt-4">
              This element maintains a 16:9 aspect ratio.
          </div>

          <div className="flex mt-4">
              <div>Flex item 1</div>
              <div>Flex item 2</div>
          </div>

          <div className="flex mt-4">
              <div className="flex-1">Flex item 1</div>
              <div className="flex-1">Flex item 2</div>
          </div>

          <div className="flex justify-start mt-4">
              <div>Flex item 1</div>
              <div>Flex item 2</div>
          </div>

          <div className="flex justify-between mt-4">
              <div>Flex item 1</div>
              <div>Flex item 2</div>
          </div>

          <div className="flex justify-center mt-4">
              <div>Flex item 1</div>
              <div>Flex item 2</div>
          </div>

          <div className="flex justify-end mt-4">
              <div>Flex item 1</div>
              <div>Flex item 2</div>
          </div>


          <div className="flex item-start mt-4">
              <div className="bg-red-500">Flex item 1</div>
              <div className="bg-blue-500">Flex item 2</div>
          </div>

          <div className="flex item-between mt-4">
              <div className="bg-blue-500">Flex item 1</div>
              <div className="bg-gray-500">Flex item 2</div>
          </div>

          <div className="flex item-center mt-4">
              <div className="bg-gray-500">Flex item 1</div>
              <div className="bg-blue-500">Flex item 2</div>
          </div>

          <div className="flex item-end mt-4">
              <div className="bg-green-500">Flex item 1</div>
              <div className="bg-blue-500">Flex item 2</div>
          </div>

          <div className="flex flex-col mt-4">
              <div className="bg-gray-500">Item 1</div>
              <div className="bg-yellow-500">Item 2</div>
          </div>

          <div className="flex flex-col md:flex-row mt-4">
              <div className="bg-blue-500">Item 1</div>
              <div className="bg-green-500">Item 2</div>
          </div>

          <div className="flex justify-between space-x-4 mt-4">
              <div className="bg-blue-500">Item 1</div>
              <div className="bg-red-500">Item 2</div>
          </div>


          <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="col-span-2 bg-red-500">Wide Column 2</div>
              <div className="bg-blue-500">Normal Column 1</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-red-500">Column 1</div>
              <div className="bg-green-500">Column 2</div>
              <div className="bg-blue-500">Column 3</div>
          </div>

          <div className="grid grid-cols-3 grid-flow-col mt-4">
              <div className="bg-blue-500">Column 1</div>
              <div className="bg-red-500">Column 2</div>
              <div className="bg-green-500">Column 3</div>
              <div className="bg-yellow-500">Column 4</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-red-500">Item 1</div>
              <div className="bg-green-500">Item 2</div>
              <div className="bg-yellow-500">Item 3</div>
          </div>

          <div className="bg-blue-300 sm:bg-red-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-purple-300 mt-4">
              This element changes its background color at different breakpoints.
          </div>

          <div className="text-customcolor-500">
              This element has a custom background color and text color.
          </div>
      </>
  )
}

export default App
