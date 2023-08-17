import React from 'react'
import { logoDark ,payment1 } from '../assets'
import{ImGithub } from 'react-icons/im';
import{FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaHome, FaFacebook} from'react-icons/fa'
import {MdLocationOn} from'react-icons/md';
import{BsPersonFill,BsPaypal} from 'react-icons/bs';
import{logoLight,payment} from '../assets';

const Footer = () => {
  return (
    <div className = "bg-black text-[#949494] py-20 font-titleFont">
        <div className = "max-w-screen-xl mx-auto grid grid-cols-4">
            <div className = "flex flex-col gap-7">
                <img className = "w-32" src={logoDark} alt="logoDark" />
                <p className = "text-white text-sm tracking-wide">© ShopClues.com </p>
                <img className = "w-56" src={payment1} alt="payment" />
            
                <div className = "flex gap-5 text-lg text-gray-400">
                <ImGithub className = "h-8 w-8 hover:text-white duration-300 cursor-pointer"/>
                <FaYoutube className = "h-8 w-8hover:text-white duration-300 cursor-pointer"/>
                <FaFacebookF className = "h-8 w-8 hover:text-white duration-300 cursor-pointer"/>
                <FaTwitter className = "h-8 w-8 hover:text-white duration-300 cursor-pointer"/>
                <FaInstagram className = "h-8 w-8 hover:text-white duration-300 cursor-pointer"/>
            </div>
        </div>
            <div>
                <h2 className = "text-2xl font-semibold text-white mb-4">Locate Us</h2>
                <div className ="text-base flex flex-col gap-2">
                <p>Address: 112, Sector 44, Gurugram, Haryana 122003, India</p>
                <p>Phone: +91 XXX XXX XXX</p>
                </div>
            </div>
            <div>
                <h2 className = "text-2xl font-semibold text-white mb-4">Profile</h2>
                <div className = "flex flex-col gap-2 text-base">
                <p className ="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span>
                    <BsPersonFill/>
                </span>
                    My Account
                </p>
                <p className ="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span>
                    <BsPaypal/>
                </span>
                    Checkout
                </p>
                <p className ="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span>
                    <FaHome/>
                </span>
                    Order Tracking
                </p>
                <p className ="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span>
                    <MdLocationOn/>
                </span>
                    Help & Support
                </p>
                </div>
            </div>

                <div className= "flex flex-col justify-center ">
                    <input className = "bg-transparent border px-4 py-2 text-sm " placeholder= "e-mail"type ="text"/>
                    <button className ="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>

                </div>


        </div> 
    </div>
  )
}

export default Footer