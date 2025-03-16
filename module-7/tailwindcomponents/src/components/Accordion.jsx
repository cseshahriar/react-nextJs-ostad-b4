import React from 'react'

const Accordion = () => {
  return (
    <div className='p-10 space-y-6'>
        <h1 className='font-bold'>Accordion</h1>
          <div className='border rounded-lg overflow-hidden'>
              <button className='w-full text-left px-4 flex justify-between items-center'>
                <span>Accordion item 1</span>
                <span>+</span>
              </button>
              <div className='px-4 bg-red-200'>
                Accordion Content
              </div>
          </div>

          <div className='border rounded-lg overflow-hidden'>
            <button className='w-full text-left px-4 flex justify-between items-center'>
                <span>Accordion item 2</span>
                <span>+</span>
              </button>
              <div className='px-4 bg-red-200'>
                Accordion Content
              </div>
          </div>

          <div className='border rounded-lg overflow-hidden'>
            <button className='w-full text-left px-4 flex justify-between items-center'>
                <span>Accordion item 3</span>
                <span>+</span>
              </button>
              <div className='px-4 bg-red-200'>
                Accordion Content
              </div>
          </div>
    </div>
  )
}

export default Accordion