import React from 'react'
import Course from './Course'
import Form from './Form'

const Home = () => {
  return (
    <div>
        <h1 className="text-[50px]">Home</h1>
        {/** props pass */}
        <Course title="Nextjs"/>
        <Form />
    </div>
  )
}

export default Home