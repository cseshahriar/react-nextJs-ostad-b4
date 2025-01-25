import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MasterLayout from './layouts/MasterLayout'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const appName = "Ayesha Soft v1.0.0"
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MasterLayout title={appName} />}>
                <Route index element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='contact' element={<Contact/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
