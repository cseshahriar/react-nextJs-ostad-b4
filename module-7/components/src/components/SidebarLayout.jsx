import { Bars3Icon, SpeakerXMarkIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import SummaryCard from './SummaryCard';

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState();

  const icon = (<svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z"/></svg>);
  const components = (<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75732 6.34323L12 2.10059L16.2426 6.34323L12 10.5859L7.75732 6.34323ZM10.5858 6.34323L12 4.92901L13.4142 6.34323L12 7.75744L10.5858 6.34323Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.10059 12L6.34323 7.75739L10.5859 12L6.34323 16.2427L2.10059 12ZM4.92901 12L6.34323 10.5858L7.75744 12L6.34323 13.4142L4.92901 12Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4143 12L17.6569 16.2427L21.8996 12L17.6569 7.75739L13.4143 12ZM17.6569 10.5858L16.2427 12L17.6569 13.4142L19.0712 12L17.6569 10.5858Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75732 17.657L12 13.4144L16.2426 17.657L12 21.8996L7.75732 17.657ZM10.5858 17.657L12 16.2428L13.4142 17.657L12 19.0712L10.5858 17.657Z" fill="black"/>
    </svg>
  );

  const settingIcon = (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
    >
      <line fill="none" stroke="#000" strokeWidth="2" strokeMiterlimit="10" x1="36" y1="34" x2="41" y2="39" />
      <rect
        x="46.257"
        y="35.065"
        transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 120.5036 47.0858)"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeMiterlimit="10"
        width="8.485"
        height="26.87"
      />
      <polygon fill="none" stroke="#000" strokeWidth="2" strokeMiterlimit="10" points="12,16 18,10 8,4 6,6" />
      <line fill="none" stroke="#000" strokeWidth="2" strokeMiterlimit="10" x1="28" y1="26" x2="15" y2="13" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M58,12.5l-8,3.75l-4-4.125l3.5-8.062l0,0
      C39.5,4.062,37,9,37,14v4L3.5,52l-1.75,6l2.125,2l6.062-1.5L44,25h4C53,25,58,22.5,58,12.5L58,12.5z"
      />
    </svg>
  );


  return (
    <div className='min-h-screen flex bg-gray-100'>
      <div className={`bg-white shadow-lg transition-all duration-300 min-h-screen ${isOpen ? 'w-64' : 'w-16'}`}>
        <div className='flex items-center justify-center justify-between p-4 border-b'>
          <h1 className={`text-xl font-bold text-gray-700 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Dashboard</h1>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-600'>
            { isOpen ? <XMarkIcon className='h-6 w-6'/> : <Bars3Icon className='h-6 w-6'/>}
          </button>
        </div>

        <nav className='mt-4'>
          <NavItem icon={icon} isOpen={isOpen} text={'Home'} />
          <NavItem icon={components} isOpen={isOpen} text={'Components'} />
          <NavItem icon={settingIcon} isOpen={isOpen} text={'Settings'} />
        </nav>
      </div>

      {/* <div className='flex p-6'>
        <h2>Main content Area</h2>
        <p>page content goes here</p>
      </div> */}
       {/** header & main content */}
       <div className='flex-1 flex flex-col'>
          <header className='bg-white shadow-md p-[14px] flex items-center justify-between'>
            <span className='font-bold text-lg'>Header</span>
          </header>

          <main>
            {/** Dashboard summary card */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
              <SummaryCard label={'Sales'} text={'2000'} color={"text-orange-500"} />
              <SummaryCard label={'Revenue'} text={'2000'}  color={"text-blue-500"} />
              <SummaryCard label={'Order'} text={'2000'} />
            </div>
          </main>
        </div>
    </div>
  )
}

function NavItem({icon, isOpen, text}) {
  return(
    <div className='flex items-center space-x-3 p-3 hover:bg-blue-100 cursor-auto'>
      { icon }
      { isOpen && <span>{text}</span>}
    </div>
  )
}

export default SidebarLayout