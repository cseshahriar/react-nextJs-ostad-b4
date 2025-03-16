import React from 'react'

const Badge = () => {
  return (
    <div>
      <h1>Badge</h1>
      <div className="bg-amber-50 border-1 shadow-lg py-2 flex gap-4">
        <span className='inline-flex items-center rounded-lg bg-slate-50  ring-1 px-2 py-1 bg-green-500'>Simple Badge</span>
        <span className='inline-flex items-center rounded-lg bg-zinc-100 ring-1 px-2 py-1 bg-green-500'>Simple Badge</span>
      </div>
    </div>
  )
}

export default Badge