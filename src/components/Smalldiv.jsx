/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Smalldiv=(props)=> {
    const {data} =props;

  return (
    <div className='flex border border-black flex-col bg-slate-900 h-56 w-48 justify-center items-center'>
    <div className='flex  bg-white border border-black hover:cursor-pointer w-44 h-52'
     ><img src={data} alt='pc' className='flex h-full w-full '/>
     </div>

    </div>
  )
}

export default Smalldiv