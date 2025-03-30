import React from 'react'

const SummaryCard = ({label, text, color}) => {
  return (
    <div className='bg-white shadow-lg p-6 rounded-lg'>
      <div className='flex flex-col gap-2'>
        <label className='text-2xl font-semibold text-green-400'>{label}</label>
        <p className={`text-lg font-semibold self-start ${color}`}>{text}</p>
      </div>
    </div>
  )
}

export default SummaryCard