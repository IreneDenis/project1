/* eslint-disable no-unused-vars */
import React from 'react'
import "primeicons/primeicons.css";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import {useValue} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const Detailpage=()=> {
    const{id}=useParams();
    const [data,setData]=useState();
    const [count,setCount]=useState(1);
    const [value,setValue]=useValue();

    useEffect(()=>{
        axios.get(`https://192.168.150.152:3000/products/retrieve-products${id}`).then((res)=>{
            console.log(res.data);
            setData(res.data);
        });
    
     },);

    
  return (
        <div className="flex bg-blue-500 h-screen w-full flex-col ">
            <div className="flex flex-row h-8 w-full bg-blue-900 font-bold" >
              <div className="flex items-center font-bold "><span className="pi pi-phone  ">+001234567890</span></div>
              <div className="flex items-center justify-center h-full w-5/6 font-bold"><h5>Get 50% off on Selected items  | Shop Now</h5></div>
              <div className="flex items-center justify-end ml-3 "><h5>Eng</h5>
                 <span className="pi pi-angle-down"></span>
              </div>
              <div className="flex items-center justify-end ml-6  "><h5>Location</h5>
                 <span className="pi pi-angle-down"></span>
              </div>
            </div>

            <div className="flex bg-white w-full h-16 flex-row text-blue-700  ">
             <div className="flex items-center justify-start  font-bold text-lg"><i className="pi pi-shopping-cart" style={{ fontSize: '2.3rem', }}></i><h5>Shopcart</h5></div>
             <div className="flex items-center text-lg font-bold ml-20 "><a href=''><h5>Categories</h5></a>
                 <span className="pi pi-angle-down"></span>
             </div>
             <div className="flex items-center text-lg font-bold ml-20 "><a href=''><h5>Deals</h5></a></div>
             <div className="flex items-center text-lg font-bold ml-20 "><a href=''><h5>Whats New</h5></a></div>
             <div className="flex items-center text-lg font-bold ml-20 "><a href=''><h5>Delivery</h5></a></div>
             <div className="flex items-center text-lg font-bold ml-20  h-12  w-1/6 ">
                 <input className='border border-black w-full' type="Text" placeholder="search"/>
             </div>
             <div className="flex items-center text-lg font-bold ml-9 "><i className="pi pi-user" style={{ fontSize: '2.1rem' }}></i><a href=''><h5>Account</h5></a></div>
             <div className="flex items-center justify-start  font-bold text-lg ml-9"><i className="pi pi-shopping-cart" style={{ fontSize: '2.3rem', }}></i><a href=''><h5>Cart</h5></a></div>
            </div>
            <div className="flex h-96 w-5/6 bg-orange-300 flex-row mt-2 justify-center items-center">
              <div className='flex border border-black h-full w-5/6 '></div>
              <div className='flex flex-col w-full h-full bg-gray-900'>
                <div className='flex w-full h-44 bg-red-400 font-bold font-sans'> {data?.title}</div>
                <div className='flex w-full h-28 bg-orange-400 font-bold font-sans flex-row '>
                    <div className='flex h-full  w-3/6 items-center'>rating:<Rating value={value} onChange={(e) => setValue(e.value)} /></div>
                    <div className='flex h-full w-3/6 items-center'>price: ${data?.price}.00</div>
                </div>
                <div className='flex w-full h-32 bg-lime-500 font-bold font-sans items-center flex-row'>
                    <div className='flex '>Get a discount of {data?.discount}%</div>
                    <div className='flex '>stocks remain: {data?.productInStock}</div>
                </div>
                <div className='flex w-full h-52 bg-cyan-900 flex-row'>
                    <div className='flex w-full justify-end items-center'><button className='bg-orange-600 h-10 w-9 border border-black rounded-xl'onClick={()=>setCount((prevcount)=>prevcount-1)}>-</button></div>
                    <div className='flex w-full justify-center items-center'><button className='bg-orange-600 h-10 w-9 border border-black rounded-xl'>{count}</button></div>
                    <div className='flex w-full justify-start items-center'><button className='bg-orange-600 h-10 w-9 border border-black rounded-xl'onClick={()=>setCount((prevcount)=>prevcount+1)}>+</button></div>
                </div>
                <div className='flex w-full h-52 bg-red-800 flex-row '>
                    <div className='flex text-black w-full justify-center items-center'><button className='bg-orange-600 h-10 w-32 border border-black rounded-xl'>Buy Now</button></div>
                    <div className='flex text-black w-full justify-center items-center'><button className='bg-orange-600 h-10 w-32 border border-black rounded-xl'>Add to Chart</button></div>
                </div>
              </div>
            </div>

       
        </div>
    )
   }
  export default Detailpage 
   