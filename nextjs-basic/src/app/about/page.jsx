import React from 'react'
import style from './aboutstyle.module.css'
import Image from 'next/image'
import pic from '../../../public/images/shahriar.jpeg'

const page = ({searchParams}) => {
  return (
    <div className={style.text}>
      Params Name: {searchParams.name} <br/>
      Params Price: {searchParams.price} <br/>

      <p className='font-16'>16px</p>
        <Image
        src="/images/shahriar.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <Image
        src={pic}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}

export default page