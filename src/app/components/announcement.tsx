import React from 'react'
import { FaPlus } from "react-icons/fa";

const Announcement = () => {
  return (
    <div className=' w-[100%] md:w-[90%] md:mx-auto bg-black text-white rounded text-[8px] md:text-[14px] p-2 md:justify-center '>
    <p className=' flex items-center justify-between md:justify-center md:items-center relative md:h-[20px] '>Sign up and get 20% discount off to your first order <span className='ml-6'><button>Signup Now <FaPlus className=' absolute md:top-2 top-0 right-[-14] md:right-10 md:text-[12px] ' /></button></span></p>
      
    </div>
  )
}

export default Announcement
