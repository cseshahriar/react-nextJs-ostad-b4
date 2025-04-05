import React from 'react'

const Pagination = ({currentPage, totalItems, onPageChange, itemsPerPage}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);
    return (
        <div className='flex justify-center space-x-2'>
            {
                pages.map((page) => (
                    <button
                        key={page}
                        className={`px-3 py-1 rounded-full ${currentPage === page ? 'bg-blue-500 text-white cursor-default' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'} transition`}
                        onClick={() => currentPage !== page && onPageChange(page)}
                        disabled={currentPage === page}
                    >
                        {page}
                    </button>
                ))
            }
        </div>
    )
}

export default Pagination