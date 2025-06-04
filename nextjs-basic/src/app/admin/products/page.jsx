import React from 'react'

const page = ({params}) => {
  return (
    <div>
      Params Name: {params.name} <br/>
      Params Price: {params.price}
    </div>
  )
}

export default page