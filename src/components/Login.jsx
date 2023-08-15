/* eslint-disable no-unused-vars */
import React from 'react'
import LP from '../assets/Images/LP.jpg'
import { Password } from 'primereact/password';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Login=()=> {
    const [value,setValue]=useState("");
  return (
    <div className="bg-blue-400 h-screen w-full flex justify-center flex-col items-center ">
        <div className="flex flex-row h-4/6 w-4/6 bg-white border border-black">
            <div className="w-3/6 h-full flex border border-black">
                <img src={LP} alt=''/>
            </div>
            <div className="w-3/6 h-full flex flex-col border border-black justify-center items-center">
               <div className="flex justify-start w-5/6"> <h2 className="flex font-bold text-blue-800 text-3xl">Welcome to InstaShipin</h2></div>
                <div className="flex justify-start  w-5/6 mt-4"><h3 className="flex font-semibold text-blue-800 content-normal">Ship Smarter Today</h3></div>
                <div className="flex justify-start w-5/6 mt-5" >
                 <span className="p-float-label mt-4">
                   <InputText className="w-60" id="username" />
                   <label htmlFor="username">Username</label>
                 </span>
                </div>
                <div className="flex justify-start w-5/6 "><Password className="w-60 mt-4" value={value} onChange={(e) => setValue(e.target.value)} toggleMask /></div>
                <div className="flex mt-4 w-32 h-10 "><Button label="Submit" /></div>
            </div>
        </div>

    </div>
  )
}

export default Login