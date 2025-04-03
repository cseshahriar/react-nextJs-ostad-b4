import React from 'react'
import { useParams } from "react-router"

const brandDetails = () => {
  let params = useParams()

  return (
    <div>Brand params {params.id}</div>
  )
}

export default brandDetails