import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { TbSmartHome } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { useState, useEffect } from 'react';
import EventData from '../Component/EventData'

import { Link } from 'react-router-dom';





const Event = () => {
  
     
  return (
    <>


<main className='mb-[4rem]'>
    <header className='bg-orange-800 h-[4rem] w-full'>

        <div className='flex justify-between px-[1rem]  pt-[1rem]'>
            <span>
                <Link to={'/'}>
                <TbSmartHome  className='text-[1.8rem] text-slate-100 cursor-pointer' />
                </Link>
              </span>
            <span className='relative'>
<FaCartShopping className='text-[1.8rem]   text-slate-100 cursor-pointer' />
<span className='bg-red-500 top-0 pl-[6px] h-6 w-6 absolute rounded-full left-[-.8rem]
 text-white text-[14px]'>2</span>
            </span>
        </div>
    </header>


  <div>
    <img src="https://i.pinimg.com/236x/c3/eb/60/c3eb60f5f2cafd403b77b6dca8c34411.jpg"
    
    className='w-full h-[15rem]    object-cover'
    alt="" />
  </div>

  <section className='mt-4'>
    <h1 className='bg-red-500 w-[60%] text-center py-2 text-white text-[18px] font-semibold'>Upcomming Events</h1>
  </section>

<figure className='flex flex-wrap'>

    {EventData.map((events, idx) =>{
        return (

            <section key={idx} className='flex px-[.5rem] mt-8   shadow-md pb-4 w-full '>
                <div className='h-[100px] w-[200px] '>

<img src={events.image} alt=""  className='w-full h-[7rem] rounded-[15px] object-cover  '/>
                </div>
<figcaption className=' ml-2'>

           <p>{events.name}</p>

           <div className='my-2'>
           <p className='flex' > <span className='pt-1 mr-1'><SlLocationPin className='text-red-500' /></span> {events.venue}</p>
           </div>
           <button className='w-full py-2  rounded-[10px] border border-orange-900'>
            <Link to={`/Edetail/${events.name}`}>
            Buy Ticket

            </Link>
            </button>
           {/* <p>{events.description.substring(0, 0) + '.......'}</p> */}
</figcaption>

            </section>
        )
    })}
</figure>

</main>


    </>
  )
}

export default Event