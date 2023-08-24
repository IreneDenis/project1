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
    <div className="flex border border-black flex-col bg-slate-900 h-96 w-72 justify-between">
         <div className='flex h-2/3 w-3/4 bg-white border border-black hover:cursor-pointer'><a href={`/Detailpage/${data.id}`}>
          <img src={data.productUrl[0]} alt='pc'/></a>
          
        </div>
        <div className='flex flex-row h-1/6 w-full  bg-white font-bold'>
            <div className='flex h-2/4 w-full '>{data?.title}</div>
            <div className='flex h-2/4 w-2/6 mr-10'>price:Tsh{data?.price}</div>
        </div>
        <div className='flex '><Rating value={value} onChange={(e) => setValue(e.value)} /></div>
        <div className='flex justify-center w-80 '>
         <button
            className='items-center bg-green-950 text-white animate-pulse rounded-xl w-1/3'
            onClick={()=>navigate()}>Add to Cart
         </button>

        </div> 

        
    </div>
  )
}

export default Customdiv