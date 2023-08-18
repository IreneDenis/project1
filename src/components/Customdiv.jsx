/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Rating } from 'primereact/rating';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Customdiv=(props)=> {
    const {data}=props;
    const navigate=useNavigate();
    const [value,setValue]=useState("");
  return (
    <div className="flex flex-col bg-slate-800 h-80 w-72 justify-between">
        <div className='flex h-2/3 w-full bg-green-600 border border-black'><a href={`/Detailpage/${data.id}`}><img src={data.productUrl[0].img1} alt=''/></a>
          
        </div>
        <div className='flex flex-row h-1/6 w-full  bg-red-600'>
            <div className='flex h-full w-2/3'>{data?.title}</div>
            <div className='flex h-full w-1/6'>price:${data?.price}.00</div>
        </div>
        <div className='flex '><Rating value={value} onChange={(e) => setValue(e.value)} /></div>
        <div className='flex justify-center '>
         <button
            className='items-center bg-white text-black animate-pulse'
            label="Add to Cart"
            onClick={()=>navigate()}>
         </button>

        </div>
    </div>
  )
}

export default Customdiv