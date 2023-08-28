import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { logoLight } from "../assets/index.jsx";
import { cart } from '../assets/index.jsx';
import {profile } from '../assets/index.jsx';

const Header = () => {
  
  const productData = useSelector((state) => state.shopClues.productData);
  console.log(productData);
  return (
    <div className = "w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
        <div className ="max-w-screen-xl h-full mx-auto flex items-center justify-between">
           <Link to ="/">
           <div>
                <img className ="w-40 h-30"  src ={logoLight} alt=""/>
            </div>
           </Link>
            <div className ="flex items-center gap-8" >
            <ul className ="flex items-center gap-8">
                <li className= "text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"> Home</li>
                <li className= "text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
                <li className= "text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
                <li className= "text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
                <li className= "text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
            </ul>
            <div className = "relative">
            <img className ="w-10 h-10"src={cart} alt="cart"/>
            {/* <img className ="w-10 h-10 ml-20"src={profile} alt="cart"/> */}
            <span className = "absolute w-15 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
            </span>
            
            </div>
        </div>
        </div>
        <ToastContainer
        position = "top-left"
        autoClose = {2000}
        hideProgressBar = {false}
        newestOnTop = {false}
        closeOnClick 
        rtl = {false}
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme ="dark"
        />   
    </div>
  )
}

export default Header