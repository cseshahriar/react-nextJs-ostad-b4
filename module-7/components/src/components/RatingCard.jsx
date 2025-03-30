import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';

const RatingCard = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-80 text-center'>
            <div className='flex justify-center gap-1 my-3'>
                {
                    [...Array(5)].map((item, index) => (
                        <StarIcon key={index} className='w-6 h-6 text-yellow-400' />
                    ))
                }
            </div>
            <p className='text-gray-500'>Amazing !!!</p>
            <p className='mt-2 text-sm text-gray-500'>Ostad Rating ...</p>
        </div>
    </div>
  )
}

export default RatingCard