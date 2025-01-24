import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Course from './components/Course';
import Form from './components/Form';
import Layout from '../src/Layout'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* nested route */}
        <Route path='/' element={<Layout/>}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/course" element={<Course title="React Course" />} />
          <Route exact path="/login" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
