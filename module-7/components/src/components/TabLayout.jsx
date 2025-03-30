import React, { useState } from 'react'

const TabLayout = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-full max-w-lg bg-white p-6 shadow-lg rounded-lg'>
                <div className='flex border-b transition-all duration-200 ease-in-out'>
                    <button className={
                        `px-4 py-2 text-lg font-semibold focus:outline-none ${activeTab === 'tab1' ? 'border-b-2 border-blue-500' : 'text-gray-600' }`
                    }
                    onClick={() => setActiveTab('tab1')}>Tab 1</button>
                    <button className={
                        `px-4 py-2 text-lg font-semibold focus:outline-none ${activeTab === 'tab2' ? 'border-b-2 border-blue-500' : 'text-gray-600' }`
                    }
                    onClick={() => setActiveTab('tab2')}>Tab 2</button>
                    <button className={
                        `px-4 py-2 text-lg font-semibold focus:outline-none ${activeTab === 'tab3' ? 'border-b-2 border-blue-500' : 'text-gray-600' }`
                    }
                    onClick={() => setActiveTab('tab3')}>Tab 3</button>
                </div>

                <div className='mt-4'>
                    { activeTab === 'tab1' && <p className='text-gray-800'>Content Area1</p>}
                    { activeTab === 'tab2' && <p className='text-gray-800'>Content Area2</p>}
                    { activeTab === 'tab3' && <p className='text-gray-800'>Content Area3</p>}
                </div>
            </div>
        </div>
    )
}

export default TabLayout