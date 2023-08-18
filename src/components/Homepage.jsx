/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import "primeicons/primeicons.css";
import HP from '../assets/Images/HP.jpg'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Customdiv from './Customdiv';

const Homepage=()=> {
  useEffect(()=>{
    axios.get("https://192.168.150.152:3000/products/retrieve-products").then((res)=>{
        console.log(res);
        setData(res.data);
    });

},[]);


const [data,setData]=useState();
  return (
    <div className="flex bg-blue-500 h-screen w-full flex-col  ">
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
      <div className="flex h-80 w-full bg-orange-300 flex-row ">
        <div className='flex border border-black h-full w-3/5 flex-col'>
          <div className="flex w-full h-5/6 text-black font-bold text-7xl font-serif"><h1>Grab Upto 50% off on Selected Products</h1></div>
          <div className="flex h-full w-2/6 items-center justify-center">
            <div className="flex bg-teal-800 w-36 h-10 justify-center text-xl items-center"><button className='flex rounded-lg'>Buy Now</button></div>
          </div>
        </div>
        <div className="flex h-full w-2/5 "><img src={HP} alt=''/></div>
      </div>
      <div className="flex h-12 w-full flex-col">
        <div className="flex bg-blue-900 h-10 w-full flex-row items-center">
          <div className="flex flex-row ">
            <div className='flex items-center text-lg font-bold ml-10'><a href=''><h5>ProductType</h5></a>
             <span className="pi pi-angle-down"></span>
            </div>
            <div className='flex items-center text-lg font-bold ml-10 '><a href=''><h5>Price</h5></a>
             <span className="pi pi-angle-down"></span>
            </div>
            <div className='flex items-center text-lg font-bold ml-10 '><a href=''><h5>Review</h5></a>
             <span className="pi pi-angle-down"></span>
            </div>
            <div className='flex items-center text-lg font-bold ml-10 '><a href=''><h5>Color</h5></a>
             <span className="pi pi-angle-down"></span>
            </div>
          </div>
          <div className='flex items-center text-lg font-bold justify-end  w-full mr-10 '><a href=''><h5>Sort by</h5></a>
            <span className="pi pi-angle-down"></span>
          </div>
        </div>
        <div className="flex w-full h-auto border border-black">
         <div className="grid grid-cols-2 gap-3 w-auto sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  ">
           {data?.map((post,index)=>{
            <Customdiv data={post}/>
           })}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage