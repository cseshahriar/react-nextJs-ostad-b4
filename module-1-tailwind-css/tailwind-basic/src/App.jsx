import './App.css'

function App() {
  return (
    <>
    {/* tailwind utility first framework */}
      <div className='p-4 bg-gray-100'>
        <h2 className='font-bold text-blue-600 mb-4'>We are learning tailwind</h2>
        <button className='bg-blue-500 text-white p-4 rounded hover:bg-blue-900'>Click Me</button>
      </div>

      <div className='p-4 bg-gray-100'>
        <h2 className='font-bold text-blue-600 mb-4'>Form</h2>
        <input type='text' className='p-4 m-1' placeholder='Enter something' />
        <button className='bg-blue-500 text-white p-4 rounded hover:bg-blue-900'>Submit</button>
      </div>
    </>
  )
}

export default App
