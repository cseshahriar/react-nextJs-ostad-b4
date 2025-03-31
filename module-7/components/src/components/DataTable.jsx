import React from 'react'

const DataTable = () => {
  return (
    <div className='p-4'>
        <table className='w-full border-collapse shadow-lg border-gray-300'>
            <thead>
                <tr className='bg-gray-100'>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white'>
                    <td className='px-4 py-2 border'>Name</td>
                    <td className='px-4 py-2 border'>Role</td>
                    <td className='px-4 py-2 border'>Action</td>
                </tr>
                <tr className='bg-white'>
                    <td className='px-4 py-2 border'>Name</td>
                    <td className='px-4 py-2 border'>Role</td>
                    <td className='px-4 py-2 border'>Action</td>
                </tr>
                <tr className='bg-white'>
                    <td className='px-4 py-2 border'>Name</td>
                    <td className='px-4 py-2 border'>Role</td>
                    <td className='px-4 py-2 border'>Action</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default DataTable