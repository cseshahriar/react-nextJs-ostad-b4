import { Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-16 bg-gray-500'>
      <Outlet />
    </div>
  )
}


export default Layout