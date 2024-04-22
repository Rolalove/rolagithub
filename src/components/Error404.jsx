// import React from 'react'
import {Link} from 'react-router-dom';
import img404 from '../assets/image4.svg'
import { IoMdArrowRoundBack } from "react-icons/io";



const Error404 = () => {
  return (
    <div >
    <div className='flex flex-col   items-center  py-10  '>
       <img className='h-64 w-full' src={img404} alt="" />
      <p className='font-normal mt-5 text-2xl'>Page not found</p>
      <p className='text-lg font-normal mt-5'>Oops!, page you are loooking for does not exist</p>
      <Link className='flex items-center text-yellow font-bold mt-10 ' to="/"> <IoMdArrowRoundBack />Back to home page...</Link>
      
    </div>
    </div>
  )
}

export default Error404