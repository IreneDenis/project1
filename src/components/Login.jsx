/* eslint-disable no-unused-vars */
import React from 'react'
import LP from '../assets/Images/LP.jpg'
import { Password } from 'primereact/password';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { useNavigate } from 'react-router-dom';

const Login=()=> {
  const navigate = useNavigate();
    const [value,setValue]=useState("");
  return (
    <div className="bg-blue-500 h-screen w-full flex justify-center flex-col items-center ">
        <div className="flex flex-row h-4/6 w-3/5 bg-white border border-black">
            <div className="w-2/4 h-full flex border border-black">
                <img src={LP} alt=''/>
            </div>
            <div className="w-3/6 h-full flex flex-col border border-black justify-center items-center">
               <div className="flex justify-start w-5/6 mt-4 " > <h1 className="flex font-bold text-blue-800 text-3xl">Welcome to InstaShipin</h1></div>
                <div className="flex justify-start  w-5/6 mt-2  "><h4 className="flex font-bold text-blue-800 content-normal">Ship Smarter Today</h4></div>
                <div className="flex justify-start w-5/6 mt-3" >
                 <span className="p-float-label mt-2">
                   <InputText className="w-60" id="username" />
                   <label htmlFor="username">Username or email</label>
                 </span>
                </div>
                <div className="flex justify-start w-5/6 "><Password className="w-60 mt-3" value={value} onChange={(e) => setValue(e.target.value)} toggleMask /></div>
                <div className="flex flex-row mt-4 w-7/12 h-9 mr-36 justify-start">
                  <div className="flex justify-start items-center ml-4 "><TriStateCheckbox value={value} onChange={() => setValue(value)} /></div>
                  <div className="flex justify-start items-center text-sm w-80  h-full"><h7>Remember me</h7></div>
                  <div className="flex justify-end items-center ml-16 hover:cursor-pointer text-blue-500 text-sm  w-72"><a href=''> <h7>Forgot Password?</h7></a></div>
                </div>
                <div className="flex mt-4 w-32 h-10 "><Button label="Sign in" onClick={()=>navigate("/Homepage")} /></div>
                
            </div>
        </div>

    </div>
  )
}

export default Login